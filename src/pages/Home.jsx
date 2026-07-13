import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import CircuitBackground from '../components/CircuitBackground.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import StatCounter from '../components/StatCounter.jsx'
import SkillBar from '../components/SkillBar.jsx'
import GitHubSection from '../components/GitHubSection.jsx'
import Img from '../components/Img.jsx'
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon, ArrowIcon } from '../components/Icons.jsx'
import { useTypewriter } from '../hooks/useTypewriter.js'
import { profile, stats, about, education, skills, experience } from '../data/profile.js'

/* ---------------- HERO ---------------- */
function Hero() {
  const typed = useTypewriter(profile.roles)
  return (
    <section className="relative overflow-hidden" aria-label="Introduction">
      <CircuitBackground />
      <div className="container-site relative grid min-h-[88vh] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="refdes mb-4">// Electronics · Embedded · Robotics</p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-copper-400">Akshay Paghadar</span>
          </h1>
          <p className="mt-4 h-8 font-mono text-lg text-depth-400 sm:text-xl" aria-live="polite">
            {typed}
            <span className="animate-pulse-dot" aria-hidden="true">▍</span>
          </p>
          <p className="mt-5 max-w-xl text-ink-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn-primary">
              Explore projects <ArrowIcon className="h-4 w-4" />
            </Link>
            <a href={profile.resumePdf} download className="btn-ghost">
              <DownloadIcon className="h-4 w-4" /> Download resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-ink-muted transition hover:text-copper-300"><GitHubIcon className="h-6 w-6" /></a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-ink-muted transition hover:text-copper-300"><LinkedInIcon className="h-6 w-6" /></a>
            <a href={profile.socials.email} aria-label="Send email" className="text-ink-muted transition hover:text-copper-300"><MailIcon className="h-6 w-6" /></a>
            <span className="ml-2 hidden font-mono text-[11px] text-ink-faint sm:inline">
              {profile.location}
            </span>
          </div>
        </motion.div>

        {/* Portrait — sits on the circuit backdrop; the copper ring is the "pad" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-64 sm:w-80 lg:w-full lg:max-w-sm"
        >
          <div aria-hidden="true" className="absolute -inset-6 rounded-full bg-gradient-to-tr from-copper-500/25 via-transparent to-depth-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-copper-500/30 bg-gradient-to-b from-night-800 to-night-950 shadow-glow">
            <Img
              src={profile.photo}
              alt="Portrait of Akshay Paghadar"
              className="aspect-[4/5] w-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/[0.06] bg-night-950/80 px-4 py-2.5 font-mono text-[11px] text-ink-muted backdrop-blur">
              <span className="text-depth-400">● available</span>
              <span>B.Tech Electronics ’26</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section className="container-site py-20" aria-labelledby="about">
      <SectionHeading refdes="U1 — ABOUT" title="Engineer who ships hardware" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-4 text-ink-muted">
          {about.summary.map((p, i) => (
            <p key={i} className="leading-relaxed">{p}</p>
          ))}
          <div className="surface mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 p-5 text-sm">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">Education</p>
              <p className="mt-1 font-medium text-ink">{education.degree}</p>
              <p className="text-ink-muted">{education.institute} · {education.university}</p>
            </div>
            <div className="font-mono text-xs text-ink-muted">
              <p>{education.period}</p>
              <p className="text-copper-400">CGPA {education.cgpa}</p>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 content-start gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <StatCounter {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  return (
    <section className="container-site py-20" aria-labelledby="skills">
      <SectionHeading
        refdes="U2 — SKILLS"
        title="Tools of the trade"
        lead="From firmware and PCB layout to full robotic systems."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06} className="surface flex flex-col p-6">
            <h3 className="font-display text-base font-semibold text-copper-300">{group.category}</h3>
            <div className="mt-5 flex-1 space-y-4">
              {group.items.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-4">
              {group.badges.map((b) => (
                <span key={b} className="chip">{b}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  return (
    <section className="container-site py-20" aria-labelledby="experience">
      <SectionHeading
        refdes="U3 — EXPERIENCE"
        title="Internships & industrial training"
      />
      <ol className="relative ml-3 space-y-10 border-l border-white/10 pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.id} delay={i * 0.08}>
            <li className="relative">
              {/* Timeline node styled as a solder pad */}
              <span aria-hidden="true" className="absolute -left-[41px] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-copper-400 bg-night-950">
                <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
              </span>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">{job.period}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{job.role}</h3>
              <p className="text-sm text-copper-300">{job.company}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">{job.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="container-site pb-8 pt-10">
      <Reveal className="surface relative overflow-hidden p-8 text-center sm:p-12">
        <div aria-hidden="true" className="absolute inset-0 bg-grid bg-[size:28px_28px] opacity-40" />
        <div className="relative">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Have a hardware problem worth solving?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted">
            Open to graduate roles, research collaboration and freelance embedded / IoT / robotics work.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">Get in touch <ArrowIcon className="h-4 w-4" /></Link>
            <Link to="/achievements" className="btn-ghost">See achievements</Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <GitHubSection />
      <CTA />
    </PageTransition>
  )
}
