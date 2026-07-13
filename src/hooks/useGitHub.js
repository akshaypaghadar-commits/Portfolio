import { useEffect, useState } from 'react'

/**
 * Fetches public repos + language stats from the GitHub REST API.
 * Unauthenticated (60 req/h) — fine for a portfolio; results are cached
 * in sessionStorage to avoid re-fetching on navigation.
 */
export function useGitHub(username) {
  const [state, setState] = useState({ repos: [], languages: {}, loading: true, error: null })

  useEffect(() => {
    if (!username) return
    const cacheKey = `gh:${username}`
    const cached = sessionStorage.getItem(cacheKey)
    if (cached) {
      setState({ ...JSON.parse(cached), loading: false, error: null })
      return
    }
    let cancelled = false
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`)
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub API: ${r.status}`)
        return r.json()
      })
      .then((repos) => {
        const languages = {}
        repos.forEach((r) => {
          if (r.language) languages[r.language] = (languages[r.language] || 0) + 1
        })
        const payload = { repos, languages }
        sessionStorage.setItem(cacheKey, JSON.stringify(payload))
        if (!cancelled) setState({ ...payload, loading: false, error: null })
      })
      .catch((error) => !cancelled && setState((s) => ({ ...s, loading: false, error })))
    return () => { cancelled = true }
  }, [username])

  return state
}
