import { useEffect, useState } from 'react'
import './preloader.css'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const hideTimer = setTimeout(() => setHidden(true), 2500)
    return () => clearTimeout(hideTimer)
  }, [])

  if (hidden) return null

  return (
    <div id="preloader" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 99999,
      background: 'linear-gradient(39deg, #e7c9ad, #8fa88f)',
      backgroundSize: '400% 400%',
      animation: 'AnimationName 2s ease 1',
    }}>
    </div>
  )
}
