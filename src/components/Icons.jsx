/* Minimal inline SVG icon set — no icon library dependency. */
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
const S = ({ children, className = 'h-5 w-5', label }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden={label ? undefined : true} aria-label={label} role={label ? 'img' : undefined} {...base}>{children}</svg>
)

export const GitHubIcon = (p) => (
  <S {...p}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></S>
)
export const LinkedInIcon = (p) => (
  <S {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2a5 5 0 0 1 2-2z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></S>
)
export const MailIcon = (p) => (
  <S {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></S>
)
export const PhoneIcon = (p) => (
  <S {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2z" /></S>
)
export const PinIcon = (p) => (
  <S {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></S>
)
export const ArrowIcon = (p) => (<S {...p}><path d="M5 12h14M13 6l6 6-6 6" /></S>)
export const DownloadIcon = (p) => (<S {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></S>)
export const ExternalIcon = (p) => (<S {...p}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" /></S>)
export const CloseIcon = (p) => (<S {...p}><path d="M18 6 6 18M6 6l12 12" /></S>)
export const ChevronL = (p) => (<S {...p}><path d="m15 18-6-6 6-6" /></S>)
export const ChevronR = (p) => (<S {...p}><path d="m9 18 6-6-6-6" /></S>)
export const SunIcon = (p) => (<S {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></S>)
export const MoonIcon = (p) => (<S {...p}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" /></S>)
export const MenuIcon = (p) => (<S {...p}><path d="M4 6h16M4 12h16M4 18h16" /></S>)
export const SearchIcon = (p) => (<S {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4-4" /></S>)
export const TrophyIcon = (p) => (<S {...p}><path d="M8 21h8m-4-4v4M17 4H7v5a5 5 0 0 0 10 0V4z" /><path d="M17 5h3a1 1 0 0 1 1 1c0 2.5-2 4-4 4M7 5H4a1 1 0 0 0-1 1c0 2.5 2 4 4 4" /></S>)
export const MedalIcon = (p) => (<S {...p}><circle cx="12" cy="14" r="5" /><path d="M8.5 9.5 5 2h5l2 4 2-4h5l-3.5 7.5" /></S>)
export const GlobeIcon = (p) => (<S {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" /></S>)
export const ShieldIcon = (p) => (<S {...p}><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z" /></S>)
export const CertificateIcon = (p) => (<S {...p}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M7 8h10M7 12h6" /><circle cx="17" cy="16" r="2.5" /><path d="m16 18 -1 4 2-1 2 1-1-4" /></S>)
export const ChipIcon = (p) => (<S {...p}><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" /></S>)

export const MusicIcon = (p) => (<S {...p}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></S>)

export const achievementIcon = {
  trophy: TrophyIcon, medal: MedalIcon, globe: GlobeIcon, shield: ShieldIcon, certificate: CertificateIcon, music: MusicIcon,
}
