import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-4 font-mono text-6xl font-extrabold text-primary">404</div>
      <h1 className="mb-3 text-2xl font-extrabold text-white">Page not found</h1>
      <p className="mb-8 text-slate-400">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="btn-primary">Go Home</Link>
    </div>
  );
}
