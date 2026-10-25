import { BrainCircuit, Sparkles } from 'lucide-react';

export function HeroGraphic() {
  const nodes = [
    { label: 'Learn', sub: 'Adaptive AI', className: 'left-[3%] top-[8%]', color: '#1f4a97', screenshot: '/pixora-screenshot.webp' },
    { label: 'Play', sub: 'Smart content', className: 'right-[3%] top-[8%]', color: '#ff682b', screenshot: '/playcade-screenshot.webp' },
    { label: 'Create', sub: 'Generative stories', className: 'left-[3%] bottom-[8%]', color: '#00A19A', screenshot: '/kid-console-screenshot.webp' },
    { label: 'Personalize', sub: 'Voice + memory', className: 'right-[3%] bottom-[8%]', color: '#fec15c', screenshot: '/ninidreamland-screenshot.webp' },
  ];

  return (
    <div className="relative h-full w-full overflow-visible">
      <div className="absolute inset-8 rounded-[40px] border border-primary-200/50 bg-white/30 shadow-[0_20px_80px_rgba(31,74,151,0.08)] backdrop-blur-sm" />
      <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]">
        <svg viewBox="0 0 600 520" className="h-full w-full" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="ai-network" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1f4a97" stopOpacity="0.55" />
              <stop offset="0.5" stopColor="#00A19A" stopOpacity="0.35" />
              <stop offset="1" stopColor="#ff682b" stopOpacity="0.45" />
            </linearGradient>
            <radialGradient id="ai-halo">
              <stop offset="0" stopColor="#1f4a97" stopOpacity="0.22" />
              <stop offset="1" stopColor="#1f4a97" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="260" r="200" fill="url(#ai-halo)" />
          <g stroke="url(#ai-network)" strokeWidth="1.2" strokeDasharray="5 7" className="arch-line">
            <path d="M78 102 L205 190 L300 260 L395 190 L522 102" />
            <path d="M78 418 L205 330 L300 260 L395 330 L522 418" />
            <path d="M78 102 L205 330" />
            <path d="M522 102 L395 330" />
            <path d="M78 418 L205 190" />
            <path d="M522 418 L395 190" />
          </g>
          <g fill="#1f4a97">
            <circle cx="205" cy="190" r="5" /><circle cx="395" cy="190" r="5" />
            <circle cx="205" cy="330" r="5" /><circle cx="395" cy="330" r="5" />
          </g>
          <g fill="#ff682b">
            <circle cx="300" cy="100" r="4" /><circle cx="300" cy="420" r="4" />
          </g>
        </svg>
      </div>

      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -inset-16 rounded-full border border-primary-200/70 animate-pulse-ring" />
        <div className="absolute -inset-10 rounded-full border border-primary-300/60" />
        <div className="relative flex h-36 w-36 items-center justify-center rounded-[34px] bg-gradient-to-br from-primary-600 via-primary-500 to-[#007cff] shadow-2xl ai-shimmer shadow-primary-500/35 transition-transform duration-500 hover:scale-105">
          <div className="absolute inset-2 rounded-[28px] border border-white/30" />
          <div className="flex flex-col items-center text-white">
            <BrainCircuit className="h-10 w-10" strokeWidth={1.5} />
            <span className="mt-2 text-[10px] font-700 uppercase tracking-[0.24em]">AI Core</span>
          </div>
        </div>
      </div>

      <div className="absolute right-[15%] top-[15%] z-20 hidden rounded-2xl bg-white/90 px-3 py-2 shadow-lg ring-1 ring-primary-100 backdrop-blur-sm sm:block animate-float" style={{ animationDelay: '0.8s' }}>
        <div className="flex items-center gap-2 text-[10px] font-700 uppercase tracking-wider text-accent-600"><span className="h-1.5 w-1.5 rounded-full bg-accent-500 pulse-dot" /> Model active</div>
        <div className="mt-1 text-[10px] text-ink-500">Learning in real time</div>
      </div>

      {nodes.map((node) => (
        <AICard key={node.label} {...node} />
      ))}
    </div>
  );
}

