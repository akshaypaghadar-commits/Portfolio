import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { useVisitorCounter } from './hooks/useVisitorCounter.js'

// Code-split every page for fast first paint
const Home = lazy(() => import('./pages/Home.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const Achievements = lazy(() => import('./pages/Achievements.jsx'))
const Research = lazy(() => import('./pages/Research.jsx'))
const Resume = lazy(() => import('./pages/Resume.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function PageLoader() {
  return (
    <div className="grid min-h-[50vh] place-items-center" role="status" aria-label="Loading page">
      <span className="font-mono text-sm text-ink-muted animate-pulse-dot">loading…</span>
    </div>
  )
}

export default function App() {
  const location = useLocation()
  useVisitorCounter()

  // Update document title per route (simple SEO helper)
  useEffect(() => {
    const titles = {
      '/': 'Akshay Paghadar — Electronics, Embedded Systems & Robotics Engineer',
      '/projects': 'Projects — Akshay Paghadar',
      '/achievements': 'Achievements — Akshay Paghadar',
      '/research': 'Research & Patents — Akshay Paghadar',
      '/resume': 'Resume — Akshay Paghadar',
      '/contact': 'Contact — Akshay Paghadar',
    }
    document.title = titles[location.pathname] || 'Akshay Paghadar'
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-copper-500 focus:px-4 focus:py-2 focus:text-night-950"
      >
        Skip to content
      </a>
      <Navbar />
      <ScrollToTop />
      <main id="main" className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/research" element={<Research />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
