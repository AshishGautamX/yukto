import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { architectureLayers } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type LucideIcon = Icons.LucideIcon;

export default function Architecture() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="architecture" ref={ref} className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern-light bg-[size:40px_40px] opacity-50" />
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-primary-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-accent-500/15 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className={`reveal ${visible ? 'visible' : ''} flex flex-col justify-between gap-6 md:flex-row md:items-end`}>
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.16em] text-primary-300 ring-1 ring-white/10"><span className="h-1.5 w-1.5 rounded-full bg-accent-500" />AI architecture</div>
            <h2 className="max-w-2xl font-display text-4xl font-700 leading-[1.08] text-white sm:text-5xl">The intelligence layer behind <span className="gradient-text">every experience.</span></h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/60 md:pb-1">Connect. Understand. Create. Improve.</p>
        </div>
        <div className={`reveal reveal-delay-2 ${visible ? 'visible' : ''} mt-14 grid gap-3 lg:grid-cols-4`}>
          {architectureLayers.map((layer, i) => {
            const Icon = (Icons[layer.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Box;
            return (
              <div key={layer.id} className="group relative overflow-hidden rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.1] hover:ring-white/20">
                <div className="absolute left-0 top-0 h-1 w-full" style={{ backgroundColor: layer.color }} />
                <div className="flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110" style={{ backgroundColor: `${layer.color}22` }}><Icon className="h-6 w-6" style={{ color: layer.color }} /></div><span className="font-mono text-xs text-white/30">0{i + 1}</span></div>
                <h3 className="mt-10 min-h-14 font-display text-lg font-700 leading-tight text-white">{layer.name.replace(' Layer', '')}</h3>
                <p className="mt-2 min-h-10 text-xs leading-relaxed text-white/50">{layer.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">{layer.components.slice(0, 3).map((component) => <span key={component} className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/60 transition-colors group-hover:bg-white/15 group-hover:text-white/80">{component}</span>)}</div>
                <div className="mt-7 flex items-center gap-2 text-[10px] font-700 uppercase tracking-[0.14em]" style={{ color: layer.color }}>Explore layer <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></div>
              </div>
            );
          })}
        </div>
        <div className={`reveal reveal-delay-3 ${visible ? 'visible' : ''} mt-12 flex flex-wrap items-center justify-center gap-5 text-center sm:gap-8`}>
          {['Sense', 'Reason', 'Create', 'Learn'].map((label, index) => <div key={label} className="flex items-center gap-5 sm:gap-8"><span className="flex items-center gap-2 text-xs font-700 uppercase tracking-[0.14em] text-white/70"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: ['#1f4a97', '#ff682b', '#00A19A', '#fec15c'][index], boxShadow: `0 0 14px ${['#1f4a97', '#ff682b', '#00A19A', '#fec15c'][index]}` }} />{label}</span>{index < 3 && <ArrowRight className="hidden h-4 w-4 text-white/30 sm:block" />}</div>)}
        </div>
      </div>
    </section>
  );
}
