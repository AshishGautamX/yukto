import { useState } from 'react';
import * as Icons from 'lucide-react';
import { ArrowRight, Check, Eye, X, Rocket, Clock } from 'lucide-react';
import { products } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type LucideIcon = Icons.LucideIcon;

export default function Products() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [selected, setSelected] = useState<string | null>(null);

  const selectedProduct = products.find((p) => p.id === selected);

  return (
    <section id="products" ref={ref} className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className={`reveal ${visible ? 'visible' : ''} max-w-3xl`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-600 text-primary-600 ring-1 ring-primary-100">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            AI product portfolio
          </div>
          <h2 className="mt-5 font-display text-4xl font-700 leading-tight text-ink-900 sm:text-5xl">
            Products with intelligence{' '}
            <span className="gradient-text-blue">at the centre.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-600">
            From adaptive learning to generative bedtime stories, we turn emerging AI into products people can use every day.
          </p>
        </div>

        {/* Products showcase grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {products.map((product, i) => {
            const Icon = (Icons[product.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Box;
            const isComingSoon = product.status === 'coming-soon';

            return (
              <div
                key={product.id}
                className={`reveal reveal-delay-${(i % 2) + 1} ${visible ? 'visible' : ''} group relative overflow-hidden rounded-[28px] bg-white ring-1 ring-primary-100 transition-all duration-500 hover:-translate-y-2 hover:ring-2 hover:ring-primary-200 hover:shadow-2xl hover:shadow-primary-500/10`}
              >
                <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
                  {/* Screenshot side */}
                  <div className="relative h-72 overflow-hidden sm:h-full" style={{ background: `linear-gradient(145deg, ${product.accentColor}12, #ffffff 78%)` }}>
                    {/* Decorative blobs */}
                    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-15 blur-2xl transition-all duration-700 group-hover:scale-150" style={{ backgroundColor: product.accentColor }} />
                    <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full opacity-10 blur-2xl transition-all duration-700 group-hover:scale-125" style={{ backgroundColor: product.accentColor }} />

                    {/* Phone frame with screenshot */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="relative">
                        {/* Glow behind phone */}
                        <div className="absolute -inset-4 rounded-full opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-50" style={{ backgroundColor: product.accentColor }} />

                        {/* Phone mockup */}
                        <div className="relative w-32 rounded-[20px] bg-ink-900 p-1.5 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2">
                          <div className="absolute top-1.5 left-1/2 z-10 h-1 w-8 -translate-x-1/2 rounded-full bg-ink-700" />
                          <div className="overflow-hidden rounded-[14px] bg-white">
                            <img
                              src={product.screenshot}
                              alt={`${product.name} app screenshot`}
                              className="h-44 w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Editorial category label */}
                    <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-[10px] font-700 uppercase tracking-[0.16em] text-primary-700 shadow-lg ring-1 ring-primary-100 transition-transform duration-300 group-hover:scale-105">
                      {product.category}
                    </div>

                    {/* Status badge */}
                    {isComingSoon ? (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-navy-700 px-3 py-1.5 text-[10px] font-700 uppercase tracking-wider text-white shadow-lg">
                        <Clock className="h-3 w-3" />
                        Coming Soon
                      </div>
                    ) : (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-700 uppercase tracking-wider text-accent-600 shadow-lg ring-1 ring-accent-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-500 pulse-dot" />
                        Live
                      </div>
                    )}
                  </div>

                  {/* Content side */}
                  <div className="flex flex-col p-6 lg:p-7">
                    {/* Icon + category */}
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundColor: product.accentColor }}
                      >
                        <Icon className="h-5.5 w-5.5 text-white" style={{ width: '22px', height: '22px' }} />
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="font-display text-2xl font-700 text-ink-900 transition-colors group-hover:text-primary-700">
                      {product.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-600" style={{ color: product.accentColor }}>
                      {product.tagline}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature) => (
                        <span key={feature} className="rounded-full bg-primary-50 px-3 py-1.5 text-[10px] font-600 text-ink-600 ring-1 ring-primary-100">{feature}</span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between border-t border-primary-50 pt-4">
                      <span className="text-xs text-ink-500">Target: {product.audience}</span>
                      <button
                        onClick={() => setSelected(product.id)}
                        className="group/btn flex items-center gap-1.5 text-xs font-600 transition-colors"
                        style={{ color: product.accentColor }}
                      >
                        <Eye className="h-3.5 w-3.5" />
                        View Details
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hover accent bar at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(to right, ${product.accentColor}, transparent)` }}
                />
              </div>
            );
          })}
        </div>

      </div>

      {/* Product detail modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: (typeof products)[0];
  onClose: () => void;
}) {
  const Icon = (Icons[product.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Box;
  const isComingSoon = product.status === 'coming-soon';

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/60 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-600 shadow-md transition-colors hover:bg-primary-50 hover:text-primary-600"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Hero image */}
        <div className="relative h-56 overflow-hidden" style={{ background: `linear-gradient(135deg, ${product.accentColor}15, ${product.accentColor}30)` }}>
          <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: product.accentColor }} />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: product.accentColor }} />

          {/* Phone screenshot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-36 rounded-[24px] bg-ink-900 p-2 shadow-2xl">
              <div className="absolute top-2 left-1/2 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-ink-700" />
              <div className="overflow-hidden rounded-[18px] bg-white">
                <img
                  src={product.screenshot}
                  alt={`${product.name} app screenshot`}
                  className="h-48 w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="absolute top-4 left-4">
            {isComingSoon ? (
              <span className="flex items-center gap-1.5 rounded-full bg-navy-700 px-3 py-1 text-[10px] font-700 uppercase tracking-wider text-white shadow-lg">
                <Clock className="h-3 w-3" /> Coming Soon
              </span>
            ) : (
              <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-700 uppercase tracking-wider text-accent-600 shadow-lg ring-1 ring-accent-100">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500 pulse-dot" /> Live
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <div className="flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg"
              style={{ backgroundColor: product.accentColor }}
            >
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-700 text-ink-900">{product.name}</h3>
              <p className="text-sm font-600" style={{ color: product.accentColor }}>{product.tagline}</p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-ink-600">{product.description}</p>

          {/* Features grid */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5 rounded-xl bg-primary-50/60 p-3 ring-1 ring-primary-100">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${product.accentColor}20` }}>
                  <Check className="h-4 w-4" style={{ color: product.accentColor }} />
                </div>
                <span className="text-xs font-500 text-ink-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap gap-3 border-t border-primary-50 pt-5">
            <span className="rounded-full bg-primary-50 px-4 py-2 text-xs font-600 text-primary-700">
              Category: {product.category}
            </span>
            <span className="rounded-full bg-accent-50 px-4 py-2 text-xs font-600 text-accent-700">
              Audience: {product.audience}
            </span>
            {isComingSoon && (
              <span className="flex items-center gap-1 rounded-full bg-navy-50 px-4 py-2 text-xs font-600 text-navy-700">
                <Rocket className="h-3.5 w-3.5" /> Under Development
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
