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

      <TransitionGroup>
        <Transporter name="caseStudy1" show={peekedWork}>
          <CSSTransition in={peekPage == "work"} timeout={30} classNames="peek-case-study">
            <div className="peek-case-study peek-case-study1"></div>
          </CSSTransition>
        </Transporter>

        <Transporter name="caseStudy2" show={peekedWork}>
          <CSSTransition in={peekedWork} timeout={30} classNames="peek-case-study">
            <div className="peek-case-study peek-case-study2" />
          </CSSTransition>
        </Transporter>

        <Transporter name="caseStudy3" show={peekedWork}>
          <CSSTransition in={peekedWork} timeout={30} classNames="peek-case-study">
            <div className="peek-case-study peek-case-study3" />
          </CSSTransition>
        </Transporter>

        <Transporter name="caseStudy4" show={peekedWork}>
          <CSSTransition in={peekedWork} timeout={30} classNames="peek-case-study">
            <div className="peek-case-study peek-case-study4" />
          </CSSTransition>
        </Transporter>
      </TransitionGroup>
      </div>
    )
  }
}

export default Peek;
