import React, { Component } from 'react'
import { Transporter } from '../orbit'

class CaseStudy extends Component {
  state = {
    display: false
  }
  componentDidMount() {
    setTimeout(() => this.setState({ display: true }), 10)
  }
  render() {
    const { display } = this.state
    const { title, body, style, anim, onClick } = this.props
    const show = display && anim === 'shown'
    return (
      <div style={style} className="case-study" onClick={onClick}>
        <h1 className={show ? 'shown' : ''}>{title}</h1>
        <p className={show ? 'shown' : ''}>
          {body}
        </p>
      </div>
    )
  }
}

class WorkPage extends Component {
  state = {
  }

  render() {
    const { navigate } = this.props
    return (
      <div className="page page-work">
        <Transporter name="caseStudy1" show={true}>
          <CaseStudy
            onClick={() => navigate('strive')}
            title="Strive Digital"
            body="Strive Digital is multi-channel messaging platform used by nonprofits and campaigns across the country to recruit and activate their supporters."
          />
        </Transporter>

        <Transporter name="caseStudy2" show={true}>
          <CaseStudy
            title="Betterfin"
            body="Betterfin is a service for business owners to get educated on small business lending and navigate commercial products with confidence. They provide transparency into lending through data analytics to help owners secure business financing they understand."
          />
        </Transporter>

        <Transporter name="caseStudy4" show={true}>
          <CaseStudy
            title="H1 Insights"
            body="We built a strong foundation for H1's data engineering infrastructure, while mentoring the team on Apache Spark best practices. As they grew their pipeline, we helped them build the engineering team."
          />
        </Transporter>

        <Transporter name="caseStudy3" show={true}>
          <CaseStudy
            title="Motion Design"
            body="We devised a technique for better state transitions on the web."
          />
        </Transporter>
      </div>
    )
  }
}

export default WorkPage;
