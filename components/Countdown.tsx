'use client';

import { useEffect, useState } from 'react';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function Countdown() {
  const [time, setTime] = useState({ d: '07', h: '23', m: '59', s: '42' });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const KEY = 'earlybird_end';
    let end = parseInt(localStorage.getItem(KEY) || '0', 10);
    if (!end || end < Date.now()) {
      end = Date.now() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem(KEY, String(end));
    }
    const tick = () => {
      const diff = end - Date.now();
      if (diff <= 0) { setExpired(true); return; }
      setTime({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (expired) return null;

  const units = [
    { num: time.d, label: 'Days' },
    { num: time.h, label: 'Hrs' },
    { num: time.m, label: 'Min' },
    { num: time.s, label: 'Sec' },
  ];

  return (
    <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-6 rounded-xl border border-primary/25 bg-gradient-to-r from-primary/15 to-accent/15 px-6 py-4">
      <span className="text-sm text-slate-400">🔥 Early Access Price Ends In:</span>
      <div className="flex items-start gap-3">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-start gap-3">
            <div className="text-center">
              <div className="font-mono text-2xl font-semibold text-accent">{u.num}</div>
              <div className="text-[0.6rem] uppercase tracking-wider text-slate-500">{u.label}</div>
            </div>
            {i < 3 && <div className="mt-1 text-xl text-primary">:</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
