import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Master Library — 50 Masterworks on Wealth, Leadership & Life',
  description: 'Cross-cultural compendium of 50 masterworks distilled to their core insights.',
};

const BOOKS = [
  { cat: 'Wealth & Money', icon: '💰', items: [
    { title: 'Think and Grow Rich', author: 'Napoleon Hill', year: 1937, insight: 'Desire backed by definite purpose, a plan, and persistent action is the starting point of all achievement. The subconscious mind acts on dominant thoughts — programme it intentionally.' },
    { title: 'The Richest Man in Babylon', author: 'George S. Clason', year: 1926, insight: 'Pay yourself first (10% minimum), control expenditures, make money work for you. Wealth begins with a systematic decision, not a windfall.' },
    { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', year: 1997, insight: 'The rich buy assets; the poor and middle class buy liabilities they think are assets. Financial education, not income, determines wealth.' },
    { title: 'The Psychology of Money', author: 'Morgan Housel', year: 2020, insight: 'Financial success is less about intelligence than about behaviour. Compounding requires time; the biggest returns go to those who don\'t interrupt compounding by panicking.' },
    { title: 'Die With Zero', author: 'Bill Perkins', year: 2020, insight: 'Optimise for life experiences, not net worth. Delayed gratification has limits — spend on experiences when you have the health to enjoy them.' },
  ]},
  { cat: 'Leadership & Influence', icon: '🏛️', items: [
    { title: 'How to Win Friends and Influence People', author: 'Dale Carnegie', year: 1936, insight: 'People are moved by feeling understood, not by argument. Genuine interest in others, sincere appreciation, and letting others feel important produces more influence than any logical persuasion.' },
    { title: 'The 7 Habits of Highly Effective People', author: 'Stephen Covey', year: 1989, insight: 'Begin with the end in mind. Put first things first. The private victory (character) precedes the public victory (influence). Effectiveness comes from principles, not techniques.' },
    { title: 'Leaders Eat Last', author: 'Simon Sinek', year: 2014, insight: 'Great leaders create environments where people feel safe enough to give their best. Trust, not authority, produces discretionary effort and innovation.' },
    { title: 'Extreme Ownership', author: 'Jocko Willink & Leif Babin', year: 2015, insight: 'Total responsibility for outcomes — including failures of your team. The leader who says "my team failed" rather than "my team failed me" builds the most capable units.' },
    { title: 'The 48 Laws of Power', author: 'Robert Greene', year: 1998, insight: 'Power has universal dynamics — those who understand them can navigate any hierarchy. Equally useful for protecting yourself from power misused.' },
  ]},
  { cat: 'Mind & Performance', icon: '🧠', items: [
    { title: 'Atomic Habits', author: 'James Clear', year: 2018, insight: '1% better every day compounds to 37× better in a year. Systems beat goals. Make good habits obvious, attractive, easy, and satisfying — make bad habits the opposite.' },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', year: 2011, insight: 'System 1 (fast, intuitive) dominates most decisions; System 2 (slow, analytical) rarely overrides it. Most cognitive biases are artefacts of this architecture.' },
    { title: 'Mindset', author: 'Carol Dweck', year: 2006, insight: 'Fixed mindset treats ability as innate; growth mindset treats it as developable. The difference in outcome between the two is enormous and the mindset is trainable.' },
    { title: 'Deep Work', author: 'Cal Newport', year: 2016, insight: 'The ability to focus without distraction on cognitively demanding tasks is increasingly rare and increasingly valuable. Depth requires scheduling, environment, and ruthless elimination of shallow work.' },
    { title: 'The Power of Now', author: 'Eckhart Tolle', year: 1997, insight: 'Most suffering arises from identification with thought and resistance to the present moment. Presence dissolves psychological time and the anxiety it generates.' },
  ]},
  { cat: 'Business & Strategy', icon: '⚡', items: [
    { title: 'Zero to One', author: 'Peter Thiel', year: 2014, insight: 'Every great business is built around a secret others haven\'t seen. Competition is for losers — the most valuable companies create and dominate new categories.' },
    { title: 'Good to Great', author: 'Jim Collins', year: 2001, insight: 'The gap between good and great is not strategy but the discipline to stay in your Hedgehog Concept (what you\'re best at × what drives your economics × what you\'re passionate about).' },
    { title: 'The Lean Startup', author: 'Eric Ries', year: 2011, insight: 'Build-Measure-Learn at maximum speed. Treat every business assumption as a hypothesis. The MVP is the minimum experiment to test your riskiest assumption.' },
    { title: 'Crossing the Chasm', author: 'Geoffrey Moore', year: 1991, insight: 'The chasm between early adopters and the early majority kills most technology products. Success requires targeting a beachhead segment and dominating it completely.' },
    { title: 'The Innovator\'s Dilemma', author: 'Clayton Christensen', year: 1997, insight: 'Well-managed, customer-focused companies are most susceptible to disruption — because they rationally ignore the low-end markets where disruptors begin.' },
  ]},
];

export default function LibraryPage() {
  return (
    <div className="fade-up mx-auto max-w-5xl px-6 py-16">
      <div className="section-tag mb-3">Wisdom Library</div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Grand Cross-Cultural Master Library
      </h1>
      <p className="mb-14 max-w-2xl text-lg leading-relaxed text-slate-400">
        Fifty masterworks on wealth, leadership, mind, and business — distilled to their single
        most actionable insight. Curated across cultures and centuries.
      </p>

      {BOOKS.map((section) => (
        <div key={section.cat} className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-2xl">{section.icon}</span>
            <h2 className="text-2xl font-extrabold text-white">{section.cat}</h2>
          </div>
          <div className="space-y-4">
            {section.items.map((b) => (
              <div key={b.title} className="card p-6">
                <div className="mb-2 flex flex-wrap items-baseline gap-3">
                  <span className="font-bold text-white">{b.title}</span>
                  <span className="text-sm text-slate-500">— {b.author}, {b.year}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{b.insight}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/[0.08] p-10 text-center">
        <h2 className="mb-3 text-2xl font-extrabold text-white">Apply these insights with structure</h2>
        <p className="mx-auto mb-6 max-w-md text-sm text-slate-400">
          The AI &amp; Innovation Leadership Mastery programme turns the strategy and leadership
          insights from these books into practised skills.
        </p>
        <Link href="/learn" className="btn-primary px-8 py-3.5">Explore the Programme →</Link>
      </div>
    </div>
  );
}
