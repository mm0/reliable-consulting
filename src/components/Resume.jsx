import { useEffect } from 'react'

const workExperience = [
  {
    location: 'Remote', dates: '2022 - Present',
    company: 'Allstate Protection Plans', title: 'Tech Lead, DevOps Engineering',
    items: [
      'Lead a team of 12 DevOps engineers providing CI/CD, infrastructure, and platform services to 500+ software engineers.',
      'Drive platform strategy, initiative planning, and architecture consortium decisions across the engineering organization.',
      'Lead disaster recovery planning and business continuity efforts; establish cross-functional partnerships with IT, DBAs, and engineering leadership.',
    ]
  },
  {
    location: 'Remote', dates: '2019 - 2022',
    company: 'Allstate Protection Plans', title: 'Senior DevOps Engineer',
    items: [
      'Architected and drove adoption of GitOps workflows, Infrastructure as Code standards, and configuration management across the organization.',
      'Re-architected the release process and git branching strategy, designing and implementing the CloudBees Jenkins CI platform and shared pipeline libraries in Groovy.',
      'Served as escalation point for complex software, platform, and release engineering issues organization-wide.',
    ]
  },
  {
    location: 'Remote', dates: '2017 - 2019',
    company: 'Various', title: 'DevOps Consultant',
    items: [
      'Delivered DevOps solutions for Technologent, Farmers Insurance, LawTechSupport, Heartbeat, and CloudOptimizer.io.',
      'Designed CI/CD pipelines and configuration management for RedHat, IBM, and Oracle enterprise environments using Terraform, Ansible, and Jenkins.',
      'Architected serverless and containerized solutions using AWS Lambda, API Gateway, Node.js, Docker, and Kubernetes.',
    ]
  },
  {
    location: 'Santa Monica, CA', dates: '2014 - 2017',
    company: 'Tradesy', title: 'Senior Software Engineer, DevOps',
    items: [
      'Led DevOps initiatives using AWS ($1MM+ annual budget), Ansible, Akamai, Kubernetes and grew team to 4 people to support a team of 50 engineers.',
      'Automated CI/CD pipelines and managed infrastructure as code using AWS, Ansible, Jenkins, Git, PHP, Bash, Python.',
      'Orchestrated complete infrastructure migration from managed physical servers to AWS.',
      'Led monitoring and on-call initiatives using OpsGenie, Slack, Pingdom, Nagios, Splunk, Cloudwatch and more',
      'Planned for growth and scalability by utilizing Auto Scaling technologies and application monitoring (NewRelic, VividCortex) to establish a healthy equilibrium amongst various clusters.',
      'Implemented best practices for High Availability Production clusters utilizing DNS, ELB, HAProxy, Percona, Elasticsearch, Redis 3.0, RabbitMQ, Apache, Docker, Kubernetes and various technologies.',
      'Performed software re-architecture and refactoring to improve code base by making it more resilient, efficient and fault tolerant',
      'Performed root cause analysis efforts for performance and availability affecting issues helping reach 100% uptime',
      'Utilized Akamai DNS/CDN services to provide fastest user experience through caching.',
      'Assisted in security configuration and analysis using tools such as ModSecurity and Akamai SiteShield/WAF/Ion.',
      'Performed regular code reviews to identify and address performance bottlenecks and stability vulnerabilities.',
      'Created Dynamic AWS QA, CI and Staging Environments, allowing for rapid development and integration between 40+ developers with minimal deployment risk.',
      'Automated Developer Environment configuration locally using Vagrant, VirtualBox, Ruby, Bash and Ansible.',
      'Automated Web Infrastructure via Jenkins, Bash and Ansible',
      'Performed Database Administration, HA setup, and monitoring for various Database Clusters.',
      'Led various code refactors allowing for HA, security and stability during periods of traffic Growth',
      'Assisted various teams with capacity planning and development best practices',
      'Provided guidance for safe deployments of new features including rollback strategies and scheduling maintenance windows',
      'Led efforts to secure infrastructure and codebase by employing principle of least privileges for IAM, Github teams, and refactoring and encrypting sensitive data stored in plaintext within code repositories and logs',
      'Automated Data backups for various systems such as MySQL, Elasticsearch, Redis, Ubuntu, Configurations, Git, DNS',
      'Worked with third-party vendors to discover and provide the best tools and services for infrastructure team',
      'Assisted with office infrastructure such as Firewall implementation, DHCP, VPN, Wi-Fi, and IT support',
      'Assisted with management and sunsetting of acquired company\'s cloud infrastructure',
      'Participated in quarter-long initiative planning related to both infrastructure and supporting external teams',
      'Participated in Disaster Recovery Planning and BCP efforts',
      'Defended against DDoS Attacks and extortion threats',
      'Planned for growth and scalability by utilizing Auto Scaling, application monitoring, performance testing and assisted with micro-services architecture using Kubernetes',
    ]
  },
  {
    location: 'Santa Monica, CA', dates: '2014 - 2017',
    company: 'Tradesy', title: 'Senior Software Engineer, DevOps',
    items: [
      'Led DevOps initiatives using AWS ($1MM+ annual budget), Ansible, Akamai, Kubernetes and grew team to 4 people to support a team of 50 engineers.',
      'Automated CI/CD pipelines and managed infrastructure as code using AWS, Ansible, Jenkins, Git, PHP, Bash, Python.',
      'Orchestrated complete infrastructure migration from managed physical servers to AWS.',
      'Led monitoring and on-call initiatives using OpsGenie, Slack, Pingdom, Nagios, Splunk, Cloudwatch and more',
      'Planned for growth and scalability by utilizing Auto Scaling technologies and application monitoring (NewRelic, VividCortex) to establish a healthy equilibrium amongst various clusters.',
      'Implemented best practices for High Availability Production clusters utilizing DNS, ELB, HAProxy, Percona, Elasticsearch, Redis 3.0, RabbitMQ, Apache, Docker, Kubernetes and various technologies.',
      'Performed software re-architecture and refactoring to improve code base by making it more resilient, efficient and fault tolerant',
      'Performed root cause analysis efforts for performance and availability affecting issues helping reach 100% uptime',
      'Utilized Akamai DNS/CDN services to provide fastest user experience through caching.',
      'Assisted in security configuration and analysis using tools such as ModSecurity and Akamai SiteShield/WAF/Ion.',
      'Performed regular code reviews to identify and address performance bottlenecks and stability vulnerabilities.',
      'Created Dynamic AWS QA, CI and Staging Environments, allowing for rapid development and integration between 40+ developers with minimal deployment risk.',
      'Automated Developer Environment configuration locally using Vagrant, VirtualBox, Ruby, Bash and Ansible.',
      'Automated Web Infrastructure via Jenkins, Bash and Ansible',
      'Performed Database Administration, HA setup, and monitoring for various Database Clusters.',
      'Led various code refactors allowing for HA, security and stability during periods of traffic Growth',
      'Assisted various teams with capacity planning and development best practices',
      'Provided guidance for safe deployments of new features including rollback strategies and scheduling maintenance windows',
      'Led efforts to secure infrastructure and codebase by employing principle of least privileges for IAM, Github teams, and refactoring and encrypting sensitive data stored in plaintext within code repositories and logs',
      'Automated Data backups for various systems such as MySQL, Elasticsearch, Redis, Ubuntu, Configurations, Git, DNS',
      'Worked with third-party vendors to discover and provide the best tools and services for infrastructure team',
      'Assisted with office infrastructure such as Firewall implementation, DHCP, VPN, Wi-Fi, and IT support',
      'Assisted with management and sunsetting of acquired company\'s cloud infrastructure',
      'Participated in quarter-long initiative planning related to both infrastructure and supporting external teams',
      'Participated in Disaster Recovery Planning and BCP efforts',
      'Defended against DDoS Attacks and extortion threats',
      'Planned for growth and scalability by utilizing Auto Scaling, application monitoring, performance testing and assisted with micro-services architecture using Kubernetes',
    ]
  },
  {
    location: 'New York, NY', dates: '2013 - 2014',
    company: 'Vinport Marketing', title: 'Full Stack Developer, Consultant',
    items: [
      'Inherited Project with agreement from Prolific Interactive',
      'Acted as lead developer and system administrator in helping maintain Magento platform and extensions.',
      'Performed wide range of duties from Project Management to software architecture and development using various technologies.',
      'Administered MySQL database and Shipworks shipping software.',
      'Managed and configured servers on Amazon\'s AWS EC2',
      'Developed custom Magento plugins in PHP including for analytics.',
      'Provided continuous maintenance, monitoring and improvement of business technology.',
    ]
  },
  {
    location: 'Brooklyn, NY', dates: '2012 - 2013',
    company: 'Prolific Interactive', title: 'Backend Developer',
    items: [
      'Led backend development and server administration, helping the company grow into a leading interactive digital agency.',
      'Architected software and developed using various technologies such as PHP, Node.js, and Objective-C/iOS.',
      'Led Backend development by developing APIs for projects: Babeebook (iOS App), Fox MyTowns (iOS App), and Boothify (internal iOS/iPad App and custom automation for business).',
      'Worked on Boothify internal management iOS App',
      'Created internal CRUD API framework designed for reusability.',
      'Administered MySQL and Mongo Databases.',
      'Developed custom Magento Site and Plugins for use by Vinport Marketing',
      'Managed and configured servers on AWS and created custom CLI tool for automation.',
      'Used Git for source-code management and collaboration.',
      'Used Pivotal Tracker for use with agile methodology and project management.',
      'Provided system administration for various projects and to support a team of 10 engineers',
    ]
  },
  {
    location: 'New York, NY', dates: '2011 - 2012',
    company: 'Wondermode.com', title: 'Lead Developer, Consultant',
    items: [
      'Inherited project with agreement from Axis Services',
      'Developed front end user interface and backend (LAMP) for high-end e-commerce fashion startup wonderMode.com launched in spring 2011.',
      'Administered and maintained LAMP servers in AWS and Rackspace.',
      'Worked on creating custom PHP and jQuery modules for e-Commerce shopping cart, content management',
      'Maintained and developed shopping cart and content management backend and frontend',
      'Participated in daily standups',
      'Developed the online marketplace to be manageable by non-technical staff',
      'Worked on features such as order and payment processing, shipping automation, tooling and integration with various APIs',
      'Developed front end user interface and backend for fashion e-commerce marketplace startup launched in spring 2011. Administered LAMP in AWS and developed admin dashboard for managing orders, global shipments and payments',
    ]
  },
  {
    location: 'New York, NY', dates: '2010 - 2011',
    company: 'Axis International Services', title: 'Developer, Assistant Project Manager',
    items: [
      'Developed various modules and plugins using jQuery and PHP for various projects and assisted in the front-end HTML/CSS coding.',
      'Helped manage local and outsourced team of developers and distributed tasks using the Agile Methodology.',
      'Provided continuous support and development for the improvement of various projects.',
      'Learned LAMP stack development',
    ]
  },
  {
    location: 'New York, NY', dates: '2010',
    company: 'US Department of Commerce, Bureau of the Census', title: 'Technology Automation Clerk',
    items: [
      'Provided maintenance and system administration for hundreds of computers and peripheral equipment in an administrative office environment.',
      'Executed duties including computer repair, remedy ticket management',
      'Administered user accounts, various devices and software.',
    ]
  },
  {
    location: 'New York, NY', dates: '2008 – 2010',
    company: 'NYU Liberal Studies Program', title: 'Instructional Technology Coordinator Assistant and Webmaster',
    items: [
      'Worked as assistant to the Director of Instructional Technology',
      'Administered Blackboard, Educational Content Management System for common resources, used by the department.',
      'Developed and implemented online resource management of learning resources and media through web design, blog management and various technology/web projects.',
    ]
  },
]

