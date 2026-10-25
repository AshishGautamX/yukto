import { BrainCircuit, Database, Mic2, Sparkles, WandSparkles, Workflow, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const capabilities = [
  { icon: BrainCircuit, title: 'AI product strategy', detail: 'From first prompt to a product people use.', color: '#1f4a97' },
  { icon: Sparkles, title: 'Personalized experiences', detail: 'Every user gets a smarter next step.', color: '#007cff' },
  { icon: WandSparkles, title: 'Generative content', detail: 'Stories, lessons, and worlds made in seconds.', color: '#ff682b' },
  { icon: Mic2, title: 'Voice & multimodal', detail: 'Interfaces that listen, see, and respond.', color: '#00A19A' },
  { icon: Database, title: 'Reliable AI foundations', detail: 'Data, models, and delivery built to scale.', color: '#fec15c' },
  { icon: Workflow, title: 'Operator distribution', detail: 'Take intelligent products to real markets.', color: '#1f4a97' },
];

export default function Services() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="services" ref={ref} className="relative overflow-hidden bg-primary-50/50 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern bg-[size:56px_56px] opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className={`reveal ${visible ? 'visible' : ''} flex flex-col justify-between gap-6 md:flex-row md:items-end`}>
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-700 uppercase tracking-[0.16em] text-primary-600 ring-1 ring-primary-100"><span className="h-1.5 w-1.5 rounded-full bg-accent-500" />AI capabilities</div>
            <h2 className="max-w-2xl font-display text-4xl font-700 leading-[1.08] text-ink-900 sm:text-5xl">Ideas in. <span className="gradient-text-orange">Intelligence out.</span></h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-600 md:pb-1">The building blocks behind our next generation of products.</p>
        </div>

        <div className="relative mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, i) => (
            <div key={capability.title} className={`reveal reveal-delay-${(i % 3) + 1} ${visible ? 'visible' : ''} group relative min-h-56 overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-primary-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-900/10`}>
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: capability.color }} />
              <div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110" style={{ backgroundColor: `${capability.color}14` }}><capability.icon className="h-6 w-6" style={{ color: capability.color }} /></div><span className="font-mono text-xs font-700 text-ink-300">0{i + 1}</span></div>
              <h3 className="mt-10 max-w-[14rem] font-display text-xl font-700 leading-tight text-ink-900">{capability.title}</h3>
              <p className="mt-2 max-w-[15rem] text-xs leading-relaxed text-ink-500">{capability.detail}</p>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-700 uppercase tracking-[0.14em] text-primary-600 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">See the capability <ArrowUpRight className="h-3.5 w-3.5" /></div>
              <div className="pointer-events-none absolute -bottom-16 -right-12 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" style={{ backgroundColor: capability.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
