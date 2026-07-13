import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Img from './Img.jsx'
import { CloseIcon, ChevronL, ChevronR } from './Icons.jsx'

/**
 * Accessible lightbox for photos & certificates.
 * items: [{ src, caption }] — controlled via index/setIndex (null = closed).
 */
export default function Lightbox({ items, index, setIndex }) {
  const close = useCallback(() => setIndex(null), [setIndex])
  const step = useCallback(
    (d) => setIndex((i) => (i + d + items.length) % items.length),
    [items.length, setIndex],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, close, step])

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={items[index]?.caption || 'Image viewer'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-night-950/95 p-4 backdrop-blur"
          onClick={close}
        >
          <button onClick={close} aria-label="Close viewer" className="absolute right-4 top-4 rounded-lg border border-white/15 p-2 text-ink hover:text-copper-300">
            <CloseIcon />
          </button>
          {items.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 p-2.5 text-ink hover:text-copper-300 sm:left-6"><ChevronL /></button>
              <button onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 p-2.5 text-ink hover:text-copper-300 sm:right-6"><ChevronR /></button>
            </>
          )}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="max-h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Img src={items[index].src} alt={items[index].caption} className="max-h-[76vh] w-auto rounded-xl object-contain shadow-card" />
          </motion.div>
          <p className="mt-4 max-w-xl text-center font-mono text-xs text-ink-muted">
            {items[index].caption} · {index + 1}/{items.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
