import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { GitHubIcon, ExternalIcon } from './Icons.jsx'
import { useGitHub } from '../hooks/useGitHub.js'
import { profile } from '../data/profile.js'

/** Live GitHub repositories + language statistics via the GitHub REST API. */
export default function GitHubSection() {
  const { repos, languages, loading, error } = useGitHub(profile.githubUsername)
  const totalLang = Object.values(languages).reduce((a, b) => a + b, 0) || 1

  return (
    <section className="container-site py-20" aria-labelledby="github-heading">
      <SectionHeading
        refdes="U6 — GITHUB"
        title="Open source & code"
        lead="Live from the GitHub API — latest repositories and language mix."
      />
      {loading && <p className="font-mono text-sm text-ink-muted animate-pulse-dot">fetching repositories…</p>}
      {error && (
        <p className="text-sm text-ink-muted">
          Couldn&apos;t reach GitHub right now — browse directly at{' '}
          <a className="text-copper-400 underline" href={profile.socials.github} target="_blank" rel="noreferrer">
            github.com/{profile.githubUsername}
          </a>.
        </p>
      )}
      {!loading && !error && (
        <>
          {Object.keys(languages).length > 0 && (
            <Reveal className="mb-8 flex flex-wrap gap-2">
              {Object.entries(languages).map(([lang, count]) => (
                <span key={lang} className="chip !text-ink">
                  {lang} · {Math.round((count / totalLang) * 100)}%
                </span>
              ))}
            </Reveal>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.slice(0, 6).map((r, i) => (
              <Reveal key={r.id} delay={i * 0.05}>
                <a
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="surface group flex h-full flex-col p-5 transition hover:border-copper-400/40"
                >
                  <div className="flex items-center justify-between">
                    <GitHubIcon className="h-5 w-5 text-ink-muted" />
                    <ExternalIcon className="h-4 w-4 text-ink-faint transition group-hover:text-copper-400" />
                  </div>
                  <h3 className="mt-3 font-mono text-sm font-medium text-ink group-hover:text-copper-300">
                    {r.name}
                  </h3>
                  <p className="mt-1.5 flex-1 text-xs text-ink-muted">
                    {r.description || 'No description yet.'}
                  </p>
                  <div className="mt-3 flex items-center gap-3 font-mono text-[11px] text-ink-faint">
                    {r.language && <span>{r.language}</span>}
                    <span>★ {r.stargazers_count}</span>
                    <span>⑂ {r.forks_count}</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
