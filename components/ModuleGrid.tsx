'use client';

import Link from 'next/link';
import { MODULES, CATEGORIES } from '@/lib/modules';
import { useAccess } from '@/hooks/useAccess';

const CAT_STYLE: Record<string, string> = {
  ai:         'bg-sky-400/10 text-sky-400',
  innovation: 'bg-orange-400/10 text-orange-400',
  strategy:   'bg-accent/10 text-accent',
};

export default function ModuleGrid() {
  const { isUnlocked, isCompleted, buyModule } = useAccess();

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {MODULES.map((m) => {
        const unlocked = isUnlocked(m.id);
        const done = isCompleted(m.id);
        const catLabel = CATEGORIES.find((c) => c.key === m.cat)?.label ?? m.cat;

        const inner = (
          <div className={`card group relative flex h-full flex-col p-6 transition-all ${
            unlocked ? 'cursor-pointer hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/30' : ''
          }`}>
            {done && (
              <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
                ✓
              </div>
            )}
            <div className="mb-4 flex items-start justify-between">
              <span className="text-3xl">{m.icon}</span>
              <span className={m.free ? 'badge-free' : 'badge-paid'}>{m.free ? 'FREE' : '$9'}</span>
            </div>
            <div className="mb-1.5 font-mono text-[0.65rem] text-slate-500">
              MODULE {String(m.id).padStart(2, '0')}
            </div>
            <h3 className="mb-2 text-base font-bold leading-snug text-white">{m.title}</h3>
            <p className="mb-4 flex-1 text-[0.82rem] leading-relaxed text-slate-400">{m.tagline}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span>⏱ {m.duration}</span>
              <span>📖 {m.lessons} lessons</span>
              <span className={`rounded px-2 py-0.5 text-[0.65rem] font-semibold ${CAT_STYLE[m.cat]}`}>
                {catLabel}
              </span>
            </div>
            {!unlocked && (
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-bg/60 opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
                <span className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white">
                  🔒 Unlock — $9
                </span>
              </div>
            )}
          </div>
        );

        return unlocked ? (
          <Link key={m.id} href={`/learn/module/${m.id}`}>{inner}</Link>
        ) : (
          <button key={m.id} className="group text-left" onClick={() => buyModule(m.id)}>
            {inner}
          </button>
        );
      })}
    </div>
  );
}
