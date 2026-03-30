import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { projectData } from '../data/projects'
import Carousel from './Carousel'
import Lightbox from './Lightbox'

export default function Project() {
  const { project: slug } = useParams()
  const [lightboxOpen, setLightboxOpen] = useState(null)
  const data = projectData[slug]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!data) {
    return (
      <div className="container">
        <div className="text-center">
          <i className="fa fa-exclamation-triangle fa-2x"></i>
          <div className="col-md-5">404 Project not found</div>
        </div>
      </div>
    )
  }

  const images = data.lightbox_images || []

  return (
    <div className="project_container container">
      <div className="col-md-3">
        <div className="col-md-12">
          <Link className="back-to-portfolio" to="/portfolio">Back to Portfolio</Link>
        </div>
      </div>
      <div className="col-md-5 inline-block heading-title-alt border-short-bottom text-center">
        <h3 className="text-uppercase">{data.title}</h3>
      </div>
      <div className="col-md-12">
        {images.length > 0 && (
          <div className="project carousel slide col-md-5 project-images">
            <Carousel
              id="project-carousel"
              items={images.map((img, i) => (
                <div key={i} style={{ cursor: 'pointer' }} onClick={() => setLightboxOpen(i)}>
                  <img src={img.src} alt={img.caption} />
                  <div className="carousel-caption"><p>{img.caption}</p></div>
                </div>
              ))}
            />
          </div>
        )}
        {images.length > 0 && <div className="col-md-1"><br /></div>}
        <div className={`col-md-${images.length > 0 ? '6' : '12'} project-title`}>
          <div className="row project-role">
            <dl className="dl-horizontal">
              <dt>Role:</dt>
              <dd>{data.role}</dd>
            </dl>
          </div>
          <div className="row project-technologies">
            <dl className="dl-horizontal">
              <dt>Technologies:</dt>
              <dd>{data.technologies}</dd>
            </dl>
          </div>
          <div className="row project-url">
            <dl className="dl-horizontal">
              <dt>URL(s):</dt>
              <dd>
                {data.urls.map((url, i) => (
                  <span key={i}>
                    <a target="_blank" rel="noreferrer" href={url.href}>{url.label}</a>
                    <br />
                  </span>
                ))}
              </dd>
            </dl>
          </div>
          <br />
          <div className="col-xs-project-description"
               dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </div>

      {lightboxOpen !== null && (
        <div onClick={() => setLightboxOpen(null)}
             style={{
               position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
               background: 'rgba(0,0,0,0.85)', zIndex: 99999,
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               cursor: 'pointer',
             }}>
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <button onClick={() => setLightboxOpen(null)}
                    style={{
                      position: 'absolute', top: -30, right: 0,
                      background: 'none', border: 'none', color: '#fff',
                      fontSize: '24px', cursor: 'pointer',
                    }}>&times;</button>
            <img src={images[lightboxOpen].src} alt={images[lightboxOpen].caption}
                 style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain' }} />
            <div style={{ color: '#fff', textAlign: 'center', marginTop: '10px' }}>
              {images[lightboxOpen].caption}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
