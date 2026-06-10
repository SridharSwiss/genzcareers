import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'GenzCareers — AI & Innovation Leadership',
    template: '%s | GenzCareers',
  },
  description:
    'Master AI, Machine Learning, Innovation and Strategy in 19 comprehensive modules. Start 3 modules free.',
  keywords: ['AI course', 'machine learning', 'innovation strategy', 'leadership', 'online learning'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'GenzCareers',
    title: 'GenzCareers — AI & Innovation Leadership',
    description: 'The complete programme for business leaders navigating AI and innovation.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-bg text-slate-200 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
