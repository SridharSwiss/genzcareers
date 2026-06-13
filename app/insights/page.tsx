import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Market Insights — Boom, Bubble, and the Next Economy',
  description: 'The AI boom vs. the dot-com era, quantum technology, and the playbook for the next economy.',
};

const COMPARISONS = [
  { dim: 'Revenue reality', dotcom: 'Most leaders were pre-revenue; valuations rested on eyeballs and clicks.', ai: 'AI leaders (Microsoft, NVIDIA, Google) generate tens of billions in real AI revenue today.' },
  { dim: 'Infrastructure', dotcom: 'Fibre was overbuilt years ahead of demand; capacity sat dark for a decade.', ai: 'GPU capacity is scarce — demand outstrips supply, the opposite failure mode.' },
  { dim: 'Adoption speed', dotcom: 'Consumers needed years to trust e-commerce; dial-up throttled usage.', ai: 'ChatGPT reached 100M users in 2 months — the fastest adoption in technology history.' },
  { dim: 'Business model', dotcom: 'Monetisation was an afterthought ("get big fast, figure it out later").', ai: 'Enterprise AI is sold on measurable productivity gains from day one.' },
  { dim: 'The echo', dotcom: 'Pets.com, Webvan — capital chasing concepts without economics.', ai: 'Thin "GPT-wrapper" startups with no moat show the same pattern at smaller scale.' },
];

const QUANTUM = [
  { title: 'Quantum computing', body: 'Qubits exploit superposition to explore many solutions simultaneously. Near-term value: materials simulation, drug discovery, portfolio optimisation. The cryptography threat ("harvest now, decrypt later") is already reshaping security roadmaps.' },
  { title: 'The convergence play', body: 'The next economy is not one technology but the compounding of AI + quantum + biotech + clean energy. Each accelerates the others: AI designs better batteries; quantum simulates better molecules; cheap energy makes compute abundant.' },
  { title: 'Career positioning', body: 'You do not need a physics PhD. The scarce profile is the translator — people who understand what these technologies can do and can connect them to business problems. That is a learnable skill, and it is exactly what the Mastery programme teaches.' },
];

export default function InsightsPage() {
  return (
    <div className="fade-up mx-auto max-w-5xl px-6 py-16">
      <div className="section-tag mb-3">Market Analysis</div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        AI Boom or AI Bubble?
      </h1>
      <p className="mb-14 max-w-2xl text-lg leading-relaxed text-slate-400">
        Every transformative technology attracts both genuine value creation and speculative
        excess — usually at the same time. The dot-com era is the obvious reference point. Here is
        where the comparison holds, and where it breaks.
      </p>

      {/* Comparison table */}
      <div className="mb-16 space-y-4">
        {COMPARISONS.map((c) => (
          <div key={c.dim} className="card overflow-hidden">
            <div className="border-b border-white/[0.06] bg-white/[0.02] px-6 py-3 font-bold text-white">
              {c.dim}
            </div>
            <div className="grid sm:grid-cols-2">
              <div className="border-b border-white/[0.06] p-5 sm:border-b-0 sm:border-r">
                <div className="mb-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-red-400">
                  Dot-Com (1999)
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{c.dotcom}</p>
              </div>
              <div className="p-5">
                <div className="mb-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-emerald-400">
                  AI (Today)
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{c.ai}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quantum / next economy */}
      <div className="section-tag mb-3">The Next Economy</div>
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-white">
        The Quantum Leap Playbook
      </h2>
      <div className="mb-16 grid gap-5 md:grid-cols-3">
        {QUANTUM.map((q) => (
          <div key={q.title} className="card p-7">
            <h3 className="mb-3 font-bold text-white">{q.title}</h3>
            <p className="text-sm leading-relaxed text-slate-400">{q.body}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/[0.08] p-10 text-center">
        <h2 className="mb-3 text-2xl font-extrabold text-white">Become the translator</h2>
        <p className="mx-auto mb-6 max-w-md text-sm text-slate-400">
          Modules 1–6 of the Mastery programme teach exactly this: what AI can do, where it fails,
          and how to connect it to business value.
        </p>
        <Link href="/learn" className="btn-primary px-8 py-3.5">Start with 3 Free Modules →</Link>
      </div>
    </div>
  );
}
