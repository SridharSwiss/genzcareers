'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'Is the free tier really free?',
    a: 'Yes, absolutely. Modules 1, 2, and 3 are permanently free — no credit card, no trial period. You can work through the AI Ecosystem, Machine Learning, and Deep Learning modules completely free of charge, including all content, case studies, and quizzes.',
  },
  {
    q: 'How long does the full programme take?',
    a: 'Each module takes approximately 2–4 hours to complete (reading, exercises, and quiz). The full 19-module programme typically takes 6–10 weeks at a pace of 2–3 modules per week. It is entirely self-paced — take as long or as short as you need.',
  },
  {
    q: 'Do I need a technical background?',
    a: 'No. This programme is designed for business leaders, managers, and professionals who want to understand and apply AI — not build it. Technical concepts are explained in accessible language with business-relevant examples. A curious mind is all you need.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We use Stripe, which accepts all major credit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, and bank transfers in many countries. All transactions are secured with 256-bit encryption. Payments are processed instantly — module access is granted immediately after purchase.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Yes. If you are not satisfied within 7 days of purchase, contact us for a full refund — no questions asked. We are confident in the quality of the content, which is why we offer this guarantee. After 7 days, refunds are considered on a case-by-case basis.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {FAQS.map((f, i) => (
        <div key={i} className="card overflow-hidden">
          <button
            className="flex w-full items-center justify-between px-6 py-5 text-left text-[0.95rem] font-semibold text-white"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {f.q}
            <span className={`text-slate-500 transition-transform ${open === i ? 'rotate-180' : ''}`}>▾</span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm leading-relaxed text-slate-400">{f.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
