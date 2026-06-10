'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/learn',     label: 'Learn' },
  { href: '/futures',   label: 'Futures' },
  { href: '/library',   label: 'Library' },
  { href: '/insights',  label: 'Insights' },
  { href: '/growth',    label: 'Growth' },
  { href: '/analytics', label: 'Analytics' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-lg font-extrabold tracking-tight text-white">
          Genz<span className="text-accent">Careers</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pathname?.startsWith(href)
                  ? 'bg-white/[0.07] text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/learn" className="btn-ghost text-xs px-4 py-2">
            My Progress
          </Link>
          <Link href="/learn#pricing" className="btn-primary text-xs px-4 py-2">
            Start Free →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-5 bg-slate-400 transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-slate-400 transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-slate-400 transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/[0.06] bg-surface px-6 pb-4 pt-3 md:hidden">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate-400 hover:text-white"
            >
              {label}
            </Link>
          ))}
          <div className="mt-3 flex gap-2">
            <Link href="/learn#pricing" className="btn-primary flex-1 text-xs py-2" onClick={() => setOpen(false)}>
              Start Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
