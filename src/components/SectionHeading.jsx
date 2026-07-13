import Reveal from './Reveal.jsx'

/**
 * Section heading with a silkscreen-style reference designator —
 * the way components are labelled on a PCB (U1, J3, R7…).
 */
export default function SectionHeading({ refdes, title, lead }) {
  return (
    <Reveal className="mb-10">
      <p className="refdes mb-3 flex items-center gap-3">
        <span className="inline-block h-px w-8 bg-copper-500/60" aria-hidden="true" />
        {refdes}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {lead && <p className="mt-3 max-w-2xl text-ink-muted">{lead}</p>}
    </Reveal>
  )
}
