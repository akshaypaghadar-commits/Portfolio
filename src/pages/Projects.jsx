import { useMemo, useState } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { SearchIcon } from '../components/Icons.jsx'
import { projects, projectCategories } from '../data/profile.js'

export default function Projects() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const inCat = category === 'All' || p.category === category
      const inQuery =
        !q ||
        [p.title, p.subtitle, p.description, ...p.hardware, ...p.software]
          .join(' ')
          .toLowerCase()
          .includes(q)
      return inCat && inQuery
    })
  }, [category, query])

  return (
    <PageTransition>
      <div className="container-site py-16">
        <SectionHeading
          refdes="U4 — PROJECTS"
          title="Things I've built"
          lead="Hardware-first projects — from custom PCBs to award-winning autonomous underwater vehicles."
        />

        {/* Filters + search */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div role="tablist" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
            {projectCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-1.5 font-mono text-xs transition ${
                  category === c
                    ? 'bg-copper-500 text-night-950'
                    : 'border border-white/10 text-ink-muted hover:text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="relative block sm:w-64">
            <span className="sr-only">Search projects</span>
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-full rounded-xl border border-white/10 bg-night-800/60 py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-ink-faint focus:border-copper-400/60 focus:outline-none"
            />
          </label>
        </div>

        {visible.length === 0 ? (
          <p className="py-16 text-center text-sm text-ink-muted">
            No projects match “{query}”. Try a different keyword or category.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  )
}
