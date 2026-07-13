import { useEffect, useState } from 'react'

/**
 * Lightweight visitor counter using the free CountAPI-compatible
 * service at api.counterapi.dev. Replace the namespace with your own.
 * Fails silently if the service is unreachable.
 */
export function useVisitorCounter() {
  const [count, setCount] = useState(null)
  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/akshaypaghadar-portfolio/visits/up')
      .then((r) => r.json())
      .then((d) => setCount(d.count ?? null))
      .catch(() => {})
  }, [])
  return count
}
