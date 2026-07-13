import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'

export default function NotFound() {
  return (
    <PageTransition>
      <div className="container-site grid min-h-[60vh] place-items-center py-20 text-center">
        <div>
          <p className="font-mono text-sm text-copper-400">ERR 404 — open circuit</p>
          <h1 className="mt-3 font-display text-4xl font-bold">This trace goes nowhere</h1>
          <p className="mt-3 text-sm text-ink-muted">The page you&apos;re looking for doesn&apos;t exist or was moved.</p>
          <Link to="/" className="btn-primary mt-8">Back to home</Link>
        </div>
      </div>
    </PageTransition>
  )
}