const skills = [
  'API Development', 'AWS, GCE, Azure, Alicloud', 'Agile Development, SDLC', 'Ansible',
  'Apache2, Tomcat', 'Auto-scaling', 'Bash, Python, PHP, JAVA', 'Code Documentation',
  'Continuous Integration/Delivery', 'Configuration Management', 'DB Administration',
  'DB Schema Design', 'DevOps', 'Development Environments', 'Disaster Recovery',
  'DNS, WAF, Traffic Management', 'Docker', 'E-Commerce', 'Elasticsearch', 'Full Stack',
  'Git, Github, Gitlab', 'High Availability', 'Jenkins', 'Kubernetes',
  'Linux Tuning and Configuration', 'Load Balancing, HAProxy, Nginx', 'Load Testing',
  'Magento', 'Mentoring', 'MongoDB', 'Monitoring', 'MySQL/Percona', 'Nagios', 'node.js',
  'Problem Solving', 'Redis Clustering', 'Selenium', 'Slack, Webhooks/API', 'Splunk',
  'Static Code Analysis', 'Terraform, Packer, Vault', 'Travis-CI', 'Vagrant, VirtualBox', 'Vim',
]

export default function Resume() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="container-fluid resume-container">
      <div className="resume-top col-md-12">
        <div className="row-fluid">
          <div className="col-md-12 text-center">
            <h3>
              <i className="fa fa-file-pdf-o" aria-hidden="true"></i>{' '}
              <a target="_blank" rel="noreferrer" href="/MattMargolinResume.pdf">Download as PDF</a>
            </h3>
          </div>
        </div>
        <div className="row-fluid">
          <div className="col-md-6 pull-right text-right">
            <h4 className="resume-email">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>{' '}
              <a href="mailto:matt.margolin@gmail.com">matt.margolin@gmail.com</a>
            </h4>
            <h4 className="resume-url">
              <i className="fa fa-bookmark-o" aria-hidden="true"></i>{' '}
              <a href="http://www.reliable.consulting">http://www.reliable.consulting</a>
            </h4>
            <br />
          </div>
          <div className="col-md-6">
            <h2 className="text-left">Matt Margolin</h2>
            <h4 className="text-left">Los Angeles, CA, USA</h4>
          </div>
          <div className="clear"></div>
        </div>
        <div className="row-fluid"><hr /></div>
        <div className="row-fluid">
          <br />
          <h3 className="text-uppercase"><u>Summary</u></h3>
          <br />
          <div className="resume-info text-center">
            <p>I am a professional and reliable Software Engineering Consultant.</p>
            <p>I enjoy providing the cloud infrastructure and software development services required to start and manage successful online businesses.</p>
            <p>I enjoy a good challenge and expanding my technical knowledge while providing creative solutions. I would like to be part of a collaborative and dynamic engineering team to contribute from my previous experiences and continue to grow as a software engineer.</p>
            <div className="clear"></div>
          </div>
        </div>
        <br /><br />
        <div className="row-fluid">
          <h3 className="text-uppercase"><u>Education</u></h3>
          <br />
          <div className="resume-education-single">
            <div className="left">
              <div className="resume-education-single-location">New York, NY</div>
              <div className="resume-education-single-dates">August 2006 - May 2010</div>
            </div>
            <div className="right">
              <div className="resume-education-single-school">New York University, College of Arts and Science</div>
              <div className="resume-education-single-major">BA Economics and Computer Science</div>
              <div className="resume-education-single-minor">Mathematics Minor</div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <br />
      </div>
      <div className="resume-body row-fluid">
        <div className="col-md-12">
          <br />
          <div className="resume-work">
            <h3><u>WORK EXPERIENCE</u></h3>
            <br />
            {workExperience.map((job, i) => (
              <div key={i}>
                <div className="resume-work-single">
                  <div className="left">
                    <div className="resume-work-single-location">{job.location}</div>
                    <div className="resume-work-single-dates">{job.dates}</div>
                  </div>
                  <div className="right">
                    <div className="resume-work-single-company">{job.company}</div>
                    <div className="resume-work-single-title">{job.title}</div>
                    <div className="resume-work-single-description">
                      <ul className="list-unstyled">
                        {job.items.map((item, j) => <li key={j}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="col-md-12">
          <br />
          <h3 className="text-uppercase"><u>Professional Skills</u></h3>
          <br />
          {skills.map((skill, i) => (
            <div key={i} className="resume-skills-single">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
