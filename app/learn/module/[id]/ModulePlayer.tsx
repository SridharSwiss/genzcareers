'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { Module } from '@/lib/types';
import { CATEGORIES, MODULES } from '@/lib/modules';
import { useAccess } from '@/hooks/useAccess';
import Quiz from '@/components/Quiz';

const TABS = ['Overview', 'Key Concepts', 'Case Study', 'Exercise', 'Quiz'] as const;
type Tab = (typeof TABS)[number];

const CAT_LABEL: Record<string, string> = {
  ai: 'AI & Machine Learning',
  innovation: 'Innovation',
  strategy: 'Strategy',
};

export default function ModulePlayer({ mod }: { mod: Module }) {
  const router = useRouter();
  const { isUnlocked, isCompleted, markComplete, completedCount, buyModule, buyBundle } = useAccess();
  const [tab, setTab] = useState<Tab>('Overview');
  const [openConcept, setOpenConcept] = useState<number | null>(null);
  const [justCompleted, setJustCompleted] = useState(false);

  const unlocked = isUnlocked(mod.id);
  const done = isCompleted(mod.id) || justCompleted;
  const progress = Math.round((completedCount() / MODULES.length) * 100);

  if (!unlocked) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-5 px-6 text-center">
        <div className="text-6xl">🔒</div>
        <h1 className="text-2xl font-extrabold text-white">{mod.title}</h1>
        <p className="text-sm leading-relaxed text-slate-400">
          This module requires a paid unlock. Choose a single module ($9), the{' '}
          {mod.id <= 12 ? 'AI Bundle ($49)' : 'Strategy Bundle ($39)'}, or Full Access ($69) for
          all 19 modules.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="btn-primary" onClick={() => buyModule(mod.id)}>
            Unlock This Module — $9
          </button>
          <button
            className="btn-ghost"
            onClick={() => buyBundle(mod.id <= 12 ? 'ai' : 'strategy')}
          >
            Buy {mod.id <= 12 ? 'AI Bundle — $49' : 'Strategy Bundle — $39'}
          </button>
          <Link href="/learn#pricing" className="btn-ghost">See All Bundles</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <aside className="hidden w-72 shrink-0 border-r border-white/[0.06] bg-surface lg:block">
        <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto pb-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.key} className="border-b border-white/[0.06] p-4">
              <div className="mb-2.5 text-[0.65rem] font-bold uppercase tracking-widest text-slate-500">
                {cat.label}
              </div>
              {cat.ids.map((id) => {
                const m = MODULES.find((x) => x.id === id)!;
                const mu = isUnlocked(id);
                const md = isCompleted(id);
                return (
                  <button
                    key={id}
                    onClick={() => mu ? router.push(`/learn/module/${id}`) : buyModule(id)}
                    className={`mb-1 flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left transition-colors ${
                      id === mod.id ? 'bg-primary/15' : 'hover:bg-white/[0.04]'
                    }`}
                  >
                    <span className="w-5 shrink-0 font-mono text-[0.65rem] text-slate-500">
                      {String(id).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-[0.8rem] font-medium text-slate-300">{m.title}</span>
                    {md ? (
                      <span className="text-xs text-emerald-400">✓</span>
                    ) : !mu ? (
                      <span className="text-xs text-slate-600">🔒</span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN */}
      <div className="min-w-0 flex-1">
        {/* Top bar */}
        <div className="sticky top-16 z-10 flex items-center gap-4 border-b border-white/[0.06] bg-surface/95 px-6 py-3 backdrop-blur">
          <Link href="/learn#modules" className="text-sm text-slate-400 hover:text-white">
            ← Back to Course
          </Link>
          <div className="ml-auto flex items-center gap-3 text-xs text-slate-500">
            <span>{progress}% complete</span>
            <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-10">
          <span className="rounded bg-accent/10 px-2 py-0.5 text-[0.65rem] font-semibold text-accent">
            {CAT_LABEL[mod.cat]}
          </span>
          <h1 className="mb-2 mt-3 text-3xl font-extrabold tracking-tight text-white">
            Module {mod.id}: {mod.title}
          </h1>
          <p className="mb-8 text-slate-400">{mod.tagline}</p>

          {/* Tabs */}
          <div className="mb-8 flex gap-1 overflow-x-auto border-b border-white/[0.06]">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`-mb-px whitespace-nowrap border-b-2 px-5 py-2.5 text-sm font-semibold transition-colors ${
                  tab === t
                    ? 'border-accent text-accent'
                    : 'border-transparent text-slate-500 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* OVERVIEW */}
          {tab === 'Overview' && (
            <div>
              <div
                className="mb-6 text-[0.95rem] leading-relaxed text-slate-400 [&_p]:mb-4"
                dangerouslySetInnerHTML={{ __html: mod.overview }}
              />
              <div className="card p-5">
                <div className="mb-3.5 font-bold text-white">Learning Objectives</div>
                <ul className="space-y-2.5">
                  {mod.objectives.map((o, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-slate-300">
                      <span className="shrink-0 text-primary">→</span>{o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* CONCEPTS */}
          {tab === 'Key Concepts' && (
            <div className="space-y-4">
              {mod.concepts.map((c, i) => (
                <button
                  key={i}
                  className="card w-full p-5 text-left"
                  onClick={() => setOpenConcept(openConcept === i ? null : i)}
                >
                  <div className="mb-1.5 font-mono text-[0.7rem] text-primary">
                    CONCEPT {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="font-bold text-white">{c.title}</div>
                    <span className="shrink-0 text-slate-500">{openConcept === i ? '−' : '+'}</span>
                  </div>
                  {openConcept === i && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.body}</p>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* CASE STUDY */}
          {tab === 'Case Study' && (
            <div>
              <div className="rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-400/[0.06] to-primary/[0.06] p-7">
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-sky-400">
                  {mod.caseStudy.company}
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{mod.caseStudy.title}</h3>
                <div
                  className="text-sm leading-relaxed text-slate-400"
                  dangerouslySetInnerHTML={{ __html: mod.caseStudy.body }}
                />
                <div className="mt-4 rounded-r-lg border-l-[3px] border-emerald-400 bg-emerald-400/10 px-4 py-3 text-sm text-slate-300">
                  💡 <strong className="text-white">Key Result:</strong> {mod.caseStudy.result}
                </div>
              </div>
              <div className="card mt-5 p-5">
                <div className="mb-2.5 font-bold text-white">Discussion Questions</div>
                <ol className="list-decimal space-y-2.5 pl-5">
                  {mod.caseStudy.discussion.map((q, i) => (
                    <li key={i} className="text-sm leading-relaxed text-slate-400">{q}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {/* EXERCISE */}
          {tab === 'Exercise' && (
            <div>
              <div className="card p-7">
                <h3 className="mb-1.5 text-lg font-bold text-white">{mod.exercise.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-400">{mod.exercise.intro}</p>
                <div className="space-y-3">
                  {mod.exercise.steps.map((s, i) => (
                    <div key={i} className="flex gap-3.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary bg-primary/20 text-xs font-bold text-accent">
                        {i + 1}
                      </div>
                      <p className="pt-1 text-sm leading-relaxed text-slate-400">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button
                disabled={done}
                onClick={() => { markComplete(mod.id); setJustCompleted(true); }}
                className={`mt-8 w-full rounded-xl py-3.5 font-bold transition-colors ${
                  done
                    ? 'cursor-default bg-emerald-500 text-white'
                    : 'bg-primary text-white hover:bg-indigo-500'
                }`}
              >
                {done ? '✓ Module Completed' : 'Mark Module Complete'}
              </button>
            </div>
          )}

          {/* QUIZ */}
          {tab === 'Quiz' && <Quiz questions={mod.quiz} />}
        </div>
      </div>
    </div>
  );
}
