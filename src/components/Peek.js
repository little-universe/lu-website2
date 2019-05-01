import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
      {route !== 'work' && <>
        <Transporter name="caseStudy1" show={peekedWork}>
          <div className="peek-case-study peek-case-study1 peeked"></div>
        </Transporter>
        <Transporter name="caseStudy1" show={!peekedWork}>
          <div className="peek-case-study peek-case-study1 unpeeked"></div>
        </Transporter>

        <Transporter name="caseStudy2" show={peekedWork}>
          <div className="peek-case-study peek-case-study2 peeked" />
        </Transporter>
        <Transporter name="caseStudy2" show={!peekedWork}>
          <div className="peek-case-study peek-case-study2 unpeeked" />
        </Transporter>

        <Transporter name="caseStudy3" show={peekedWork}>
          <div className="peek-case-study peek-case-study3 peeked" />
        </Transporter>
        <Transporter name="caseStudy3" show={!peekedWork}>
          <div className="peek-case-study peek-case-study3 unpeeked" />
        </Transporter>

        <Transporter name="caseStudy4" show={peekedWork}>
          <div className="peek-case-study peek-case-study4 peeked" />
        </Transporter>
        <Transporter name="caseStudy4" show={!peekedWork}>
          <div className="peek-case-study peek-case-study4 unpeeked" />
        </Transporter>
        </>}
      </div>
    )
  }
}

export default Peek;
