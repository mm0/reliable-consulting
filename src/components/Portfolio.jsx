import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const projects = {
  left: [
    { slug: 'allstate-protection-plans', logo: '/img/portfolio/allstate_app.png', alt: 'Allstate Protection Plans', title: 'Tech Lead, DevOps Engineering', desc: 'Led platform engineering initiatives supporting 500+ engineers. Drove GitOps adoption, established disaster recovery planning, and managed CI/CD infrastructure serving extended warranty and protection plan services.' },
    { slug: 'cloudoptimizer', logo: '/img/portfolio/logos/cloudoptimizer.png', alt: 'CloudOptimizer', title: 'Software Engineer, DevOps', desc: 'Public comparison site for cloud providers.' },
    { slug: 'tradesy', logo: '/img/portfolio/logos/tradesy2x.png', alt: 'Tradesy', title: 'Software Engineer, DevOps', desc: 'As member of the infrastructure team at Tradesy, I was able to ensure the company remained stable and available during a period of high growth.' },
    { slug: 'prolific', logo: '/img/portfolio/logos/prolific.png', alt: 'Prolific Interactive', title: 'Software Engineer', desc: 'At Prolific Interactive, then a fledgling digital agency, I held the role of Senior Backend Engineer and helped the company become a premier Mobile-first agency.' },
    { slug: 'mytowns', logo: '/img/portfolio/logos/mytowns1.png', alt: 'Fox MyTowns App', title: 'API Developer', desc: 'MyTowns, an App contracted by Fox News, was developed at Prolific Interactive with me leading the Backend API Development' },
    { slug: 'babeebook', logo: '/img/portfolio/logos/babeebook.png', alt: 'Babeebook App', title: 'Backend/API Engineer', desc: 'Babeebook was created as an app to document and share a newborn\'s life with friends and family through digital media. At Prolific, I led the API Development for this mobile App' },
    { slug: 'gatherandsave', logo: '/img/portfolio/logos/gatherandsave.png', alt: 'Gatherandsave App', title: 'Backend/API Engineer', desc: 'This mobile app was developed as an MVP for a new service that simplifies workplace carpooling. I created the initial architecture for the backend system' },
  ],
  right: [
    { slug: 'wondermode', logo: '/img/portfolio/logos/wondermode1.png', alt: 'Wondermode.com start-up', title: 'Lead Developer', desc: 'I joined wondermode.com in 2011 as lead developer where we utilized various technologies built around the Magento platform.' },
    { slug: 'vinport', logo: '/img/portfolio/logos/vinport1.png', alt: 'Vinport.com start-up', title: 'Lead Developer, System Administrator', desc: 'Vinport.com was launched in 2012 as a marketplace for limited deals on various wines from around the globe.' },
    { slug: 'openfolio', logoText: 'Open Portfolio', title: 'Owner + Developer', desc: 'An open-source complete version of this site utilizing Vagrant, AWS, Terraform, Ansible and Node.js created by yours truly!' },
    { slug: 'ansible', logoText: 'Ansible Roles and Playbooks', title: 'Owner + Developer', desc: 'Various ansible-galaxy roles and playbooks.' },
    { slug: 'innobackupex', logoText: 'PHP Innobackupex', title: 'Owner + Developer', desc: 'An open-source project developed at Tradesy as a PHP package for automating backup, encryption and archival of incremental MySQL File-system backups.' },
    { slug: 'magento-development-environment', logoText: 'Magento Dev Environment', title: 'Owner + Developer', desc: 'An open-source barebones local Magento development environment utilizing Vagrant, PHP, Chef, MySQL and Magento.' },
    { slug: 'boothify', logo: '/img/portfolio/logos/boothify.png', alt: 'Boothify.me side business', title: 'Developer', desc: 'An internal project at Prolific, I helped developed the iOS App and Backend API as well as on-premise tooling.' },
  ],
}

function ProjectCard({ project }) {
  return (
    <div className="col-md-12 portfolio-single">
      <div className="card">
        <div className="front">
          <div className="logo">
            <div className="portfolio-single-name">
              {project.logo
                ? <img src={project.logo} alt={project.alt} />
                : project.logoText}
            </div>
          </div>
          <div className="title text-uppercase">
            <h4>{project.title}</h4>
          </div>
          <div className="desc">{project.desc}</div>
          <Link to={`/projects/${project.slug}`} className="show-project">View Project</Link>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div id="portfolio_container">
      <div className="container">
        <div className="inline-block heading-title-alt border-short-bottom text-center">
          <h3 className="text-uppercase">Portfolio</h3>
        </div>
        <div className="col-md-6">
          {projects.left.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
        <div className="col-md-6">
          {projects.right.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
        <div className="clear"></div>
      </div>
      <div className="clear"></div>
    </div>
  )
}
