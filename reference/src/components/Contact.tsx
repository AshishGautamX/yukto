import { useState } from 'react';
import { Mail, Globe, Send, CheckCircle2, Building2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-primary-50/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: info */}
          <div className={`reveal ${visible ? 'visible' : ''}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-600 text-primary-600 ring-1 ring-primary-100">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              Get In Touch
            </div>
            <h2 className="mt-5 font-display text-4xl font-700 leading-tight text-ink-900 sm:text-5xl">
              Let's build a{' '}
              <span className="gradient-text-blue">VAS partnership</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Whether you're a telecom operator looking to boost ARPU with new digital services,
              a content owner seeking distribution, or a technology partner — we'd love to talk.
            </p>

            <div className="mt-8 space-y-4">
              <ContactItem
                icon={Building2}
                label="Company"
                value="Adcuesta Digital"
                sub="UAE · Iraq · Vietnam · Philippines · KSA · France · Germany"
              />
              <ContactItem
                icon={Mail}
                label="Email"
                value="partnerships@adcuesta.ae"
                sub="For telco partnerships & business development"
              />
              <ContactItem
                icon={Globe}
                label="Website"
                value="adcuesta.ae"
                sub="Global headquarters"
              />
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['GDPR Compliant', 'Carrier-Grade', '7 Markets Live'].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-white px-4 py-2 text-xs font-600 text-primary-700 ring-1 ring-primary-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className={`reveal reveal-delay-2 ${visible ? 'visible' : ''}`}>
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-primary-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 ring-1 ring-accent-100">
                    <CheckCircle2 className="h-8 w-8 text-accent-500" />
                  </div>
                  <h3 className="font-display text-xl font-700 text-ink-900">Message Sent</h3>
                  <p className="mt-2 text-sm text-ink-500">
                    Thanks for reaching out. We'll get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-700 text-ink-900">Send us a message</h3>

                  <Field
                    label="Your Name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="John Doe"
                  />
                  <Field
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="john@company.com"
                  />
                  <Field
                    label="Company / Operator"
                    type="text"
                    value={form.company}
                    onChange={(v) => setForm({ ...form, company: v })}
                    placeholder="Etisalat, Zain, Orange..."
                  />

                  <div>
                    <label className="mb-2 block text-xs font-600 text-ink-700">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your partnership interest..."
                      className="w-full rounded-xl bg-primary-50/40 px-4 py-3 text-sm text-ink-900 placeholder-ink-400 ring-1 ring-primary-100 transition-all focus:outline-none focus:ring-2 focus:ring-primary-400/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-3.5 text-sm font-600 text-white shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:shadow-primary-500/40"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white p-4 ring-1 ring-primary-100">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-md shadow-primary-500/20">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className="text-xs font-600 uppercase tracking-wider text-ink-400">{label}</div>
        <div className="mt-0.5 text-sm font-600 text-ink-900">{value}</div>
        <div className="mt-0.5 text-xs text-ink-500">{sub}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-600 text-ink-700">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl bg-primary-50/40 px-4 py-3 text-sm text-ink-900 placeholder-ink-400 ring-1 ring-primary-100 transition-all focus:outline-none focus:ring-2 focus:ring-primary-400/40"
      />
    </div>
  );
}
