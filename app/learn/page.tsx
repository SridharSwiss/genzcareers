import type { Metadata } from 'next';
import Link from 'next/link';
import Countdown from '@/components/Countdown';
import ModuleGrid from '@/components/ModuleGrid';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: 'AI & Innovation Leadership Mastery — 19-Module Programme',
  description:
    'Master AI, Machine Learning, Innovation and Strategy in 19 comprehensive modules. Start 3 modules free — no credit card required.',
};

const STATS = [
  { num: '12,400+', label: 'Active Learners' },
  { num: '19',      label: 'Comprehensive Modules' },
  { num: '4.9★',    label: 'Average Rating' },
  { num: '94%',     label: 'Completion Rate' },
];

const STEPS = [
  { num: '01', icon: '🆓', title: 'Start Free',           desc: 'Access Modules 1–3 with zero commitment. Explore AI fundamentals, machine learning, and deep learning before spending a penny.' },
  { num: '02', icon: '📚', title: 'Learn & Apply',         desc: 'Each module contains key concepts, real-world case studies, practical exercises, and a knowledge quiz. Apply it to your own context immediately.' },
  { num: '03', icon: '🎓', title: 'Earn Your Certificate', desc: 'Complete all modules and quizzes to earn your AI & Innovation Leadership certificate. Share it on LinkedIn and prove your expertise.' },
  { num: '04', icon: '🤖', title: 'AI Coaching',           desc: 'Every module is paired with an AI coach that answers questions, debates ideas, and pushes your thinking — available 24/7, instantly.' },
];

export default function LearnPage() {
  return (
    <div className="fade-up">
      {/* HERO */}
      <section className="bg-hero-glow">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.12] px-4 py-1.5 text-xs font-semibold text-accent">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
            3 Modules Free — No Credit Card
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Master <span className="grad-text">AI, Innovation</span>
            <br />&amp; Strategy
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
            19 comprehensive modules built for business leaders. From machine learning fundamentals
            to corporate strategy — everything in one programme, starting free.
          </p>
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Link href="#modules" className="btn-primary px-10 py-4 text-base">
              Start Learning Free →
            </Link>
            <Link href="#pricing" className="btn-ghost px-8 py-4 text-base">
              See Full Curriculum
            </Link>
          </div>
          <Countdown />
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <span>✅ Self-paced learning</span>
            <span>🏆 Certificate of completion</span>
            <span>♾️ Lifetime access</span>
            <span>💬 AI coaching included</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/[0.06] bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className={`px-6 py-8 text-center ${i < 3 ? 'md:border-r md:border-white/[0.06]' : ''}`}>
              <div className="text-3xl font-extrabold text-white">{s.num}</div>
              <div className="mt-1 text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="section-tag mb-3">How It Works</div>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Learn at your own pace
        </h2>
        <p className="max-w-xl text-slate-400">
          Three steps from sign-up to certification. No live sessions, no fixed schedule — just you
          and the material.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.num} className="card relative overflow-hidden p-8">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary to-accent" />
              <div className="mb-3 font-mono text-xs font-semibold text-primary">{s.num}</div>
              <div className="mb-4 text-3xl">{s.icon}</div>
              <h3 className="mb-2 font-bold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 pt-0">
        <div className="section-tag mb-3">Programme Curriculum</div>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          19 Modules. One Complete Programme.
        </h2>
        <p className="mb-12 max-w-xl text-slate-400">
          Structured across three pillars: AI &amp; Machine Learning, Innovation, and Strategy.
          Click any free module to start learning now.
        </p>
        <ModuleGrid />
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 pt-0">
        <div className="section-tag mb-3">Pricing</div>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Incredibly affordable. Massively valuable.
        </h2>
        <p className="mb-12 max-w-xl text-slate-400">
          Choose the bundle that fits your goals. All prices are one-time — no subscriptions, no
          hidden fees.
        </p>
        <Pricing />
      </section>

      {/* CAMPAIGN */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <EmailCapture />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="section-tag mb-3">FAQ</div>
        <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-white">Common questions</h2>
        <Faq />
      </section>
    </div>
  );
}
