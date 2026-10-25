import * as Icons from 'lucide-react';
import { stats } from '@/data/content';
import { useScrollReveal, useCountUp } from '@/hooks/useScrollReveal';

type LucideIcon = Icons.LucideIcon;

export default function Stats() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className={`reveal ${visible ? 'visible' : ''} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  start,
}: {
  stat: (typeof stats)[0];
  start: boolean;
}) {
  const Icon = (Icons[stat.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Box;
  const count = useCountUp(stat.value, 2000, start);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-white p-6 text-center ring-1 ring-primary-100 transition-all hover:shadow-lg hover:ring-primary-200">
      <div className="pointer-events-none absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-primary-200/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/20">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="font-display text-4xl font-800 text-ink-900">
          {count}
          <span className="gradient-text-blue">{stat.suffix}</span>
        </div>
        <div className="mt-2 text-sm font-500 text-ink-500">{stat.label}</div>
      </div>
    </div>
  );
}
