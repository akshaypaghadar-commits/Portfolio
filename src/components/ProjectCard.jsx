import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Img from './Img.jsx'
import { ArrowIcon } from './Icons.jsx'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="surface group flex flex-col overflow-hidden transition hover:border-copper-400/40 hover:shadow-glow"
    >
      <Link to={`/projects/${project.id}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-night-700/40">
          <Img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <span className="absolute left-3 top-3 chip !bg-night-950/80 !text-copper-300">
            {project.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-copper-300">
            {project.title}
          </h3>
          <p className="mt-1.5 flex-1 text-sm text-ink-muted">{project.subtitle}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.hardware.slice(0, 3).map((h) => (
              <span key={h} className="chip">{h}</span>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-copper-400">
            View details <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
