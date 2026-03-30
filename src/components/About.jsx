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
              I am a heavily motivated Software Engineer with a passion toward the world of Internet Start-Ups and the importance of effective Software Architecture and Development, Automation and Cloud Engineering.
            </p>
            <p>
              Since graduating New York University with a degree in Computer Science and Economics, along with my lifelong interest in commerce and the internet, I have primarily focused on E-Commerce, web and mobile application development, System Administration and DevOps.
            </p>
            <p>
              I have been committed to helping transform ideas into reality through software engineering and by improving software platforms and software engineering teams. I enjoy being a pivotal component in the process of building businesses from the ground up with the primary goal of reaching profitability and supporting growth. I am a strong proponent of the open-source software community and also recognize the power of proprietary software. I believe in the power to bring people and markets closer that Modern Computing, networking, Marketing, and Social Media provide.
            </p>
            <p>
              Today, I continue to work alongside business owners and software engineering teams on promising ideas for new businesses and software. As I continually work towards developing my technical and professional skills, I enjoy the opportunities provided by working with different companies and teams filled with expertise in a variety of fields. Additionally, I enjoy working and providing expertise for teams that have various Cloud initiatives and projects.
            </p>
            <p>
              My hobbies include: music production, programming, soccer, yoga, hiking, fitness, traveling, reading, podcasts, investing, day-trading and spending time with friends and family.
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
