import { useState } from 'react';
import { MapPin, Radio } from 'lucide-react';
import { countries } from '@/data/content';
import { CoverageGraphic } from './Graphics';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Coverage() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="coverage"
      ref={ref}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-primary-50/40"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className={`reveal ${visible ? 'visible' : ''} max-w-3xl`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-xs font-600 text-accent-600 ring-1 ring-accent-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            AI, distributed
          </div>
          <h2 className="mt-5 font-display text-4xl font-700 leading-tight text-ink-900 sm:text-5xl">
            Intelligence that travels{' '}
            <span className="gradient-text-orange">across real markets</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-600">
            Our AI products are designed for local relevance and built to scale through operator distribution.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Map / graphic */}
          <div className={`reveal reveal-delay-1 ${visible ? 'visible' : ''} lg:col-span-3`}>
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-primary-100 min-h-[420px]">
              {/* Globe graphic */}
              <div className="absolute inset-0 flex items-center justify-center opacity-90">
                <CoverageGraphic />
              </div>

              {/* Region clusters overlay */}
              <div className="relative flex h-full flex-col justify-between gap-6 pt-4">
                {/* Middle East */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-600 uppercase tracking-wider text-primary-700">
                    <MapPin className="h-4 w-4 text-primary-500" /> Middle East
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {countries
                      .filter((c) => c.region === 'Middle East')
                      .map((country) => (
                        <CountryChip
                          key={country.code}
                          country={country}
                          active={hovered === country.code}
                          onHover={setHovered}
                        />
                      ))}
                  </div>
                </div>

                {/* Southeast Asia */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-600 uppercase tracking-wider text-accent-700">
                    <MapPin className="h-4 w-4 text-accent-500" /> Southeast Asia
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {countries
                      .filter((c) => c.region === 'Southeast Asia')
                      .map((country) => (
                        <CountryChip
                          key={country.code}
                          country={country}
                          active={hovered === country.code}
                          onHover={setHovered}
                        />
                      ))}
                  </div>
                </div>

                {/* Europe */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-600 uppercase tracking-wider text-gold-700">
                    <MapPin className="h-4 w-4 text-gold-500" /> Europe
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {countries
                      .filter((c) => c.region === 'Europe')
                      .map((country) => (
                        <CountryChip
                          key={country.code}
                          country={country}
                          active={hovered === country.code}
                          onHover={setHovered}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operator list */}
          <div className={`reveal reveal-delay-2 ${visible ? 'visible' : ''} lg:col-span-2`}>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-primary-100">
              <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-600 text-ink-900">
                <Radio className="h-5 w-5 text-primary-500" />
                AI distribution network
              </h3>
              <div className="space-y-3">
                {countries.map((country) => (
                  <div
                    key={country.code}
                    className="flex items-center justify-between rounded-xl bg-primary-50/50 p-3 transition-colors hover:bg-primary-50"
                    onMouseEnter={() => setHovered(country.code)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <div className="text-sm font-600 text-ink-900">{country.name}</div>
                        <div className="mt-1 flex gap-1.5">
                          {country.operators.map((op) => (
                            <span
                              key={op.name}
                              className="text-[10px] font-600 rounded px-1.5 py-0.5"
                              style={{ color: op.color, backgroundColor: `${op.color}15` }}
                            >
                              {op.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountryChip({
  country,
  active,
  onHover,
}: {
  country: (typeof countries)[0];
  active: boolean;
  onHover: (code: string | null) => void;
}) {
  return (
    <div
      className={`group relative flex items-center gap-2.5 rounded-xl px-4 py-3 transition-all cursor-default bg-white ring-1 ${
        active ? 'ring-2 ring-primary-300 scale-105 shadow-md' : 'ring-primary-100 hover:ring-primary-200'
      }`}
      onMouseEnter={() => onHover(country.code)}
      onMouseLeave={() => onHover(null)}
    >
      <span className="text-2xl">{country.flag}</span>
      <div>
        <div className="text-sm font-600 text-ink-900">{country.name}</div>
        <div className="mt-0.5 flex flex-wrap gap-1">
          {country.operators.map((op) => (
            <span
              key={op.name}
              className="text-[10px] font-600"
              style={{ color: op.color }}
            >
              {op.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
