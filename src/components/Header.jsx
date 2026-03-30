import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Header() {
  const location = useLocation()
  const [shrink, setShrink] = useState(false)
  const [collapsed, setCollapsed] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 120)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setCollapsed(true)
  }, [location])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '/home'
    return location.pathname.startsWith(path)
  }

  const navItems = [
    { path: '/', label: 'Home', key: 'home-menu' },
    { path: '/portfolio', label: 'Portfolio', key: 'portfolio-menu' },
    { path: '/about', label: 'About', key: 'about-menu' },
    { path: '/resume', label: 'Resume', key: 'resume-menu' },
    { path: '/contact', label: 'Contact', key: 'contact-menu' },
    { path: '/links', label: 'Links', key: 'links-menu' },
  ]

  return (
    <header className={`noise navbar navbar-fixed-top${shrink ? ' shrink' : ''}`} role="banner">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="navbar-header-container col-lg-4 col-md-4 col-sm-4 col-xs-9">
            <Link className="navbar-brand" to="/">
              <picture>
                <source srcSet="/img/resp/RC_full-phone-portrait.png, /img/resp/RC_full-phone-portrait_2x.png 2x"
                        media="(max-width: 784px) and (orientation: portrait)" />
                <source srcSet="/img/resp/RC_full-phone-landscape.png, /img/resp/RC_full-phone-landscape_2x.png 2x"
                        media="(max-width: 784px) and (orientation: landscape)" />
                <source srcSet="/img/resp/RC_full-tablet-portrait.png, /img/resp/RC_full-tablet-portrait_2x.png 2x"
                        media="(min-width: 785px) and (max-width: 1024px) and (orientation: portrait)" />
                <source srcSet="/img/resp/RC_full-tablet-landscape.png, /img/resp/RC_full-tablet-landscape_2x.png 2x"
                        media="(min-width: 785px) and (max-width: 1024px) and (orientation: landscape)" />
                <source srcSet="/img/RC_full.png" media="(min-width: 1025px)" />
                <img alt="Matt Margolin 2m.io" />
              </picture>
            </Link>
          </div>
          <div className="col-xs-3">
            <button className="navbar-toggle" type="button"
                    onClick={() => setCollapsed(!collapsed)}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <nav className={`collapse navbar-collapse bs-navbar-collapse col-sm-8 col-md-8 pull-right${collapsed ? '' : ' in'}`}
               role="navigation">
            <ul className="nav navbar-nav">
              {navItems.flatMap((item, i) => {
                const items = []
                if (i > 0) items.push(<li key={`div-${i}`} className="nav-icon nav-divider">|</li>)
                items.push(
                  <li key={item.key} className={`${item.key}${isActive(item.path) ? ' active' : ''}`}>
                    {item.path === '/links' ? (
                      <a href="#" onClick={(e) => {
                        e.preventDefault()
                        const footer = document.querySelector('footer')
                        if (footer) footer.scrollIntoView({ behavior: 'smooth' })

                        // Animate the footer icons
                        const links = document.querySelectorAll('footer .links a')
                        links.forEach((link, i) => {
                          setTimeout(() => link.classList.add('ui-state-hovered'), 300 * i)
                          setTimeout(() => link.classList.remove('ui-state-hovered'), 300 * i + 100 * (i + 1))
                        })

                        if (window.matchMedia('(max-width: 768px)').matches) setCollapsed(true)
                      }}>
                        {item.label}
                      </a>
                    ) : (
                      <Link to={item.path}
                            onClick={() => { if (window.matchMedia('(max-width: 768px)').matches) setCollapsed(true) }}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                )
                return items
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
