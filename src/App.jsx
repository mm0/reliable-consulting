import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Project from './components/Project'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'

import '../public/css/bootstrap.css'
import '../public/css/bootstrap-responsive.css'
import '../public/css/bootstrap-theme.css'
import '../public/css/font-awesome.css'
import '../public/css/icomoon.css'
import '../public/css/style.css'
import './overrides.css'

function PageWrapper({ section, className, children }) {
  return (
    <section role={section} className={className}>
      {children}
    </section>
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const isHome = location.pathname === '/' || location.pathname === '/home'

  return (
    <>
      {loading && <Preloader />}
      <Header />
      <div className="parallax-image-wrapper parallax-image-wrapper-100">
        <div className="parallax-image parallax-image-100"
             style={{ backgroundImage: "url('/img/abstract.jpg')" }} />
      </div>
      <div id="skrollr-body">
        <section role="main" id="main-content" class="fullscreen container-fluid gap home">
        <Routes>
          <Route path="/" element={
            <PageWrapper section="main" className="fullscreen container-fluid gap home">
              <div id="center" className="home"><Home /></div>
            </PageWrapper>
          } />
          <Route path="/home" element={
            <PageWrapper section="main" className="fullscreen container-fluid gap home">
              <div id="center" className="home"><Home /></div>
            </PageWrapper>
          } />
          <Route path="/about" element={
            <PageWrapper section="about-content" className="about-content container">
              <About />
            </PageWrapper>
          } />
          <Route path="/portfolio" element={
            <PageWrapper section="portfolio-content" className="portfolio-content">
              <Portfolio />
            </PageWrapper>
          } />
          <Route path="/projects/:project" element={
            <PageWrapper section="portfolio-content" className="portfolio-content">
              <Project />
            </PageWrapper>
          } />
          <Route path="/resume" element={
            <PageWrapper section="resume-content" className="resume-content container">
              <Resume />
            </PageWrapper>
          } />
          <Route path="/contact" element={
            <PageWrapper section="contact-content" className="contact-content gap">
              <Contact />
            </PageWrapper>
          } />
        </Routes>
        </section>
        <div className="clear" />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  )
}

export default App
