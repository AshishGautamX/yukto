import { ArrowUpRight, BrainCircuit, Globe2, Sparkles, Workflow } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const pillars = [
  { icon: BrainCircuit, number: '01', title: 'Think in intelligence', detail: 'We start with the model, then shape the product around a real human need.', color: '#1f4a97' },
  { icon: Sparkles, number: '02', title: 'Make it useful', detail: 'Every AI feature has a job: help someone learn, create, decide, or enjoy.', color: '#ff682b' },
  { icon: Globe2, number: '03', title: 'Design for reach', detail: 'Mobile-first experiences built to travel across markets and networks.', color: '#00A19A' },
  { icon: Workflow, number: '04', title: 'Improve continuously', detail: 'Products learn from every interaction and become more helpful over time.', color: '#fec15c' },
];

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-primary-100/60 blur-[90px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className={`reveal ${visible ? 'visible' : ''}`}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.16em] text-primary-600 ring-1 ring-primary-100"><span className="h-1.5 w-1.5 rounded-full bg-accent-500" />The Adcuesta approach</div>
            <h2 className="max-w-xl font-display text-4xl font-700 leading-[1.08] text-ink-900 sm:text-5xl">We turn powerful AI into products people want to use.</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-600">Curious by nature. Practical by design. Focused on the moment technology becomes genuinely helpful.</p>
            <a href="#services" className="group mt-8 inline-flex items-center gap-2 text-sm font-700 text-primary-600">Explore our capabilities <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <div key={pillar.number} className={`reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''} group relative min-h-44 overflow-hidden rounded-3xl bg-ink-50 p-6 ring-1 ring-primary-100 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-primary-900/10`}>
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-10 blur-2xl transition-transform duration-500 group-hover:scale-150" style={{ backgroundColor: pillar.color }} />
                <div className="relative flex h-full flex-col justify-between"><div className="flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-primary-100 transition-transform group-hover:rotate-6 group-hover:scale-110"><pillar.icon className="h-5 w-5" style={{ color: pillar.color }} /></div><span className="font-mono text-xs font-700 text-ink-400">{pillar.number}</span></div><div><h3 className="mt-8 font-display text-lg font-700 text-ink-900">{pillar.title}</h3><p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-ink-500 transition-colors group-hover:text-ink-700">{pillar.detail}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
