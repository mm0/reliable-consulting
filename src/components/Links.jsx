import { useEffect } from 'react'

export default function Links() {
  useEffect(() => {
    // Small delay to ensure footer is rendered before scrolling
    const timer = setTimeout(() => {
      const footer = document.querySelector('footer')
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Animate the link icons like the original
  useEffect(() => {
    const links = document.querySelectorAll('footer .links a')
    links.forEach((link, i) => {
      setTimeout(() => link.classList.add('ui-state-hovered'), 300 * i)
      setTimeout(() => link.classList.remove('ui-state-hovered'), 300 * i + 100 * (i + 1))
    })
  }, [])

  return (
    <div style={{ minHeight: '70vh' }} />
  )
}
