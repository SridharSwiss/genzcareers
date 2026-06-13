import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Future of Jobs — 2025 to 2030 Strategic Analysis',
  description: 'Which roles grow, which decline, and the skills that will matter most through 2030.',
};

const GROWING = [
  { role: 'AI & Machine Learning Specialists', growth: '+40%', why: 'Every industry is racing to deploy AI; talent supply lags demand by years.' },
  { role: 'Sustainability Specialists', growth: '+33%', why: 'Net-zero commitments and EU disclosure rules (CSRD) create structural demand.' },
  { role: 'Business Intelligence Analysts', growth: '+31%', why: 'Data volumes keep compounding; firms need people who turn it into decisions.' },
  { role: 'Information Security Analysts', growth: '+30%', why: 'Attack surface grows with every digitised process; regulation tightens.' },
  { role: 'FinTech Engineers', growth: '+29%', why: 'Embedded finance, real-time payments, and digital assets rewire money.' },
  { role: 'Renewable Energy Engineers', growth: '+27%', why: 'The largest infrastructure build-out since electrification is underway.' },
];

const DECLINING = [
  { role: 'Data Entry Clerks', change: '−26%', why: 'OCR + LLMs automate structured and semi-structured input end to end.' },
  { role: 'Administrative & Executive Secretaries', change: '−21%', why: 'Scheduling, drafting, and triage are increasingly AI-assisted.' },
  { role: 'Accounting & Payroll Clerks', change: '−18%', why: 'Rules-based financial processing is among the easiest work to automate.' },
  { role: 'Bank Tellers & Cashiers', change: '−15%', why: 'Digital payments and self-service continue their decades-long advance.' },
];

const SKILLS = [
  { skill: 'Analytical & creative thinking', note: 'The #1 skill pair in every employer survey — machines predict, humans frame.' },
  { skill: 'AI & big data literacy', note: 'Not building models — knowing what they can do, where they fail, how to direct them.' },
  { skill: 'Leadership & social influence', note: 'Change management is the bottleneck of every AI transformation.' },
  { skill: 'Resilience, flexibility & agility', note: 'Average skill half-life is now under 5 years; learning velocity beats knowledge stock.' },
  { skill: 'Systems thinking', note: 'Value moves to people who see how technology, market, and organisation interact.' },
];

export default function FuturesPage() {
  return (
    <div className="fade-up mx-auto max-w-5xl px-6 py-16">
      <div className="section-tag mb-3">Strategic Research</div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        The Future of Jobs: 2025–2030
      </h1>
      <p className="mb-14 max-w-2xl text-lg leading-relaxed text-slate-400">
        Synthesised from the World Economic Forum Future of Jobs research, McKinsey Global
        Institute analysis, and labour market data. The structural story: 170 million new roles
        created, 92 million displaced — a net gain, but a brutal transition for the unprepared.
      </p>

      {/* Key stats */}
      <div className="mb-14 grid gap-4 sm:grid-cols-3">
        {[
          { num: '22%', label: 'of all jobs will structurally change by 2030' },
          { num: '39%', label: 'of core skills will change by 2030' },
          { num: '59%', label: 'of workers will need reskilling or upskilling' },
        ].map((s) => (
          <div key={s.label} className="card p-6 text-center">
            <div className="text-4xl font-extrabold text-accent">{s.num}</div>
            <div className="mt-2 text-sm text-slate-400">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Growing */}
      <h2 className="mb-6 text-2xl font-extrabold text-white">🚀 Fastest-Growing Roles</h2>
      <div className="mb-14 space-y-3">
        {GROWING.map((r) => (
          <div key={r.role} className="card flex flex-wrap items-center gap-4 p-5">
            <span className="rounded-lg bg-emerald-500/10 px-3 py-1.5 font-mono text-sm font-bold text-emerald-400">
              {r.growth}
            </span>
            <div className="min-w-[200px] flex-1">
              <div className="font-bold text-white">{r.role}</div>
              <div className="text-sm text-slate-400">{r.why}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Declining */}
      <h2 className="mb-6 text-2xl font-extrabold text-white">📉 Declining Roles</h2>
      <div className="mb-14 space-y-3">
        {DECLINING.map((r) => (
          <div key={r.role} className="card flex flex-wrap items-center gap-4 p-5">
            <span className="rounded-lg bg-red-500/10 px-3 py-1.5 font-mono text-sm font-bold text-red-400">
              {r.change}
            </span>
            <div className="min-w-[200px] flex-1">
              <div className="font-bold text-white">{r.role}</div>
              <div className="text-sm text-slate-400">{r.why}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h2 className="mb-6 text-2xl font-extrabold text-white">🧠 Skills That Will Matter Most</h2>
      <div className="mb-14 space-y-3">
        {SKILLS.map((s, i) => (
          <div key={s.skill} className="card flex gap-4 p-5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary bg-primary/20 font-mono text-xs font-bold text-accent">
              {i + 1}
            </span>
            <div>
              <div className="font-bold text-white">{s.skill}</div>
              <div className="text-sm text-slate-400">{s.note}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/[0.08] p-10 text-center">
        <h2 className="mb-3 text-2xl font-extrabold text-white">Get ahead of the curve</h2>
        <p className="mx-auto mb-6 max-w-md text-sm text-slate-400">
          The 19-module AI &amp; Innovation Leadership programme covers exactly the skills this
          research says will matter. Three modules are free.
        </p>
        <Link href="/learn" className="btn-primary px-8 py-3.5">Start Learning Free →</Link>
      </div>
    </div>
  );
}
