import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { MenuIcon, CloseIcon, SunIcon, MoonIcon, DownloadIcon } from './Icons.jsx'
import { profile } from '../data/profile.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/research', label: 'Research & Patents' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    localStorage.theme ? localStorage.theme === 'dark' : true,
  )
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.theme = dark ? 'dark' : 'light'
  }, [dark])
  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-lg border border-white/10 p-2 text-ink-muted transition hover:text-copper-300"
    >
      {dark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm transition ${
      isActive ? 'text-copper-300' : 'text-ink-muted hover:text-ink'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'border-b border-white/[0.06] bg-night-950/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between" aria-label="Main">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-copper-500 font-display text-sm font-bold text-night-950">
            AP
          </span>
          <span className="font-display text-sm font-semibold tracking-wide">
            Akshay<span className="text-copper-400"> Paghadar</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-copper-400"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a href={profile.resumePdf} download className="btn-primary !px-4 !py-2 text-xs">
            <DownloadIcon className="h-4 w-4" /> CV
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="rounded-lg border border-white/10 p-2 text-ink"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-white/[0.06] bg-night-950/95 backdrop-blur lg:hidden"
          >
            <div className="container-site flex flex-col gap-1 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-sm ${
                      isActive ? 'bg-copper-500/10 text-copper-300' : 'text-ink-muted'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a href={profile.resumePdf} download className="btn-primary mt-2 justify-center">
                <DownloadIcon className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
