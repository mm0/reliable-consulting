import { useEffect } from 'react'

const services = [
  { icon: 'icomoon-icon-bug', text: 'Detect, diagnose and mitigate dangerous bugs. Implement automated testing with fast feedback loops.' },
  { icon: 'icomoon-icon-shield2', text: 'Secure your infrastructure, codebase and company. Sleep well at night knowing everything is running securely.' },
  { icon: 'icomoon-icon-layers', text: 'Architect the various layers of your stack for high availability, performance, and provide monitoring, alerting and rapid response.' },
  { icon: 'icomoon-icon-clouds', text: 'Configure and maintain your cloud infrastructure using Infrastructure as Code principles.' },
  { icon: 'icomoon-icon-cloud-lightning', text: 'Enhance and supercharge your cloud(s) with low latency solutions capable of working alongside your local environment.' },
  { icon: 'icomoon-icon-global', text: 'Provide scalable global solutions utilizing sharding, replication, content delivery networks and traffic management.' },
  { icon: 'icomoon-icon-beaker', text: "Experiment with new or up-and-coming technologies and configurations when the standard just isn't cutting it." },
  { icon: 'icomoon-icon-gears', text: 'Troubleshoot, fix and future-proof just about anything within your stack.' },
  { icon: 'icomoon-icon-genius', text: 'Provide excellent solutions to difficult problems and minimize dependency on expensive third-party services.' },
  { icon: 'icomoon-icon-presentation', text: 'Prepare your company for high growth through scalability, redundancy and efficient software architecture.' },
  { icon: 'icomoon-icon-wallet', text: 'Save massive amounts of money by implementing Open-Source solutions and by leveraging my expertise in continuous integration and delivery.' },
  { icon: 'icomoon-icon-scissors', text: 'Cut costs by reducing redundancy, increasing developer efficiency, implementing automation and avoiding common pitfalls.' },
  { icon: 'icomoon-icon-users', text: 'Provide mentorship and support for your teams and cultivate a culture of effective collaboration and teamwork.' },
]

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div id="about" className="container-fluid">
      <div className="row-fluid">
        <div className="col-md-6 about-left">
          <div className="big-question">
            Are you searching for a talented software engineer with experience in Cloud Infrastructure, Application Security, DevOps and Software Development?
          </div>
          <br /><br />
          <div className="inline-block heading-title-alt text-center">
            <h2 className="text-uppercase">About me</h2>
          </div>
          <div className="bio-summary">
            <p>
              I am a Staff-level Tech Lead with 15+ years of experience architecting CI/CD platforms, cloud infrastructure, and developer tooling. My passion lies in enabling organizations to scale reliably through platform engineering, strategic architectural decisions, and building high-performing engineering teams.
            </p>
            <p>
              Since graduating New York University with a degree in Computer Science and Economics, I have built expertise across the full spectrum of software engineering—from early-stage startups to enterprise organizations. My focus has evolved from hands-on development to strategic platform engineering, where I now lead teams of engineers and drive organizational-level infrastructure initiatives.
            </p>
            <p>
              I am passionate about building platforms and engineering cultures that enable teams to ship faster and more reliably. Whether architecting GitOps workflows, establishing disaster recovery strategies, or mentoring engineering leaders, I focus on solving problems that unlock organizational growth. I believe in leveraging both open-source and proprietary solutions strategically to maximize impact while minimizing costs.
            </p>
            <p>
              Today, I partner with organizations to transform their infrastructure and empower their engineering teams. I lead platform engineering initiatives that serve hundreds of engineers, drive architectural decisions that shape how organizations scale, and mentor teams to think strategically about reliability and efficiency. I continue to stay current with cloud technologies, emerging DevOps practices, and the evolving landscape of infrastructure automation.
            </p>
            <p>
              My hobbies include: music production, programming, soccer, yoga, hiking, fitness, traveling, reading, podcasts, investing, and spending time with friends and family.
            </p>
            <div className="clear"></div>
          </div>
        </div>
        <div className="col-md-6 about-right">
          <div className="big-question">What can I do for you? <br /></div>
          {services.map((s, i) => (
            <div key={i} className="col-md-12 about-side-section row">
              <div className="about-icon">
                <span className={s.icon}></span>
              </div>
              <div className="col-md-12 about-icon-snippet">{s.text}</div>
              <div className="clear"></div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="clear"></div>
    </div>
  )
}
