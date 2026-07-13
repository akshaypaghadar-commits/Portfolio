import { useState } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Img from '../components/Img.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { ExternalIcon, DownloadIcon, CertificateIcon } from '../components/Icons.jsx'
import { papers, patents } from '../data/profile.js'

function PaperCard({ paper, index, onView }) {
  return (
    <Reveal delay={index * 0.06}>
      <article className="surface grid gap-6 p-7 lg:grid-cols-[1.3fr_0.7fr] lg:p-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
            Paper {index + 1} · {paper.date}
          </p>
          <h2 className="mt-2 font-display text-lg font-semibold leading-snug">{paper.title}</h2>
          <p className="mt-1.5 text-sm text-copper-300">{paper.authors}</p>
          <p className="mt-1 text-xs text-ink-muted">{paper.venue}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">Abstract · </span>
            {paper.abstract}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {paper.doi && (
              <a href={paper.doi} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 text-xs">
                <ExternalIcon className="h-4 w-4" /> DOI
              </a>
            )}
            {paper.link && (
              <a href={paper.link} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 text-xs">
                <ExternalIcon className="h-4 w-4" /> Read online
              </a>
            )}
            {paper.pdf && (
              <a href={paper.pdf} download className="btn-ghost !px-4 !py-2 text-xs">
                <DownloadIcon className="h-4 w-4" /> PDF
              </a>
            )}
          </div>
        </div>
        <button
          onClick={onView}
          aria-label={`View publication certificate for ${paper.title}`}
          className="group overflow-hidden rounded-xl border border-white/[0.06]"
        >
          <Img src={paper.certificate} alt={`Publication certificate — ${paper.title}`} className="h-full max-h-64 w-full object-cover object-top transition group-hover:scale-[1.03]" />
        </button>
      </article>
    </Reveal>
  )
}

const statusColor = {
  Granted: 'bg-depth-400/15 text-depth-300 border-depth-400/30',
  Published: 'bg-copper-500/15 text-copper-300 border-copper-500/30',
  'In Process': 'bg-white/[0.06] text-ink-muted border-white/15',
}

function PatentCard({ patent, index, onView }) {
  return (
    <Reveal delay={index * 0.06}>
      <article className="surface flex h-full flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className={`rounded-full border px-3 py-1 font-mono text-[11px] ${statusColor[patent.status]}`}>
            {patent.status}
          </span>
          <span className="font-mono text-[11px] text-ink-faint">{patent.type}</span>
        </div>
        <h3 className="mt-4 font-display text-base font-semibold leading-snug">{patent.title}</h3>
        <p className="mt-1 font-mono text-sm text-copper-400">№ {patent.number}</p>
        <p className="mt-0.5 font-mono text-[11px] text-ink-faint">{patent.date}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{patent.description}</p>
        {patent.certificate && (
          <button onClick={onView} className="btn-ghost mt-5 !px-4 !py-2 text-xs">
            <CertificateIcon className="h-4 w-4" /> View certificate
          </button>
        )}
      </article>
    </Reveal>
  )
}

export default function Research() {
  const [lightbox, setLightbox] = useState(null)
  const certItems = [
    ...papers.filter((p) => p.certificate).map((p) => ({ src: p.certificate, caption: p.title })),
    ...patents.filter((p) => p.certificate).map((p) => ({ src: p.certificate, caption: `${p.type} ${p.number} — ${p.title}` })),
  ]
  const openCert = (src) => setLightbox(certItems.findIndex((c) => c.src === src))

  return (
    <PageTransition>
      <div className="container-site py-16">
        <SectionHeading
          refdes="U7 — RESEARCH"
          title="Publications"
          lead="Peer-reviewed research growing directly out of hands-on projects."
        />
        <div className="space-y-6">
          {papers.map((p, i) => (
            <PaperCard key={p.id} paper={p} index={i} onView={() => openCert(p.certificate)} />
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            refdes="U8 — PATENTS"
            title="Patents"
            lead="Four filings with the Indian Patent Office — two granted/published, two under examination."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {patents.map((p, i) => (
              <PatentCard key={p.id} patent={p} index={i} onView={() => openCert(p.certificate)} />
            ))}
          </div>
        </div>

        <Lightbox items={certItems} index={lightbox} setIndex={setLightbox} />
      </div>
    </PageTransition>
  )
}
