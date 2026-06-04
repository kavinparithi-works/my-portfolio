import { useEffect } from 'react'

/**
 * Toggles the `on` class on the fixed nav once the page is scrolled past a
 * small threshold, which reveals its bottom border.
 */
export function useNavScrolled(navId = 'N', offset = 20) {
  useEffect(() => {
    const nav = document.getElementById(navId)
    if (!nav) return undefined

    const handleScroll = () => {
      nav.classList.toggle('on', window.scrollY > offset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navId, offset])
}
