import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MODULES, getModule } from '@/lib/modules';
import ModulePlayer from './ModulePlayer';

export function generateStaticParams() {
  return MODULES.map((m) => ({ id: String(m.id) }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const mod = getModule(Number(params.id));
  if (!mod) return {};
  return {
    title: `Module ${mod.id}: ${mod.title}`,
    description: mod.tagline,
  };
}

export default function ModulePage({ params }: { params: { id: string } }) {
  const mod = getModule(Number(params.id));
  if (!mod) notFound();
  return <ModulePlayer mod={mod} />;
}
