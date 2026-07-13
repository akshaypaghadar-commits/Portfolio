import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import Img from '../components/Img.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { ArrowIcon, GitHubIcon, ExternalIcon } from '../components/Icons.jsx'
import { projects } from '../data/profile.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const [lightbox, setLightbox] = useState(null)

  if (!project) {
    return (
      <div className="container-site py-32 text-center">
        <p className="font-mono text-sm text-ink-muted">Project not found.</p>
        <Link to="/projects" className="btn-ghost mt-6">Back to projects</Link>
      </div>
    )
  }

  const gallery = (project.gallery.length ? project.gallery : [project.image]).map((src) => ({
    src,
    caption: project.title,
  }))

  return (
    <PageTransition>
      <article className="container-site py-16">
        <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted hover:text-copper-300">
          <ArrowIcon className="h-4 w-4 rotate-180" /> all projects
        </Link>

        <Reveal className="mt-6">
          <span className="chip !text-copper-300">{project.category}</span>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{project.title}</h1>
          <p className="mt-2 max-w-2xl text-ink-muted">{project.subtitle}</p>
        </Reveal>

        {/* Gallery */}
        <Reveal className="mt-10 grid gap-4 sm:grid-cols-3">
          {gallery.map((g, i) => (
            <button
              key={g.src + i}
              onClick={() => setLightbox(i)}
              className={`overflow-hidden rounded-2xl border border-white/[0.06] ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
              aria-label={`Open image ${i + 1} of ${project.title}`}
            >
              <Img src={g.src} alt={`${project.title} — photo ${i + 1}`} className="h-full min-h-40 w-full object-cover transition hover:scale-[1.03]" />
            </button>
          ))}
        </Reveal>
        <Lightbox items={gallery} index={lightbox} setIndex={setLightbox} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <h2 className="font-display text-xl font-semibold">Overview</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">{project.description}</p>
            <h2 className="mt-8 font-display text-xl font-semibold">Highlights</h2>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-ink-muted">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper-400" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div className="surface p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">Hardware stack</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.hardware.map((h) => <span key={h} className="chip">{h}</span>)}
              </div>
              <h3 className="mt-6 font-mono text-[11px] uppercase tracking-widest text-ink-faint">Software stack</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.software.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noreferrer" className="btn-ghost">
                  <GitHubIcon className="h-4 w-4" /> Source code
                </a>
              )}
              {project.links.paper && (
                <a href={project.links.paper} target="_blank" rel="noreferrer" className="btn-ghost">
                  <ExternalIcon className="h-4 w-4" /> Research paper
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn-primary">
                  <ExternalIcon className="h-4 w-4" /> Live demo
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </article>
    </PageTransition>
  )
}
