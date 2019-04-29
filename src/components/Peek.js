import React, { Component } from 'react'
import { Transporter } from '../orbit'

class Peek extends Component {
  state = {
  }

  render() {
    const { peekPage, route } = this.props;
    const peekedWork = peekPage == "work" && route !== 'work'

    return (
      <div className={`peek
        ${peekedWork && "peek-work"}
      `}>

        <Transporter name="caseStudy1" show={route !== 'work'}>
          <div className="peek-case-study peek-case-study1" />
        </Transporter>

        <Transporter name="caseStudy2" show={route !== 'work'}>
          <div className="peek-case-study peek-case-study2" />
        </Transporter>

        <Transporter name="caseStudy3" show={route !== 'work'}>
          <div className="peek-case-study peek-case-study3" />
        </Transporter>

        <Transporter name="caseStudy4" show={route !== 'work'}>
          <div className="peek-case-study peek-case-study4" />
        </Transporter>

      </div>
    )
  }
}

export default Peek;
