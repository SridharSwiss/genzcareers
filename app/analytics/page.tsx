'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

const SAMPLE_TEXTS = [
  {
    label: 'Customer Support Email',
    text: 'I am extremely frustrated with the product. It stopped working after two days and the customer support team has been completely unhelpful. I want a refund immediately. This is unacceptable and I will be leaving a negative review.',
  },
  {
    label: 'Product Review (Positive)',
    text: 'Absolutely love this product! It exceeded all my expectations. The quality is outstanding and delivery was faster than promised. The customer service team was friendly and responsive. Highly recommend to everyone.',
  },
  {
    label: 'Board Update',
    text: 'Q3 performance was mixed. Revenue grew 12% year-on-year, driven by strong enterprise sales. However, customer churn increased to 8%, above our 5% target. The new product launch is delayed by 6 weeks due to supply chain constraints. We remain confident in the full-year forecast.',
  },
];

const STOP_WORDS = new Set([
  'the','a','an','and','or','but','in','on','at','to','for','of','with','by','from','is','was',
  'are','were','been','be','have','has','had','do','does','did','will','would','could','should',
  'may','might','shall','this','that','these','those','i','we','you','he','she','it','they','my',
  'your','our','their','its','me','us','him','her','them','all','not','no','so','as','if','than',
  'then','there','when','where','who','which','what','how','after','before','during','between',
]);

const POSITIVE_WORDS = new Set(['love','great','excellent','outstanding','amazing','fantastic','good','best','perfect','happy','pleased','exceeded','recommend','friendly','responsive','faster','confidence','strong','positive']);
const NEGATIVE_WORDS = new Set(['frustrated','unhelpful','unacceptable','negative','bad','terrible','awful','worst','hate','angry','disappointed','delayed','churn','problem','issue','failed','poor','slow','wrong']);

function analyse(text: string) {
  const words = text.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(Boolean);
  const meaningful = words.filter((w) => !STOP_WORDS.has(w) && w.length > 2);
  const freq: Record<string, number> = {};
  for (const w of meaningful) freq[w] = (freq[w] || 0) + 1;
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 12);
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 10);
  const posCount = words.filter((w) => POSITIVE_WORDS.has(w)).length;
  const negCount = words.filter((w) => NEGATIVE_WORDS.has(w)).length;
  let sentiment: 'Positive' | 'Negative' | 'Neutral';
  let sentimentPct: number;
  if (posCount > negCount * 1.5) { sentiment = 'Positive'; sentimentPct = Math.min(95, 55 + posCount * 8); }
  else if (negCount > posCount * 1.5) { sentiment = 'Negative'; sentimentPct = Math.min(95, 55 + negCount * 8); }
  else { sentiment = 'Neutral'; sentimentPct = 50; }
  return { wordCount: words.length, sentenceCount: sentences.length, keywords: sorted, sentiment, sentimentPct, avgSentenceLen: sentences.length ? Math.round(words.length / sentences.length) : 0 };
}

const SENTIMENT_COLOR = { Positive: 'text-emerald-400', Negative: 'text-red-400', Neutral: 'text-amber-400' };
const SENTIMENT_BG = { Positive: 'bg-emerald-400', Negative: 'bg-red-400', Neutral: 'bg-amber-400' };

export default function AnalyticsPage() {
  const [text, setText] = useState(SAMPLE_TEXTS[0].text);
  const result = analyse(text);

  return (
    <div className="fade-up mx-auto max-w-5xl px-6 py-16">
      <div className="section-tag mb-3">Tools</div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Text Analytics Dashboard
      </h1>
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-400">
        Paste any business text — email, review, report, customer feedback — and get instant
        keyword frequency, sentiment score, and communication insights.
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input */}
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            {SAMPLE_TEXTS.map((s) => (
              <button
                key={s.label}
                onClick={() => setText(s.text)}
                className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-400 hover:border-primary hover:text-white transition-colors"
              >
                {s.label}
              </button>
            ))}
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={12}
            placeholder="Paste text to analyse..."
            className="w-full resize-none rounded-2xl border border-white/10 bg-surface px-5 py-4 text-sm leading-relaxed text-slate-200 outline-none placeholder:text-slate-600 focus:border-primary"
          />
        </div>

        {/* Results */}
        <div className="space-y-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { num: result.wordCount, label: 'Words' },
              { num: result.sentenceCount, label: 'Sentences' },
              { num: result.avgSentenceLen, label: 'Avg. words/sentence' },
            ].map((s) => (
              <div key={s.label} className="card p-4 text-center">
                <div className="text-2xl font-extrabold text-white">{s.num}</div>
                <div className="mt-0.5 text-[0.65rem] text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Sentiment */}
          <div className="card p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-bold text-white">Sentiment</div>
              <span className={`font-bold ${SENTIMENT_COLOR[result.sentiment]}`}>{result.sentiment}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full transition-all ${SENTIMENT_BG[result.sentiment]}`}
                style={{ width: `${result.sentimentPct}%` }}
              />
            </div>
            <div className="mt-1.5 flex justify-between text-[0.65rem] text-slate-600">
              <span>Negative</span><span>Neutral</span><span>Positive</span>
            </div>
          </div>

          {/* Keywords */}
          <div className="card p-5">
            <div className="mb-3 text-sm font-bold text-white">Top Keywords</div>
            <div className="space-y-2">
              {result.keywords.map(([word, count]) => (
                <div key={word} className="flex items-center gap-3">
                  <div className="w-24 truncate font-mono text-xs text-slate-300">{word}</div>
                  <div className="flex-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-1.5 rounded-full bg-primary transition-all"
                      style={{ width: `${(count / (result.keywords[0][1] || 1)) * 100}%` }}
                    />
                  </div>
                  <div className="w-4 text-right font-mono text-xs text-slate-500">{count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
