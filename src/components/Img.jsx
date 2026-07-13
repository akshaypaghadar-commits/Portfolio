import { useState } from 'react'

/**
 * Image with lazy loading + graceful fallback.
 * If a photo hasn't been copied into /public/images yet, a labelled
 * placeholder renders instead of a broken image.
 */
export default function Img({ src, alt, className = '', ...rest }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`grid place-items-center bg-night-700/50 text-center ${className}`}
      >
        <span className="max-w-[90%] px-3 font-mono text-[11px] leading-relaxed text-ink-faint">
          {alt || 'image'}<br />add file to /public/images
        </span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
