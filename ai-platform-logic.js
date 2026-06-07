/* ══════════════════════════════════════════════════════════════════
   AI Mastery Platform — Core Logic
   Access control: localStorage (Stripe redirect sets unlock flags)
   ══════════════════════════════════════════════════════════════════ */

// ── ACCESS CONTROL ─────────────────────────────────────────────────
function isUnlocked(modId) {
  if (modId <= 3) return true;
  if (localStorage.getItem('access_full') === '1') return true;
  if (modId >= 4 && modId <= 12 && localStorage.getItem('access_ai') === '1') return true;
  if (modId >= 13 && modId <= 19 && localStorage.getItem('access_strategy') === '1') return true;
  return localStorage.getItem(`access_mod_${modId}`) === '1';
}

function isCompleted(modId) {
  return localStorage.getItem(`done_mod_${modId}`) === '1';
}

function markComplete(modId) {
  localStorage.setItem(`done_mod_${modId}`, '1');
}

// ── STRIPE PAYMENT ─────────────────────────────────────────────────
function buyModule(modId) {
  const url = PAYMENT.modules[modId];
  if (!url || url.includes('REPLACE')) {
    showToast('Payment link not configured yet. Contact the course provider.');
    return;
  }
  window.location.href = url + `?client_reference_id=mod_${modId}`;
}

function buyBundle(type) {
  const url = PAYMENT[type];
  if (!url || url.includes('REPLACE')) {
    showToast('Payment link not configured yet. Contact the course provider.');
    return;
  }
  window.location.href = url;
}

// ── HANDLE POST-PAYMENT REDIRECT ──────────────────────────────────
// Stripe redirects back with ?access=TYPE after successful payment.
// Set success_url in your Stripe payment link to:
//   https://yourdomain.com/ai-platform.html?access=FULL
//   https://yourdomain.com/ai-platform.html?access=AI
//   https://yourdomain.com/ai-platform.html?access=STRATEGY
//   https://yourdomain.com/ai-platform.html?access=MOD_4   (individual)
function handleStripeReturn() {
  const params = new URLSearchParams(window.location.search);
  const access = params.get('access');
  if (!access) return;
  const a = access.toUpperCase();
  if (a === 'FULL')     localStorage.setItem('access_full', '1');
  else if (a === 'AI')  localStorage.setItem('access_ai', '1');
  else if (a === 'STRATEGY') localStorage.setItem('access_strategy', '1');
  else if (a.startsWith('MOD_')) {
    const num = a.replace('MOD_', '');
    localStorage.setItem(`access_mod_${num}`, '1');
  }
  // Clean URL
  window.history.replaceState({}, '', window.location.pathname);
  showToast('🎉 Access unlocked! Enjoy your module.');
}

