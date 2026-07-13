import { Link } from 'react-router-dom'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'
import { profile } from '../data/profile.js'
import { useVisitorCounter } from '../hooks/useVisitorCounter.js'

export default function Footer() {
  const visits = useVisitorCounter()
  return (
    <footer className="mt-24 border-t border-white/[0.06]">
      <div className="container-site flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold">Akshay Paghadar</p>
          <p className="mt-1 font-mono text-[11px] text-ink-faint">
            Embedded · IoT · Robotics — built with React, Tailwind &amp; Framer Motion
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-ink-muted">
          <Link to="/projects" className="hover:text-copper-300">Projects</Link>
          <Link to="/achievements" className="hover:text-copper-300">Achievements</Link>
          <Link to="/research" className="hover:text-copper-300">Research</Link>
          <Link to="/contact" className="hover:text-copper-300">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-muted hover:text-copper-300"><GitHubIcon /></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-muted hover:text-copper-300"><LinkedInIcon /></a>
          <a href={profile.socials.email} aria-label="Email" className="text-ink-muted hover:text-copper-300"><MailIcon /></a>
        </div>
      </div>
      <div className="container-site flex items-center justify-between border-t border-white/[0.04] py-4 font-mono text-[11px] text-ink-faint">
        <span>© {new Date().getFullYear()} Akshay Paghadar</span>
        <span aria-live="polite">{visits ? `visitors: ${visits.toLocaleString()}` : ''}</span>
      </div>
    </footer>
  )
}
