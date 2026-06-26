import { useEffect, useRef, useState } from 'react'
import { site } from '../../data/site'

/** Small home icon SVG rendered inside the logo button. */
function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3Z" />
    </svg>
  )
}

/**
 * Fixed top navigation. The `on` class (toggled by useNavScrolled) reveals the
 * bottom border once the page scrolls. The logo cycles between "K" and a home
 * icon with a spin transition every few seconds.
 */
export function Navbar() {
  const logoRef = useRef(null)
  const [showHome, setShowHome] = useState(false)

  // Cycle: show K for 3s → spin → show home for 2s → spin → show K → repeat
  useEffect(() => {
    let timeout

    const cycle = () => {
      // Spin and switch to home icon
      const el = logoRef.current
      if (el) {
        el.classList.remove('logo-spin')
        void el.offsetWidth
        el.classList.add('logo-spin')
      }
      setTimeout(() => setShowHome(true), 300)

      // After 2s showing home, spin back to K
      timeout = setTimeout(() => {
        if (el) {
          el.classList.remove('logo-spin')
          void el.offsetWidth
          el.classList.add('logo-spin')
        }
        setTimeout(() => setShowHome(false), 300)

        // Wait 3s then repeat
        timeout = setTimeout(cycle, 3000)
      }, 2000)
    }

    // Start first cycle after 3s
    timeout = setTimeout(cycle, 3000)

    return () => clearTimeout(timeout)
  }, [])

  const handleLogoClick = () => {
    // Replay the spin (force reflow so the animation restarts).
    const el = logoRef.current
    if (el) {
      el.classList.remove('logo-spin')
      void el.offsetWidth
      el.classList.add('logo-spin')
    }
    // Smooth-scroll to the top / landing page.
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav
      id="N"
      className="fixed inset-x-0 top-0 z-[100] border-b border-transparent bg-bg/[.92] backdrop-blur-[16px] transition-colors duration-300 [&.on]:border-rule"
    >
      <div className="mx-auto flex h-[60px] max-w-site items-center justify-between px-[64px] max-[680px]:px-[22px]">
        <div className="flex items-center gap-[10px] font-barlow text-[18px] font-extrabold uppercase tracking-[.5px] text-ink">
          <button
            ref={logoRef}
            type="button"
            onClick={handleLogoClick}
            aria-label="Back to top"
            className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full bg-ink text-[13px] font-black text-white"
          >
            {showHome ? <HomeIcon /> : site.initial}
          </button>
          {/* Name shortens with the viewport instead of disappearing. */}
          <span data-cursor="ignore">
            <span className="hidden min-[641px]:inline">KAVIN PARITHI SIVASAMY</span>
            <span className="hidden min-[421px]:inline min-[641px]:hidden">KAVIN PARITHI</span>
            <span className="inline min-[421px]:hidden">KAVIN</span>
          </span>
        </div>
        <div className="flex items-center gap-[8px]">
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            aria-label="Download Resume"
            className="hidden max-[760px]:inline-flex items-center justify-center rounded-full bg-orange p-[11px] shadow-[0_0_18px_rgba(200,72,42,.55)] transition-all duration-200 active:bg-dark active:shadow-[0_0_28px_rgba(200,72,42,.75)]"
          >
            <span className="resume-icon-cycle relative h-[16px] w-[16px]">
              <svg className="resume-arrow absolute inset-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              <svg className="resume-hand absolute inset-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 14V4.5a1.5 1.5 0 0 1 3 0V12" />
                <path d="M11 12.5a1.5 1.5 0 0 1 3 0V14" />
                <path d="M14 13a1.5 1.5 0 0 1 3 0v1" />
                <path d="M17 14a1.5 1.5 0 0 1 3 0v3a7 7 0 0 1-7 7h-1a7 7 0 0 1-7-7v-1.5a1.5 1.5 0 0 1 3 0" />
              </svg>
            </span>
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="inline-flex items-center gap-[8px] rounded-full bg-dark px-[20px] py-[9px] text-[14px] font-bold text-white transition-[background,transform] duration-200 hover:translate-y-[-1px] hover:bg-[#333] max-[580px]:gap-0 max-[580px]:p-[11px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
            <span className="max-[580px]:hidden">Email</span>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-[8px] rounded-full bg-dark px-[20px] py-[9px] text-[14px] font-bold text-white transition-[background,transform] duration-200 hover:translate-y-[-1px] hover:bg-[#333] max-[580px]:gap-0 max-[580px]:p-[11px]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
            <span className="max-[580px]:hidden">LinkedIn</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
