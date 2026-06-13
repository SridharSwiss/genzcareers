'use client';

import { useState } from 'react';
import Link from 'next/link';

const ZONES = [
  {
    name: 'Comfort Zone', icon: '🛋️', color: 'border-slate-500/40 bg-slate-500/10',
    feel: 'Safe, in control, routine', cost: 'No growth. Skills stagnate while the world moves.',
    signs: ['Tasks feel automatic', 'No recent failures (because no recent risks)', 'Days blur together'],
    move: 'Pick one task this week that you would normally delegate or avoid — do it yourself, badly if necessary.',
  },
  {
    name: 'Fear Zone', icon: '😰', color: 'border-amber-500/40 bg-amber-500/10',
    feel: 'Anxious, self-conscious, excuse-making', cost: 'Most people retreat here. The discomfort is the toll booth, not the destination.',
    signs: ['Imposter feelings spike', 'You over-prepare or procrastinate', 'Opinions of others feel deafening'],
    move: 'Name the specific fear out loud or on paper. Vague dread shrinks when it becomes a concrete sentence.',
  },
  {
    name: 'Learning Zone', icon: '📖', color: 'border-sky-500/40 bg-sky-500/10',
    feel: 'Challenged but coping, acquiring skills', cost: 'Requires sustained effort — motivation alone fades; systems keep you here.',
    signs: ['You fail at things and bounce back fast', 'Feedback feels useful, not threatening', 'Problems become interesting'],
    move: 'Set a learning project with a deadline and a public commitment — a course, a build, a talk.',
  },
  {
    name: 'Growth Zone', icon: '🚀', color: 'border-emerald-500/40 bg-emerald-500/10',
    feel: 'Purposeful, expansive, setting new goals', cost: 'It becomes the new comfort zone eventually — the cycle restarts, by design.',
    signs: ['You set goals that scare the old you', 'You help others through their fear zone', 'Identity shifts: "I am someone who..."'],
    move: 'Document what worked. Then pick the next edge — growth is a loop, not a ladder.',
  },
];

export default function GrowthPage() {
  const [active, setActive] = useState(0);
  const zone = ZONES[active];

  return (
    <div className="fade-up mx-auto max-w-4xl px-6 py-16">
      <div className="section-tag mb-3">Mindset</div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        The Growth Zones Journey
      </h1>
      <p className="mb-12 max-w-2xl text-lg leading-relaxed text-slate-400">
        Every meaningful change passes through four psychological zones. Most people turn back in
        the second one. Tap each zone to see what it feels like — and the move that gets you
        through it.
      </p>

      {/* Zone selector */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {ZONES.map((z, i) => (
          <button
            key={z.name}
            onClick={() => setActive(i)}
            className={`rounded-2xl border p-5 text-center transition-all ${
              active === i ? z.color + ' scale-[1.03]' : 'border-white/[0.07] bg-card hover:border-white/20'
            }`}
          >
            <div className="mb-2 text-3xl">{z.icon}</div>
            <div className="text-sm font-bold text-white">{z.name}</div>
          </button>
        ))}
      </div>

      {/* Active zone detail */}
      <div className={`rounded-3xl border p-8 ${zone.color}`}>
        <div className="mb-1 flex items-center gap-3">
          <span className="text-4xl">{zone.icon}</span>
          <h2 className="text-2xl font-extrabold text-white">{zone.name}</h2>
        </div>
        <p className="mb-6 text-slate-300">{zone.feel}</p>

        <div className="mb-6 grid gap-5 sm:grid-cols-2">
          <div>
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              You know you&apos;re here when
            </div>
            <ul className="space-y-2">
              {zone.signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-slate-300">
                  <span className="text-accent">→</span>{s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              The cost of staying
            </div>
            <p className="text-sm leading-relaxed text-slate-300">{zone.cost}</p>
          </div>
        </div>

        <div className="rounded-xl bg-black/30 p-5">
          <div className="mb-1 text-xs font-bold uppercase tracking-widest text-emerald-400">
            The move
          </div>
          <p className="text-sm leading-relaxed text-white">{zone.move}</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="mb-4 text-sm text-slate-400">
          Ready to step into the learning zone?
        </p>
        <Link href="/learn" className="btn-primary px-8 py-3.5">
          Start the Free Modules →
        </Link>
      </div>
    </div>
  );
}
