import { useEffect } from 'react'

/**
 * Observes every `.rv` element and adds the `.in` class once it scrolls into
 * view, triggering the fade-up transition. Each element is unobserved after
 * its first reveal so the animation only plays once.
 */
export function useScrollReveal(threshold = 0.07) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    const elements = document.querySelectorAll('.rv')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])
}