function AICard({
  label,
  sub,
  className,
  color,
  screenshot,
}: {
  label: string;
  sub: string;
  className: string;
  color: string;
  screenshot: string;
}) {
  return (
    <div className={`absolute ${className} group z-30 flex items-center gap-2.5 rounded-2xl bg-white/95 p-2 shadow-xl ring-1 ring-primary-100 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
      <div className="relative h-12 w-10 overflow-hidden rounded-xl bg-ink-900 p-0.5 shadow-md transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
        <img src={screenshot} alt={`${label} AI product`} className="h-full w-full rounded-[9px] object-cover object-top" loading="lazy" />
        <div className="absolute bottom-1 right-1 rounded-md bg-white/90 p-0.5" style={{ color }}><Sparkles className="h-2.5 w-2.5" /></div>
      </div>
      <div className="pr-2">
        <div className="font-display text-xs font-700 text-ink-900">{label}</div>
        <div className="mt-0.5 text-[9px] font-600 uppercase tracking-wider" style={{ color }}>{sub}</div>
      </div>
    </div>
  );
}

export function ArchDiagram() {
  return (
    <svg viewBox="0 0 600 400" className="h-full w-full" fill="none">
      <defs>
        <linearGradient id="arch-grad-1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#1f4a97" /><stop offset="100%" stopColor="#007cff" /></linearGradient>
        <linearGradient id="arch-grad-2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ff682b" /><stop offset="100%" stopColor="#fec15c" /></linearGradient>
        <linearGradient id="arch-grad-3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00A19A" /><stop offset="100%" stopColor="#1f4a97" /></linearGradient>
      </defs>
      <path d="M 50 60 Q 300 60 550 60" stroke="url(#arch-grad-1)" strokeWidth="2" className="arch-line" />
      <path d="M 50 200 Q 300 200 550 200" stroke="url(#arch-grad-2)" strokeWidth="2" className="arch-line" />
      <path d="M 50 340 Q 300 340 550 340" stroke="url(#arch-grad-3)" strokeWidth="2" className="arch-line" />
      <circle cx="50" cy="60" r="12" fill="#1f4a97" opacity="0.8" /><circle cx="300" cy="60" r="16" fill="#1f4a97" /><circle cx="550" cy="60" r="12" fill="#007cff" opacity="0.8" />
      <circle cx="50" cy="200" r="12" fill="#ff682b" opacity="0.8" /><circle cx="300" cy="200" r="16" fill="#ff682b" /><circle cx="550" cy="200" r="12" fill="#fec15c" opacity="0.8" />
      <circle cx="50" cy="340" r="12" fill="#00A19A" opacity="0.8" /><circle cx="300" cy="340" r="16" fill="#00A19A" /><circle cx="550" cy="340" r="12" fill="#1f4a97" opacity="0.8" />
    </svg>
  );
}

export function CoverageGraphic() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" fill="none">
      <defs><radialGradient id="coverage-glow" cx="50%" cy="50%"><stop offset="0%" stopColor="#1f4a97" stopOpacity="0.15" /><stop offset="100%" stopColor="#1f4a97" stopOpacity="0" /></radialGradient></defs>
      <rect width="400" height="300" fill="url(#coverage-glow)" />
      <circle cx="200" cy="150" r="100" stroke="#1f4a97" strokeWidth="1.5" opacity="0.2" /><circle cx="200" cy="150" r="70" stroke="#1f4a97" strokeWidth="1" opacity="0.15" /><circle cx="200" cy="150" r="40" stroke="#1f4a97" strokeWidth="1" opacity="0.1" />
      <ellipse cx="200" cy="150" rx="100" ry="30" stroke="#1f4a97" strokeWidth="1" opacity="0.15" /><ellipse cx="200" cy="150" rx="100" ry="60" stroke="#1f4a97" strokeWidth="1" opacity="0.1" /><ellipse cx="200" cy="150" rx="30" ry="100" stroke="#1f4a97" strokeWidth="1" opacity="0.15" /><ellipse cx="200" cy="150" rx="60" ry="100" stroke="#1f4a97" strokeWidth="1" opacity="0.1" />
      {[
        { x: 160, y: 110, color: '#00A19A', label: 'UAE' }, { x: 175, y: 130, color: '#1f4a97', label: 'IQ' }, { x: 270, y: 140, color: '#007cff', label: 'VN' }, { x: 285, y: 165, color: '#ff682b', label: 'PH' }, { x: 180, y: 115, color: '#00A19A', label: 'KSA' }, { x: 195, y: 95, color: '#ff682b', label: 'FR' }, { x: 210, y: 90, color: '#007cff', label: 'DE' },
      ].map((pin) => (
        <g key={pin.label}><circle cx={pin.x} cy={pin.y} r="6" fill={pin.color} opacity="0.3" /><circle cx={pin.x} cy={pin.y} r="3" fill={pin.color} /><circle cx={pin.x} cy={pin.y} r="3" fill="none" stroke={pin.color} strokeWidth="1" opacity="0.5"><animate attributeName="r" from="3" to="12" dur="2s" repeatCount="indefinite" /><animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" /></circle></g>
      ))}
    </svg>
  );
}
