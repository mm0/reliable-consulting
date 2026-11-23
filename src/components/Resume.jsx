import { useEffect } from 'react'
import resume from '../data/resume.json'

// resume.json is synced from the resume-latex repo by its CI. Do not edit it here.
// This page shows the "full" variant: skip items limited to "compact", and prefer
// a bullet's full text over its compact override.
const VARIANT = 'full'
const wanted = (entry) => typeof entry === 'string' || !entry.in || entry.in.includes(VARIANT)
const textOf = (entry) => (typeof entry === 'string' ? entry : entry[VARIANT] || entry.text)

// "Allstate Protection Plans - Remote" -> company + location
const splitCompany = (value) => {
  const i = value.lastIndexOf(' - ')
  return i < 0 ? { company: value, location: '' } : { company: value.slice(0, i), location: value.slice(i + 3) }
}

const workExperience = resume.jobs.filter(wanted).map((job) => ({
  dates: job.dates,
  title: job.title,
  ...splitCompany(job.company),
  items: job.bullets.filter(wanted).map(textOf),
}))

// Skill groups from the resume plus site-only keywords, de-duplicated and sorted.
const skills = [
  ...new Map(
    [...resume.skills.flatMap((group) => group.items.filter(wanted).map(textOf)), ...(resume.site_keywords || [])]
      .map((skill) => [skill.toLowerCase(), skill])
  ).values(),
].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))

const { contact } = resume

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
              <a target="_blank" rel="noreferrer" href="/MattMargolinResume.pdf">Download Compact</a>
              {' | '}
              <a target="_blank" rel="noreferrer" href="/MattMargolinResume-Full.pdf">Download Full</a>
            </h3>
          </div>
        </div>
        <div className="row-fluid">
          <div className="col-md-6 pull-right text-right">
            <h4 className="resume-email">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </h4>
            <h4 className="resume-url">
              <i className="fa fa-bookmark-o" aria-hidden="true"></i>{' '}
              <a href={contact.homepage.url}>{contact.homepage.url}</a>
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