// ── COUNTDOWN TIMER ────────────────────────────────────────────────
function startCountdown() {
  const KEY = 'earlybird_end';
  let end = parseInt(localStorage.getItem(KEY) || '0');
  if (!end || end < Date.now()) {
    end = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days from first visit
    localStorage.setItem(KEY, end);
  }
  function tick() {
    const diff = end - Date.now();
    if (diff <= 0) {
      document.getElementById('countdown-bar').style.display = 'none';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    document.getElementById('cd-d').textContent = pad(d);
    document.getElementById('cd-h').textContent = pad(h);
    document.getElementById('cd-m').textContent = pad(m);
    document.getElementById('cd-s').textContent = pad(s);
  }
  tick();
  setInterval(tick, 1000);
}

// ── EMAIL SIGNUP ───────────────────────────────────────────────────
function handleEmailSignup(e) {
  e.preventDefault();
  const email = document.getElementById('email-input').value;
  localStorage.setItem('user_email', email);
  // Generate referral code
  const code = 'REF' + Math.random().toString(36).substr(2, 6).toUpperCase();
  localStorage.setItem('referral_code', code);
  document.getElementById('referral-url').value = `${window.location.origin}${window.location.pathname}?ref=${code}`;
  showToast('✅ Toolkit sent! Check your inbox. Your referral link is ready below.');
  e.target.querySelector('button').textContent = '✓ Sent!';
  e.target.querySelector('button').disabled = true;
  // In production, POST to your email service (Mailchimp, EmailJS, Brevo, etc.)
  // Example: fetch('/api/subscribe', { method:'POST', body: JSON.stringify({email, code}) })
}

function copyReferral() {
  const input = document.getElementById('referral-url');
  navigator.clipboard.writeText(input.value).then(() => showToast('📋 Referral link copied!'));
}

// Load saved referral code
function initReferralBox() {
  const code = localStorage.getItem('referral_code');
  if (code) {
    document.getElementById('referral-url').value = `${window.location.origin}${window.location.pathname}?ref=${code}`;
  }
}

// ── MODULE GRID RENDER ─────────────────────────────────────────────
function renderModuleGrid() {
  const grid = document.getElementById('module-grid');
  grid.innerHTML = MODULES.map(m => {
    const unlocked = isUnlocked(m.id);
    const done     = isCompleted(m.id);
    const catClass = { ai: 'cat-ai', innovation: 'cat-innovation', strategy: 'cat-strategy' }[m.cat];
    const catLabel = { ai: 'AI & ML', innovation: 'Innovation', strategy: 'Strategy' }[m.cat];
    const badgeCls = m.free ? 'badge-free' : 'badge-paid';
    const badgeTxt = m.free ? 'FREE' : `$9`;
    return `
    <div class="module-card ${unlocked ? '' : 'locked'} ${done ? 'done' : ''}"
         onclick="${unlocked ? `openPlayer(${m.id})` : `showUnlockPrompt(${m.id})`}">
      <div class="completed-check">✓</div>
      <div class="module-card-top">
        <div class="module-icon">${m.icon}</div>
        <span class="module-badge ${badgeCls}">${badgeTxt}</span>
      </div>
      <div class="module-num">MODULE ${String(m.id).padStart(2,'0')}</div>
      <div class="module-title">${m.title}</div>
      <div class="module-desc">${m.tagline}</div>
      <div class="module-meta">
        <div class="meta-item">⏱ ${m.duration}</div>
        <div class="meta-item">📖 ${m.lessons} lessons</div>
        <span class="cat-label ${catClass}">${catLabel}</span>
      </div>
      ${!unlocked ? `<div class="lock-overlay"><div class="lock-cta">🔒 Unlock — $9</div></div>` : ''}
    </div>`;
  }).join('');
}

// ── UNLOCK PROMPT ──────────────────────────────────────────────────
function showUnlockPrompt(modId) {
  const m = MODULES.find(x => x.id === modId);
  if (!m) return;
  const bundle = modId <= 12 ? 'AI Bundle ($49)' : 'Strategy Bundle ($39)';
  const bundleType = modId <= 12 ? 'ai' : 'strategy';
  // Simple inline prompt — replace with a modal if preferred
  const choice = confirm(
    `🔒 "${m.title}" requires access.\n\n` +
    `Options:\n` +
    `• Single module: $9\n` +
    `• ${bundle} — save more\n` +
    `• Full Access: $69 (all 19 modules)\n\n` +
    `Click OK to unlock this module for $9, or Cancel to see bundle options.`
  );
  if (choice) buyModule(modId);
  else window.location.hash = '#pricing';
}

// ── COURSE PLAYER ──────────────────────────────────────────────────
let currentModId = null;
let activeTab = 'overview';
let quizAnswers = {};
let quizSubmitted = false;

function openPlayer(modId) {
  currentModId = modId;
  quizAnswers = {};
  quizSubmitted = false;
  const overlay = document.getElementById('player-overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderPlayerSidebar();
  loadModuleContent(modId);
}

function closePlayer() {
  document.getElementById('player-overlay').classList.remove('open');
  document.body.style.overflow = '';
  renderModuleGrid(); // refresh checkmarks
}

function renderPlayerSidebar() {
  const cats = [
    { label: 'AI & Machine Learning', ids: [1,2,3,4,5,6] },
    { label: 'Innovation', ids: [7,8,9,10,11,12] },
    { label: 'Strategy', ids: [13,14,15,16,17,18,19] },
  ];
  document.getElementById('player-sidebar').innerHTML = cats.map(cat => `
    <div class="sidebar-section">
      <div class="sidebar-section-title">${cat.label}</div>
      ${cat.ids.map(id => {
        const m = MODULES.find(x => x.id === id);
        if (!m) return '';
        const unlocked = isUnlocked(id);
        const done = isCompleted(id);
        return `<div class="sidebar-module ${id === currentModId ? 'active' : ''}" onclick="${unlocked ? `loadModuleContent(${id})` : `showUnlockPrompt(${id})`}">
          <span class="sm-num">${String(id).padStart(2,'0')}</span>
          <span class="sm-title">${m.title}</span>
          ${done ? '<span class="sm-done">✓</span>' : !unlocked ? '<span class="sm-lock">🔒</span>' : ''}
        </div>`;
      }).join('')}
    </div>
  `).join('');
}

function loadModuleContent(modId) {
  currentModId = modId;
  quizAnswers = {};
  quizSubmitted = false;
  const m = MODULES.find(x => x.id === modId);
  if (!m) return;

  document.getElementById('player-title').textContent = `Module ${modId}: ${m.title}`;
  // Update sidebar active
  document.querySelectorAll('.sidebar-module').forEach((el, i) => {
    el.classList.toggle('active', MODULES[i] && MODULES[i].id === modId);
  });

  // Progress
  const total = MODULES.length;
  const done = MODULES.filter(x => isCompleted(x.id)).length;
  const pct = Math.round((done / total) * 100);
  document.getElementById('player-progress-text').textContent = `${pct}% complete`;
  document.getElementById('player-progress-fill').style.width = pct + '%';

  if (!isUnlocked(modId)) {
    renderLockedScreen(m);
    return;
  }
  renderModulePlayer(m);
}

function renderLockedScreen(m) {
  document.getElementById('player-content').innerHTML = `
    <div class="locked-module-screen">
      <div class="lock-icon-big">🔒</div>
      <div class="locked-title">${m.title}</div>
      <div class="locked-desc">This module requires a paid unlock. Choose a single module ($9), the ${m.id <= 12 ? 'AI Bundle ($49)' : 'Strategy Bundle ($39)'}, or Full Access ($69) for all 19 modules.</div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
        <button class="btn btn-primary" onclick="buyModule(${m.id})">Unlock This Module — $9</button>
        <button class="btn btn-ghost" onclick="closePlayer();setTimeout(()=>window.location.hash='#pricing',100)">See All Bundles</button>
      </div>
    </div>
  `;
}

function renderModulePlayer(m) {
  const isDone = isCompleted(m.id);
  document.getElementById('player-content').innerHTML = `
    <div style="margin-bottom:8px;">
      <span class="cat-label ${{'ai':'cat-ai','innovation':'cat-innovation','strategy':'cat-strategy'}[m.cat]}">${{'ai':'AI & Machine Learning','innovation':'Innovation','strategy':'Strategy'}[m.cat]}</span>
    </div>
    <h2 style="font-size:1.8rem;font-weight:800;margin-bottom:8px;letter-spacing:-0.02em;">Module ${m.id}: ${m.title}</h2>
    <p style="color:var(--muted);margin-bottom:32px;">${m.tagline}</p>

    <div class="content-tabs">
      <div class="ctab active" onclick="switchTab(this,'overview')">Overview</div>
      <div class="ctab" onclick="switchTab(this,'concepts')">Key Concepts</div>
      <div class="ctab" onclick="switchTab(this,'casestudy')">Case Study</div>
      <div class="ctab" onclick="switchTab(this,'exercise')">Exercise</div>
      <div class="ctab" onclick="switchTab(this,'quiz')">Quiz</div>
    </div>

    <!-- OVERVIEW -->
    <div class="ctab-panel active" id="tab-overview">
      <div style="font-size:0.95rem;line-height:1.8;color:var(--muted);margin-bottom:24px;">${m.overview}</div>
      <div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:20px;margin-bottom:24px;">
        <div style="font-weight:700;margin-bottom:14px;">Learning Objectives</div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;">
          ${m.objectives.map(o => `<li style="display:flex;gap:10px;font-size:0.875rem;"><span style="color:var(--primary);flex-shrink:0;">→</span>${o}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- CONCEPTS -->
    <div class="ctab-panel" id="tab-concepts">
      <div class="concept-cards">
        ${m.concepts.map((c,i) => `
          <div class="concept-card" onclick="toggleConcept(this)">
            <div class="concept-num">CONCEPT ${String(i+1).padStart(2,'0')}</div>
            <div class="concept-card-head">
              <div class="concept-title">${c.title}</div>
              <span style="color:var(--muted);font-size:1.1rem;flex-shrink:0;">+</span>
            </div>
            <div class="concept-body">${c.body}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- CASE STUDY -->
    <div class="ctab-panel" id="tab-casestudy">
      <div class="case-box">
        <div class="case-company">${m.caseStudy.company}</div>
        <div class="case-title">${m.caseStudy.title}</div>
        <div class="case-body">${m.caseStudy.body}</div>
        <div class="case-result">💡 <strong>Key Result:</strong> ${m.caseStudy.result}</div>
      </div>
      <div style="margin-top:20px;background:var(--card);border:1px solid var(--border);border-radius:12px;padding:20px;">
        <div style="font-weight:700;margin-bottom:10px;">Discussion Questions</div>
        <ol style="padding-left:20px;display:flex;flex-direction:column;gap:10px;">
          ${m.caseStudy.discussion.map(q => `<li style="color:var(--muted);font-size:0.875rem;line-height:1.6;">${q}</li>`).join('')}
        </ol>
      </div>
    </div>

    <!-- EXERCISE -->
    <div class="ctab-panel" id="tab-exercise">
      <div class="exercise-box">
        <div style="font-weight:700;font-size:1.05rem;margin-bottom:6px;">${m.exercise.title}</div>
        <div style="color:var(--muted);font-size:0.875rem;line-height:1.6;margin-bottom:20px;">${m.exercise.intro}</div>
        <div class="exercise-steps">
          ${m.exercise.steps.map((s,i) => `
            <div class="exercise-step">
              <div class="step-circle">${i+1}</div>
              <div class="step-text">${s}</div>
            </div>`).join('')}
        </div>
      </div>
      <button class="complete-btn ${isDone ? 'done' : ''}" id="complete-btn" onclick="handleComplete(${m.id})">
        ${isDone ? '✓ Module Completed' : 'Mark Module Complete'}
      </button>
    </div>

    <!-- QUIZ -->
    <div class="ctab-panel" id="tab-quiz">
      <div style="font-weight:700;margin-bottom:4px;">Knowledge Check</div>
      <div style="color:var(--muted);font-size:0.85rem;margin-bottom:24px;">5 questions · Select the best answer for each</div>
      ${renderQuiz(m.quiz, m.id)}
    </div>
  `;
}

function switchTab(el, tabId) {
  document.querySelectorAll('.ctab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ctab-panel').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-' + tabId)?.classList.add('active');
  activeTab = tabId;
}

function toggleConcept(card) {
  card.classList.toggle('open');
}

function handleComplete(modId) {
  markComplete(modId);
  const btn = document.getElementById('complete-btn');
  if (btn) { btn.textContent = '✓ Module Completed'; btn.classList.add('done'); }
  renderPlayerSidebar();
  loadModuleContent(modId); // refresh progress bar
  showToast('🎓 Module marked complete! Keep going.');
}

// ── QUIZ ENGINE ────────────────────────────────────────────────────
function renderQuiz(questions, modId) {
  return `<div id="quiz-container">
    ${questions.map((q, qi) => `
      <div class="quiz-q" id="quiz-q-${qi}">
        <div class="quiz-q-text">${qi+1}. ${q.q}</div>
        <div class="quiz-options">
          ${q.opts.map((opt, oi) => `
            <div class="quiz-opt" id="opt-${qi}-${oi}" onclick="selectOpt(${qi},${oi},${q.ans})">
              <div class="quiz-opt-letter">${'ABCD'[oi]}</div>
              ${opt}
            </div>`).join('')}
        </div>
      </div>`).join('')}
    <div class="quiz-submit-row">
      <button class="btn btn-primary" onclick="submitQuiz(${JSON.stringify(questions).replace(/"/g,'&quot;')},${modId})" id="quiz-submit-btn">Submit Answers</button>
      <div class="quiz-score" id="quiz-score"></div>
    </div>
  </div>`;
}

function selectOpt(qi, oi, correct) {
  if (quizSubmitted) return;
  // Deselect others in this question
  document.querySelectorAll(`[id^="opt-${qi}-"]`).forEach(el => el.style.borderColor = '');
  const el = document.getElementById(`opt-${qi}-${oi}`);
  el.style.borderColor = 'var(--primary)';
  quizAnswers[qi] = oi;
}

function submitQuiz(questions, modId) {
  if (quizSubmitted) return;
  quizSubmitted = true;
  let correct = 0;
  questions.forEach((q, qi) => {
    const selected = quizAnswers[qi];
    q.opts.forEach((_, oi) => {
      const el = document.getElementById(`opt-${qi}-${oi}`);
      if (!el) return;
      if (oi === q.ans) { el.classList.add('correct'); }
      else if (oi === selected && selected !== q.ans) { el.classList.add('wrong'); }
    });
    if (selected === q.ans) correct++;
  });
  const pct = Math.round((correct / questions.length) * 100);
  document.getElementById('quiz-score').textContent = `${correct}/${questions.length} correct (${pct}%)`;
  document.getElementById('quiz-submit-btn').textContent = 'Retake Quiz';
  document.getElementById('quiz-submit-btn').onclick = () => {
    quizSubmitted = false; quizAnswers = {};
    loadModuleContent(modId);
    setTimeout(() => switchTab(document.querySelectorAll('.ctab')[4], 'quiz'), 50);
  };
  if (pct >= 80) {
    showToast(`🏆 ${pct}% — Outstanding! Move to the exercise to complete this module.`);
  } else {
    showToast(`${pct}% — Review the concepts and try again.`);
  }
}

// ── TOAST ──────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.opacity = '1';
  setTimeout(() => { t.style.opacity = '0'; }, 3500);
}

// ── FAQ ────────────────────────────────────────────────────────────
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── INIT ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  handleStripeReturn();
  startCountdown();
  renderModuleGrid();
  initReferralBox();
});
