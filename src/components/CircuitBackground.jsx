import { motion, useReducedMotion } from 'framer-motion'

/**
 * Signature element: an ambient PCB-trace backdrop for the hero.
 * Thin copper traces with slow "signal" pulses travelling along them.
 */
const traces = [
  'M0 80 H180 L230 130 H420 L470 80 H720',
  'M0 190 H120 L170 240 H540 L600 180 H860',
  'M60 0 V90 L110 140 V320',
  'M300 0 V60 L350 110 H620 L670 160 V340',
  'M0 300 H240 L290 250 H700',
  'M760 0 V120 L710 170 V300',
]

export default function CircuitBackground() {
  const reduce = useReducedMotion()
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
      <svg viewBox="0 0 860 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        {traces.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="rgba(217,142,50,0.14)" strokeWidth="1.5" fill="none" />
            {!reduce && (
              <motion.path
                d={d}
                stroke="rgba(242,192,120,0.8)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="26 640"
                initial={{ strokeDashoffset: 660 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 7 + i * 1.6, repeat: Infinity, ease: 'linear', delay: i * 0.9 }}
              />
            )}
            {/* Via pads at trace endpoints */}
            <circle cx={d.match(/M(\d+) (\d+)/)?.[1]} cy={d.match(/M(\d+) (\d+)/)?.[2]} r="3" fill="rgba(52,211,176,0.5)" className="animate-pulse-dot" />
          </g>
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-night-950/40 to-night-950" />
    </div>
  )
}
