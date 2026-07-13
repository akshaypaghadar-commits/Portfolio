import { useState } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Img from '../components/Img.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { achievementIcon } from '../components/Icons.jsx'
import { achievements } from '../data/profile.js'

function AchievementCard({ item, index }) {
  const [lightbox, setLightbox] = useState(null)
  const Icon = achievementIcon[item.icon] || achievementIcon.trophy

  return (
    <Reveal delay={index * 0.05}>
      <article className="surface overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
          {/* Text */}
          <div className="p-7 lg:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-copper-500/15 text-copper-400">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-mono text-[11px] text-ink-faint">{item.period}</span>
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold leading-snug">{item.title}</h2>
            <p className="mt-1 text-sm text-copper-300">{item.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            <ul className="mt-4 space-y-2">
              {item.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-ink-muted">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-depth-400" />
                  {p}
                </li>
              ))}
            </ul>
            {item.video && (
              <a
                href={item.video}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-5 !px-4 !py-2 text-xs"
              >
                ▶ Watch performance on YouTube
              </a>
            )}
          </div>

          {/* Photos & certificates */}
          <div className="grid grid-cols-2 gap-2 bg-night-900/60 p-4">
            {item.images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setLightbox(i)}
                aria-label={`View: ${img.caption}`}
                className={`group relative overflow-hidden rounded-xl border border-white/[0.06] ${
                  item.images.length === 3 && i === 0 ? 'col-span-2' : ''
                }`}
              >
                <Img src={img.src} alt={img.caption} className="h-full min-h-32 w-full object-cover transition duration-500 group-hover:scale-[1.05]" />
                <span className="absolute inset-x-0 bottom-0 truncate bg-night-950/80 px-3 py-1.5 text-left font-mono text-[10px] text-ink-muted opacity-0 backdrop-blur transition group-hover:opacity-100">
                  {img.caption}
                </span>
              </button>
            ))}
          </div>
        </div>
        <Lightbox items={item.images} index={lightbox} setIndex={setLightbox} />
      </article>
    </Reveal>
  )
}

export default function Achievements() {
  return (
    <PageTransition>
      <div className="container-site py-16">
        <SectionHeading
          refdes="U5 — ACHIEVEMENTS"
          title="Awards, competitions & honours"
          lead="Every award below is backed by the photo and certificate — click any image to view it full size."
        />
        <div className="space-y-8">
          {achievements.map((a, i) => (
            <AchievementCard key={a.id} item={a} index={i} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
