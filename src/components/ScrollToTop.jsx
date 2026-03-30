import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 120)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <a id="scroll-to-top"
       className={`scroll-to-top-show${visible ? '' : ' hide'}`}
       onClick={scrollUp}
       style={{ cursor: 'pointer' }}>
      <i className="fa fa-angle-up"></i>
    </a>
  )
}
