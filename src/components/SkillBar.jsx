import { motion } from 'framer-motion'

/** Animated skill progress bar with accessible value semantics. */
export default function SkillBar({ name, level }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-sm">{name}</span>
        <span className="font-mono text-[11px] text-ink-faint">{level}%</span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-copper-600 to-copper-400"
        />
      </div>
    </div>
  )
}
