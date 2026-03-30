import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Carousel from './Carousel'

const previewItems = [
  { img: '/img/resp/cloudoptimizer-desktop.jpg', alt: 'Cloud Comparison - www.cloudoptimizer.io', project: 'cloudoptimizer' },
  { img: '/img/tradesy.jpg', alt: 'Online Marketplace - www.tradesy.com', project: 'tradesy' },
  { img: '/img/gatherandsave.jpg', alt: 'MVP App - Gather and Save', project: 'gatherandsave' },
  { img: '/img/babeebook.jpg', alt: 'iOS App - Babeebook', project: 'babeebook' },
  { img: '/img/vinport.jpg', alt: 'e-Commerce Start-up - Vinport.com', project: 'vinport' },
  { img: '/img/wondermode.jpg', alt: 'e-Commerce Start-up - Wondermode.com', project: 'wondermode' },
  { img: '/img/boothify.jpg', alt: 'iOS App - Boothify.me', project: 'boothify' },
  { img: '/img/prolific.jpg', alt: 'Digital Agency - Prolific Interactive', project: 'prolific' },
]

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const carouselItems = previewItems.map((item, i) => (
    <div key={i}>
      <img src={item.img} alt={item.alt} style={{ width: '100%' }} />
      <div className="carousel-caption">
        <p>
          <Link to={`/projects/${item.project}`}
                className="btn-wire btn btn-lg wire-btn-medium-turquoise">
            View Project.
          </Link>
        </p>
      </div>
    </div>
  ))

  return (
    <div className="vc-content row-fluid">
      <div className="row-fluid">
        <div className="row-fluid home-header">
          <div className="col-lg-6 col-lg-offset-3">
            <h1 className="text-center">
              Hello, I'm a Software Engineer Based in <br />Los Angeles, CA
            </h1>
          </div>
        </div>
        <div className="row-fluid home-header-2">
          <div className="col-lg-6 col-lg-offset-3">
            <h2 className="text-center mg-lg">
              I provide creative and efficient solutions to difficult problems.
            </h2>
          </div>
        </div>
        <div className="container preview_container">
          <Carousel items={carouselItems} id="home-carousel" />
        </div>
      </div>
      <div className="clear"></div>
    </div>
  )
}
