import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Transporter } from '../orbit'

class Peek extends Component {
  state = {
  }

  render() {
    const { peekPage, location } = this.props;
    const route = location.pathname;
    const peekedWork = peekPage == "work" && !['/work'].includes(route)
    const peekedAbout = peekPage == "about" && !['/about'].includes(route)
    const peekedApproach = peekPage == "approach" && !['/approach'].includes(route)

    return (
      <>
      <div className={`peek
        ${peekedWork && "peek-work"}
      `}>
      {route !== 'work' && <>
        <Transporter name="caseStudyStrive" properties={['opacity', 'margin']} show={peekedWork} duration={250}>
          <div className="peek-case-study peek-case-study1 peeked">
          <img src={require("../assets/projects/strive/strive-hero.png")}/>
          </div>
        </Transporter>
        <Transporter name="caseStudyStrive" properties={['opacity', 'margin']} show={!peekedWork && !['/work'].includes(route)} duration={250}>
          <div className="peek-case-study peek-case-study1 unpeeked">
          </div>
        </Transporter>

        <Transporter name="caseStudyMotivote" properties={['opacity']} show={peekedWork} duration={100}>
          <div className="peek-case-study peek-case-study2 peeked">
          <img src={require("../assets/projects/motivote/motivote-hero.png")}/>
          </div>
        </Transporter>
        <Transporter name="caseStudyMotivote" properties={['opacity']} show={!peekedWork && !['/work'].includes(route)} duration={100}>
          <div className="peek-case-study peek-case-study2 unpeeked" />
        </Transporter>

        <Transporter name="caseStudyBetterfin" properties={['opacity']} show={peekedWork} duration={150}>
          <div className="peek-case-study peek-case-study3 peeked">
          <img src={require("../assets/projects/betterfin/betterfin-hero.png")}/>
          </div>
        </Transporter>
        <Transporter name="caseStudyBetterfin" properties={['opacity']} show={!peekedWork && !['/work'].includes(route)} duration={150}>
          <div className="peek-case-study peek-case-study3 unpeeked" />
        </Transporter>
        </>}
      </div>
      <div className={`peek
        ${peekedAbout && "peek-about"}
      `}>
      {route !== 'about' && <>
        <Transporter name="member-team" properties={['opacity', 'margin']} show={peekedAbout} duration={250}>
          <div className="peek-member-image peek-member-team peeked">

          </div>
        </Transporter>
        <Transporter name="member-team" properties={['opacity', 'margin']} show={!peekedAbout && !['/about'].includes(route)} duration={250}>
          <div className="peek-member-image peek-member-team unpeeked">

          </div>
        </Transporter>

        </>}
      </div>
      <div className={`peek
        ${peekedApproach && "peek-approach"}
      `}>
      {route !== 'approach' && <>
        <Transporter name="approach1" properties={['opacity', 'margin']} show={peekedApproach} duration={250}>
          <div className="peek-approach-image peek-approach-1 peeked"></div>
        </Transporter>
        <Transporter name="approach1" properties={['opacity', 'margin']} show={!peekedApproach && !['/approach'].includes(route)} duration={250}>
          <div className="peek-approach-image peek-approach-1 unpeeked"></div>
        </Transporter>
        </>}
      </div>
      </>
    )
  }
}

export default Peek;
