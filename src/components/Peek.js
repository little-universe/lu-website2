import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Transporter } from '../orbit'

class Peek extends Component {
  state = {
  }

  render() {
    const { peekPage, location } = this.props;
    console.warn(this.props);
    const route = location.pathname;
    const peekedWork = peekPage == "work" && !['/work'].includes(route)

    return (
      <div className={`peek
        ${peekedWork && "peek-work"}
      `}>
      {route !== 'work' && <>
        <Transporter name="caseStudy1" properties={['opacity']} show={peekedWork} duration={300}>
          <div className="peek-case-study peek-case-study1 peeked"></div>
        </Transporter>
        <Transporter name="caseStudy1" properties={['opacity']} show={!peekedWork && route !== 'strive'} duration={300}>
          <div className="peek-case-study peek-case-study1 unpeeked"></div>
        </Transporter>

        <Transporter name="caseStudy2" properties={['opacity']} show={peekedWork} duration={300}>
          <div className="peek-case-study peek-case-study2 peeked" />
        </Transporter>
        <Transporter name="caseStudy2" properties={['opacity']} show={!peekedWork} duration={300}>
          <div className="peek-case-study peek-case-study2 unpeeked" />
        </Transporter>

        <Transporter name="caseStudy3" properties={['opacity']} show={peekedWork} duration={300}>
          <div className="peek-case-study peek-case-study3 peeked" />
        </Transporter>
        <Transporter name="caseStudy3" properties={['opacity']} show={!peekedWork} duration={300}>
          <div className="peek-case-study peek-case-study3 unpeeked" />
        </Transporter>

        <Transporter name="caseStudy4" properties={['opacity']} show={peekedWork} duration={300}>
          <div className="peek-case-study peek-case-study4 peeked" />
        </Transporter>
        <Transporter name="caseStudy4" properties={['opacity']} show={!peekedWork} duration={300}>
          <div className="peek-case-study peek-case-study4 unpeeked" />
        </Transporter>
        </>}
      </div>
    )
  }
}

export default Peek;
