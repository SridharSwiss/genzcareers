import Link from 'next/link';

const SECTIONS = [
  {
    href: '/learn', icon: '🎓', title: 'AI & Innovation Mastery',
    desc: '19-module learning programme covering AI, machine learning, innovation, and Oxford-view strategy. Start 3 modules free.',
    tag: 'Flagship', featured: true,
  },
  {
    href: '/futures', icon: '🔮', title: 'Future of Jobs',
    desc: 'Strategic analysis of the 2025–2030 job market: which roles grow, which decline, and the skills that will matter most.',
    tag: 'Research',
  },
  {
    href: '/library', icon: '📚', title: 'Master Library',
    desc: 'Cross-cultural compendium of 50 masterworks on wealth, leadership, and personal development — distilled to their core insights.',
    tag: 'Wisdom',
  },
  {
    href: '/insights', icon: '📈', title: 'AI Market Insights',
    desc: 'The AI boom vs. the dot-com era, quantum technology, and the playbook for the next economy.',
    tag: 'Analysis',
  },
  {
    href: '/growth', icon: '🌱', title: 'Growth Zones',
    desc: 'An interactive journey from comfort zone to growth zone — the psychology of stepping into bigger challenges.',
    tag: 'Mindset',
  },
  {
    href: '/analytics', icon: '📊', title: 'Text Analytics',
    desc: 'Business text analytics dashboard — keyword analysis, sentiment scoring, and communication intelligence.',
    tag: 'Tools',
  },
];

export default function HomePage() {
  return (
    <div className="fade-up">
      {/* HERO */}
      <section className="bg-hero-glow">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Build a career for the
            <br /><span className="grad-text">AI-powered economy</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
            Learning programmes, strategic research, and timeless wisdom — everything you need to
            navigate the next decade of work, in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/learn" className="btn-primary px-10 py-4 text-base">
              Start Learning Free →
            </Link>
            <Link href="/futures" className="btn-ghost px-8 py-4 text-base">
              Explore the Research
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION GRID */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`card group flex flex-col p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 ${
                s.featured ? 'border-primary/40 sm:col-span-2 lg:col-span-1' : 'hover:border-primary/40'
              }`}
            >
              <div className="mb-5 flex items-start justify-between">
                <span className="text-4xl">{s.icon}</span>
                <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">
                  {s.tag}
                </span>
              </div>
              <h2 className="mb-2.5 text-xl font-bold text-white">{s.title}</h2>
              <p className="flex-1 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              <div className="mt-5 text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
