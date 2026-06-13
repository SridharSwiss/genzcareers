'use client';

import { FormEvent, useEffect, useState } from 'react';

export default function EmailCapture() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [refUrl, setRefUrl] = useState('https://genzcareers.app/learn?ref=YOUR_CODE');

  useEffect(() => {
    const code = localStorage.getItem('referral_code');
    if (code) setRefUrl(`${window.location.origin}/learn?ref=${code}`);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email') as string;
    localStorage.setItem('user_email', email);
    const code = 'REF' + Math.random().toString(36).slice(2, 8).toUpperCase();
    localStorage.setItem('referral_code', code);
    setRefUrl(`${window.location.origin}/learn?ref=${code}`);
    setSent(true);
    // In production, POST to your email service (Mailchimp, Brevo, EmailJS):
    // fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email, code }) })
  }

  function copyReferral() {
    navigator.clipboard.writeText(refUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/[0.08] px-6 py-16 text-center sm:px-12">
      <div className="section-tag mb-3">Free Resource</div>
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-white">
        Get the AI Leadership Toolkit
      </h2>
      <p className="mx-auto mb-8 max-w-lg text-[0.95rem] leading-relaxed text-slate-400">
        Join 12,400+ learners. Get the free AI Readiness Assessment, Innovation Canvas, and
        Strategy Playbook template — delivered to your inbox instantly.
      </p>

      <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-wrap justify-center gap-3">
        <input
          type="email" name="email" required placeholder="your@email.com"
          className="min-w-[220px] flex-1 rounded-xl border border-white/10 bg-surface px-4 py-3.5 text-sm text-slate-200 outline-none placeholder:text-slate-600 focus:border-primary"
        />
        <button type="submit" disabled={sent} className="btn-primary disabled:opacity-70">
          {sent ? '✓ Sent!' : 'Get Free Toolkit →'}
        </button>
      </form>
      <p className="mt-3 text-xs text-slate-600">No spam. Unsubscribe anytime. Your data is never sold.</p>

      {/* Referral */}
      <div className="card mx-auto mt-10 max-w-xl p-6 text-left">
        <div className="mb-1.5 font-bold text-white">📣 Share &amp; Save 20%</div>
        <p className="mb-3 text-sm text-slate-400">
          Share your unique referral link. When a friend signs up, you both get 20% off any paid module.
        </p>
        <div className="flex gap-2.5">
          <input
            readOnly value={refUrl}
            className="flex-1 rounded-lg border border-white/10 bg-surface px-3.5 py-2.5 font-mono text-xs text-slate-300 outline-none"
          />
          <button onClick={copyReferral} className="btn-primary whitespace-nowrap px-4 py-2.5 text-xs">
            {copied ? '✓ Copied' : 'Copy Link'}
          </button>
        </div>
      </div>
    </div>
  );
}
