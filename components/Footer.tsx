import Link from 'next/link';

const LINKS = [
  { href: '/learn',     label: 'Learn' },
  { href: '/futures',   label: 'Futures' },
  { href: '/library',   label: 'Library' },
  { href: '/insights',  label: 'AI Insights' },
  { href: '/growth',    label: 'Growth' },
  { href: '/analytics', label: 'Analytics' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link href="/" className="text-xl font-extrabold text-white">
            Genz<span className="text-accent">Careers</span>
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(t => (
              <Link key={t} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                {t}
              </Link>
            ))}
            <a href="mailto:hello@genzcareers.app" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
              Contact
            </a>
          </div>
          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()} GenzCareers. Payments secured by Stripe.
          </p>
        </div>
      </div>
    </footer>
  );
}
