import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { DownloadIcon } from '../components/Icons.jsx'
import { profile } from '../data/profile.js'

export default function Resume() {
  return (
    <PageTransition>
      <div className="container-site py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading refdes="J1 — RESUME" title="Curriculum vitae" />
          <a href={profile.resumePdf} download className="btn-primary mb-10">
            <DownloadIcon className="h-4 w-4" /> Download PDF
          </a>
        </div>
        <Reveal className="surface overflow-hidden">
          {/* Embedded preview — object works across modern browsers; link fallback inside */}
          <object
            data={profile.resumePdf}
            type="application/pdf"
            className="h-[75vh] w-full"
            aria-label="Resume PDF preview"
          >
            <div className="grid h-[40vh] place-items-center p-8 text-center">
              <p className="text-sm text-ink-muted">
                Your browser can&apos;t preview PDFs.{' '}
                <a href={profile.resumePdf} download className="text-copper-400 underline">
                  Download the resume instead
                </a>.
              </p>
            </div>
          </object>
        </Reveal>
      </div>
    </PageTransition>
  )
}
