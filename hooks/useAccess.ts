'use client';

import { useCallback, useEffect, useState } from 'react';
import { PAYMENT } from '@/lib/payment';

export function useAccess() {
  const [unlocked, setUnlocked] = useState<Set<number>>(new Set());

  const refresh = useCallback(() => {
    const set = new Set<number>();
    // Modules 1-3 are always free
    set.add(1); set.add(2); set.add(3);

    if (typeof window === 'undefined') { setUnlocked(set); return; }

    if (localStorage.getItem('access_full') === '1') {
      for (let i = 1; i <= 19; i++) set.add(i);
    } else {
      if (localStorage.getItem('access_ai') === '1') {
        for (let i = 4; i <= 12; i++) set.add(i);
      }
      if (localStorage.getItem('access_strategy') === '1') {
        for (let i = 13; i <= 19; i++) set.add(i);
      }
      for (let i = 4; i <= 19; i++) {
        if (localStorage.getItem(`access_mod_${i}`) === '1') set.add(i);
      }
    }
    setUnlocked(set);
  }, []);

  // Handle Stripe success redirect: /learn?access=FULL etc.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const access = params.get('access');
    if (access) {
      const a = access.toUpperCase();
      if (a === 'FULL')          localStorage.setItem('access_full', '1');
      else if (a === 'AI')       localStorage.setItem('access_ai', '1');
      else if (a === 'STRATEGY') localStorage.setItem('access_strategy', '1');
      else if (a.startsWith('MOD_')) {
        localStorage.setItem(`access_mod_${a.replace('MOD_', '')}`, '1');
      }
      // Remove query param without reload
      window.history.replaceState({}, '', window.location.pathname);
    }
    refresh();
  }, [refresh]);

  const isUnlocked = (id: number) => unlocked.has(id);

  const isCompleted = (id: number) =>
    typeof window !== 'undefined' && localStorage.getItem(`done_mod_${id}`) === '1';

  const markComplete = (id: number) => {
    localStorage.setItem(`done_mod_${id}`, '1');
    refresh();
  };

  const completedCount = () => {
    if (typeof window === 'undefined') return 0;
    let n = 0;
    for (let i = 1; i <= 19; i++) if (localStorage.getItem(`done_mod_${i}`) === '1') n++;
    return n;
  };

  const buyModule = (id: number) => {
    const url = PAYMENT.modules[id];
    if (!url || url.includes('REPLACE')) {
      alert('Payment not configured yet — contact the course provider.');
      return;
    }
    window.location.href = url;
  };

  const buyBundle = (type: keyof typeof PAYMENT.bundles) => {
    const url = PAYMENT.bundles[type];
    if (!url || url.includes('REPLACE')) {
      alert('Payment not configured yet — contact the course provider.');
      return;
    }
    window.location.href = url;
  };

  return { isUnlocked, isCompleted, markComplete, completedCount, buyModule, buyBundle };
}
