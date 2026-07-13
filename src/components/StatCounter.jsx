import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/** Animated count-up statistic. */
export default function StatCounter({ value, prefix = '', suffix = '', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) return setN(value)
    let raf
    const start = performance.now()
    const dur = 1400
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, reduce])

  return (
    <div ref={ref} className="surface p-5 text-center">
      <p className="font-display text-3xl font-bold text-copper-400 sm:text-4xl">
        {prefix}{n}{suffix}
      </p>
      <p className="mt-2 text-xs leading-snug text-ink-muted">{label}</p>
    </div>
  )
}
