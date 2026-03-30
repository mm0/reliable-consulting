import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      try { document.body.removeChild(script) } catch (e) {}
    }
  }, [])

  return (
    <div id="contact_container" className="container">
      <div className="row">
        <div className="text-center lead">Contact Me</div>
      </div>
      <div className="col-md-5 col-md-offset-1">
        <br />
        <div className="row">
          <div className="row">
            <div className="col-md-12 col-md-offset-1">
              <h5>Feel free to reach out via email or schedule a consultation.</h5>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12 col-md-offset-1">
              <a href="mailto:matt.margolin@gmail.com" id="contact_submit" className="pull-right btn btn-primary">
                <i className="fa fa-envelope-o" aria-hidden="true" style={{ marginRight: '10px' }}></i>
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden-lg hidden-md hidden-sm">&nbsp;</div>
      <div className="col-md-6">
        <div style={{ padding: '20px' }}>
          <div className="text-center lead">Schedule a Consultation</div>
          <div className="calendly-inline-widget" data-url="https://calendly.com/matt-margolin/consultation"
               style={{ minWidth: '320px', height: '640px' }}></div>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  )
}
