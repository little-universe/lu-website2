import React, { Component } from 'react'
import { Transporter } from '../orbit'

class WorkPage extends Component {
  state = {
  }

  render() {
    return (
      <div className="page page-work">
        <Transporter name="caseStudy1" show={true} annihilate>
          <div className="case-study">
            <h1>Strive Digital</h1>
            <p style={{width: '100%'}}>Strive Digital is multi-channel messaging platform used by nonprofits and campaigns across the country to recruit and activate their supporters.</p>
          </div>
        </Transporter>

        <Transporter name="caseStudy2" show={true} annihilate>
          <div className="case-study">
            <h1>Betterfin</h1>
            <p>Betterfin is a service for business owners to get educated on small business lending and navigate commercial products with confidence. They provide transparency into lending through data analytics to help owners secure business financing they understand.</p>
          </div>
        </Transporter>

        <Transporter name="caseStudy4" show={true} annihilate>
          <div className="case-study">
            <h1>H1 Insights</h1>
            <p>We built a strong foundation for H1's data engineering infrastructure, while mentoring the team on Apache Spark best practices. As they grew their pipeline, we helped them build the engineering team.</p>
          </div>
        </Transporter>

        <Transporter name="caseStudy3" show={true} annihilate>
          <div className="case-study">
            <h1>Motion Design</h1>
            <p>We devised a technique for better state transitions on the web.</p>
          </div>
        </Transporter>
      </div>
    )
  }
}

export default WorkPage;
