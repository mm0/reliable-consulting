import { useState, useEffect, useCallback } from 'react'

export default function Carousel({ items, id = 'carousel', autoPlay = true, interval = 5000 }) {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive(i => (i + 1) % items.length), [items.length])
  const prev = useCallback(() => setActive(i => (i - 1 + items.length) % items.length), [items.length])

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, next])

  return (
    <div id={id} className="carousel slide">
      <div className="carousel-inner">
        {items.map((item, i) => (
          <div key={i} className={`item${i === active ? ' active' : ''}`}>
            {item}
          </div>
        ))}
      </div>
      <a className="carousel-control left" onClick={prev} style={{ cursor: 'pointer' }}>
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </a>
      <a className="carousel-control right" onClick={next} style={{ cursor: 'pointer' }}>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </a>
    </div>
  )
}
