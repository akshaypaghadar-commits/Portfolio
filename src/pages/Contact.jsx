import { useState } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { MailIcon, PhoneIcon, PinIcon, GitHubIcon, LinkedInIcon } from '../components/Icons.jsx'
import { profile } from '../data/profile.js'

const initial = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) e.message = 'Message needs at least 10 characters.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      const res = await fetch(profile.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('sent')
      setForm(initial)
    } catch {
      setStatus('error')
    }
  }

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const field =
    'w-full rounded-xl border border-white/10 bg-night-800/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-copper-400/60 focus:outline-none'

  return (
    <PageTransition>
      <div className="container-site py-16">
        <SectionHeading
          refdes="J3 — CONTACT"
          title="Let's build something"
          lead="For roles, collaborations or project questions — the fastest route is email or the form below."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Details */}
          <Reveal className="space-y-5">
            <a href={`mailto:${profile.email}`} className="surface flex items-center gap-4 p-5 transition hover:border-copper-400/40">
              <MailIcon className="h-5 w-5 text-copper-400" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">Email</p>
                <p className="text-sm">{profile.email}</p>
              </div>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="surface flex items-center gap-4 p-5 transition hover:border-copper-400/40">
              <PhoneIcon className="h-5 w-5 text-copper-400" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">Phone</p>
                <p className="text-sm">{profile.phone}</p>
              </div>
            </a>
            <div className="surface flex items-center gap-4 p-5">
              <PinIcon className="h-5 w-5 text-copper-400" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">Location</p>
                <p className="text-sm">{profile.location}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn-ghost flex-1 justify-center"><GitHubIcon className="h-4 w-4" /> GitHub</a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="btn-ghost flex-1 justify-center"><LinkedInIcon className="h-4 w-4" /> LinkedIn</a>
            </div>
            {/* Google Maps embed — Mendarda, Junagadh */}
            <div className="surface overflow-hidden">
              <iframe
                title="Map — Mendarda, Junagadh, Gujarat"
                src="https://www.google.com/maps?q=Mendarda,+Junagadh,+Gujarat&output=embed"
                className="h-56 w-full grayscale-[0.4]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="surface space-y-4 p-7 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm">Name</label>
                  <input id="name" className={field} value={form.name} onChange={set('name')} placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined} />
                  {errors.name && <p id="err-name" role="alert" className="mt-1 text-xs text-copper-300">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm">Email</label>
                  <input id="email" type="email" className={field} value={form.email} onChange={set('email')} placeholder="you@example.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined} />
                  {errors.email && <p id="err-email" role="alert" className="mt-1 text-xs text-copper-300">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm">Subject <span className="text-ink-faint">(optional)</span></label>
                <input id="subject" className={field} value={form.subject} onChange={set('subject')} placeholder="What is this about?" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm">Message</label>
                <textarea id="message" rows="5" className={field} value={form.message} onChange={set('message')} placeholder="Tell me about your project or role…" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined} />
                {errors.message && <p id="err-message" role="alert" className="mt-1 text-xs text-copper-300">{errors.message}</p>}
              </div>
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              <p role="status" aria-live="polite" className="text-center text-xs">
                {status === 'sent' && <span className="text-depth-300">Message sent — I&apos;ll reply soon. Thank you!</span>}
                {status === 'error' && (
                  <span className="text-copper-300">
                    Couldn&apos;t send right now — email me directly at {profile.email}.
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </PageTransition>
  )
}
