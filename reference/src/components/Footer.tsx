import { Linkedin, Globe, Mail, ArrowUp } from 'lucide-react';
import { countries } from '@/data/content';

const operatorNames = countries.flatMap((c) => c.operators.map((op) => op.name));

export default function Footer() {
  return (
    <footer className="relative dark-section pt-16 pb-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-pattern-light bg-[size:40px_40px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Operator marquee */}
        <div className="mb-12 overflow-hidden">
          <div className="mb-4 text-center text-xs font-600 uppercase tracking-wider text-white/40">
            Trusted by leading operators
          </div>
          <div className="marquee">
            <div className="marquee-track">
              {[...operatorNames, ...operatorNames].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="font-display text-xl font-600 text-white/30 transition-colors hover:text-white/60 whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 font-display text-lg font-800 text-white">
                A
              </div>
              <div>
                <div className="font-display text-xl font-700 text-white">Adcuesta</div>
                <div className="text-[10px] font-600 tracking-wider text-primary-300 uppercase">
                  VAS Platform
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
              Driving the next wave of mobile engagement across markets, cultures, and devices.
              We partner with telecom operators to deliver value-added services that subscribers love.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {[
                { icon: Linkedin, href: 'https://in.linkedin.com/company/adcuesta-digital', label: 'LinkedIn' },
                { icon: Globe, href: 'https://adcuesta.com', label: 'Website' },
                { icon: Mail, href: 'mailto:partnerships@adcuesta.ae', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/50 transition-all hover:text-white hover:bg-white/15"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-600 text-white">Platform</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Products', href: '#products' },
                { label: 'Coverage', href: '#coverage' },
                { label: 'Architecture', href: '#architecture' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-600 text-white">Products</h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-sm text-white/50">Pixora — AI Academy</span>
              </li>
              <li>
                <span className="text-sm text-white/50">Playcade — Gaming</span>
              </li>
              <li>
                <span className="text-sm text-white/50">Kid-Console — Kids Content</span>
              </li>
              <li>
                <span className="text-sm text-white/50">Ninidreamland — Bedtime Stories</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Adcuesta Digital. All rights reserved.
          </p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-xs font-600 text-white/50 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
