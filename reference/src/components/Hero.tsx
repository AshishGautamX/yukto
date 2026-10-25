import { ArrowRight, BrainCircuit, Globe, Sparkles, Zap } from 'lucide-react';
import { HeroGraphic } from './Graphics';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden hero-gradient pb-16 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary-200/30 blur-[100px]" />
        <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-accent-200/25 blur-[90px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gold-200/20 blur-[80px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 grid-pattern bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col items-start">
            <div className="animate-fade-down inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-700 uppercase tracking-[0.14em] text-primary-700 shadow-sm ring-1 ring-primary-100">
              <BrainCircuit className="h-3.5 w-3.5 text-accent-500" />
              AI product studio
            </div>
            <h1 className="animate-fade-up mt-6 max-w-xl font-display text-4xl font-800 leading-[1.04] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl" style={{ animationDelay: '0.1s', opacity: 0 }}>
              We build products that{' '}
              <span className="gradient-text-blue">learn, adapt, and grow.</span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-lg text-base leading-relaxed text-ink-600 sm:text-lg" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Adcuesta turns AI into useful everyday experiences — from adaptive learning to generative stories and intelligent content platforms.
            </p>
            <div className="animate-fade-up mt-8 flex flex-col items-start gap-3 sm:flex-row" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <a href="#products" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-3.5 text-sm font-700 text-white shadow-xl shadow-primary-500/25 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/40">
                Explore the AI portfolio <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#architecture" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-700 text-primary-700 shadow-md ring-1 ring-primary-100 transition-all hover:shadow-lg hover:ring-primary-200">
                How the engine works
              </a>
            </div>
            <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-8" style={{ animationDelay: '0.4s', opacity: 0 }}>
              {[
                { icon: Sparkles, value: 'AI-first', sub: 'Product thinking' },
                { icon: Globe, value: '7 Markets', sub: 'Live distribution' },
                { icon: Zap, value: '4 Products', sub: 'In the portfolio' },
              ].map((item) => (
                <div key={item.value} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-primary-100"><item.icon className="h-5 w-5 text-primary-600" /></div>
                  <div><div className="font-display text-base font-700 text-ink-900">{item.value}</div><div className="text-xs text-ink-500">{item.sub}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-scale-in relative hidden h-[520px] lg:block" style={{ animationDelay: '0.3s', opacity: 0 }}><HeroGraphic /></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-16 w-full text-white"><path d="M0,50 Q360,90 720,50 T1440,50 V100 H0 Z" fill="currentColor" /></svg></div>
    </section>
  );
}
