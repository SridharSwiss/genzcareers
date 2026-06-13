'use client';

import Link from 'next/link';
import { useAccess } from '@/hooks/useAccess';

export default function Pricing() {
  const { buyBundle } = useAccess();

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Free */}
        <div className="card p-9">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Free Starter</div>
          <div className="mb-1 text-5xl font-extrabold text-white"><sup className="text-xl">$</sup>0</div>
          <p className="mb-7 mt-3 text-sm leading-relaxed text-slate-400">
            Start your AI journey with the first 3 modules. No credit card required.
          </p>
          <ul className="mb-8 space-y-3 text-sm">
            <Feat ok text="Module 1: AI Ecosystem" />
            <Feat ok text="Module 2: ML Black Box" />
            <Feat ok text="Module 3: Deep Learning" />
            <Feat ok text="Case studies + quizzes" />
            <Feat text="Certificate of completion" />
            <Feat text="AI coaching" />
          </ul>
          <Link href="/learn#modules" className="btn-ghost w-full">Start Free Now</Link>
        </div>

        {/* Full — featured */}
        <div className="card relative border-primary p-9 shadow-[0_0_0_1px_#6366F1,0_8px_40px_rgba(99,102,241,0.2)]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg bg-primary px-4 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
            Most Popular
          </div>
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Full Access</div>
          <div className="mb-1 text-5xl font-extrabold text-white"><sup className="text-xl">$</sup>69</div>
          <div className="text-xs text-slate-500 line-through">Was $144 — Save $75</div>
          <p className="mb-7 mt-3 text-sm leading-relaxed text-slate-400">
            All 19 modules, certificate, AI coaching, and lifetime access. Best value.
          </p>
          <ul className="mb-8 space-y-3 text-sm">
            <Feat ok text="All 19 modules unlocked" />
            <Feat ok text="AI + Innovation + Strategy" />
            <Feat ok text="Certificate of completion" />
            <Feat ok text="AI coaching (24/7)" />
            <Feat ok text="Lifetime access + updates" />
            <Feat ok text="Downloadable resources" />
          </ul>
          <button className="btn-primary w-full" onClick={() => buyBundle('full')}>
            Get Full Access — $69 →
          </button>
        </div>

        {/* Individual */}
        <div className="card p-9">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Individual Modules</div>
          <div className="mb-1 text-5xl font-extrabold text-white"><sup className="text-xl">$</sup>9</div>
          <div className="text-xs text-slate-500">Per module</div>
          <p className="mb-7 mt-3 text-sm leading-relaxed text-slate-400">
            Unlock specific modules that match your learning goals. Pay only for what you need.
          </p>
          <ul className="mb-8 space-y-3 text-sm">
            <Feat ok text="Choose any paid module" />
            <Feat ok text="Case studies + exercises" />
            <Feat ok text="Module quiz + resources" />
            <Feat text="Certificate of completion" />
            <Feat text="AI coaching" />
            <Feat text="Bundle discounts" />
          </ul>
          <Link href="/learn#modules" className="btn-ghost w-full">Browse Modules</Link>
        </div>
      </div>

      {/* Bundles */}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <BundleRow
          name="AI Bundle" price={49} was="Modules 4–12 · Was $81"
          desc="Generative AI, ethics, business strategy, and innovation leadership."
          onBuy={() => buyBundle('ai')}
        />
        <BundleRow
          name="Strategy Bundle" price={39} was="Modules 13–19 · Was $63"
          desc="Oxford strategy view, futures, purpose, partnerships, and playbook."
          onBuy={() => buyBundle('strategy')}
        />
      </div>
    </div>
  );
}

function Feat({ ok, text }: { ok?: boolean; text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className={ok ? 'text-emerald-400' : 'text-slate-600'}>{ok ? '✓' : '✕'}</span>
      <span className={ok ? '' : 'text-slate-500'}>{text}</span>
    </li>
  );
}

function BundleRow({ name, price, was, desc, onBuy }: {
  name: string; price: number; was: string; desc: string; onBuy: () => void;
}) {
  return (
    <div className="card flex flex-wrap items-center gap-6 p-7">
      <div className="min-w-[200px] flex-1">
        <div className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">{name}</div>
        <div className="text-3xl font-extrabold text-white">${price}</div>
        <div className="text-xs text-slate-500 line-through">{was}</div>
        <p className="mt-2 text-sm text-slate-400">{desc}</p>
      </div>
      <button className="btn-primary" onClick={onBuy}>Buy {name} →</button>
    </div>
  );
}
