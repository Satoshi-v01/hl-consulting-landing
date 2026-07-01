import { useEffect, useRef } from 'react'

/**
 * Adds the `in-view` class to the referenced element when it enters the viewport.
 * Works with .reveal and .reveal-stagger CSS classes in index.css.
 *
 * @param {IntersectionObserverInit} [options]
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      // Graceful fallback: make visible immediately
      if (el) el.classList.add('in-view')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
    // options is intentionally excluded: callers pass object literals that would
    // create a new reference on every render, causing the observer to be
    // recreated each time. The observer only needs to be set up once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
