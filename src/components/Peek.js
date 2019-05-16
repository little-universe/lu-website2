import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
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
    const peekedAbout = peekPage == "about" && !['/about'].includes(route)
    const peekedApproach = peekPage == "approach" && !['/approach'].includes(route)

    return (
      <>
      <div className={`peek
        ${peekedWork && "peek-work"}
      `}>
      {route !== 'work' && <>
        <Transporter name="caseStudy1" properties={['opacity', 'margin']} show={peekedWork} duration={250}>
          <div className="peek-case-study peek-case-study1 peeked">
          </div>
        </Transporter>
        <Transporter name="caseStudy1" properties={['opacity', 'margin']} show={!peekedWork} duration={250}>
          <div className="peek-case-study peek-case-study1 unpeeked">
          </div>
        </Transporter>

        <Transporter name="caseStudy2" properties={['opacity']} show={peekedWork} duration={100}>
          <div className="peek-case-study peek-case-study2 peeked" />
        </Transporter>
        <Transporter name="caseStudy2" properties={['opacity']} show={!peekedWork} duration={100}>
          <div className="peek-case-study peek-case-study2 unpeeked" />
        </Transporter>

        <Transporter name="caseStudy3" properties={['opacity']} show={peekedWork} duration={150}>
          <div className="peek-case-study peek-case-study3 peeked" />
        </Transporter>
        <Transporter name="caseStudy3" properties={['opacity']} show={!peekedWork} duration={150}>
          <div className="peek-case-study peek-case-study3 unpeeked" />
        </Transporter>
        </>}
      </div>
      <div className={`peek
        ${peekedAbout && "peek-about"}
      `}>
      {route !== 'about' && <>
        <Transporter name="member-zach" properties={['opacity']} show={peekedAbout} duration={250}>
          <div className="peek-member-image peek-member-zach peeked">
            <img src={require("../assets/team/1.jpg")} />
          </div>
        </Transporter>
        <Transporter name="member-zach" properties={['opacity']} show={!peekedAbout} duration={250}>
          <div className="peek-member-image peek-member-zach unpeeked">
            <img src={require("../assets/team/1.jpg")} />
          </div>
        </Transporter>

        <Transporter name="member-adrian" properties={['opacity']} show={peekedAbout} duration={100}>
          <div className="peek-member-image peek-member-adrian peeked">
            <img src={require("../assets/team/2.jpg")} />
          </div>
        </Transporter>
        <Transporter name="member-adrian" properties={['opacity']} show={!peekedAbout} duration={100}>
          <div className="peek-member-image peek-member-adrian unpeeked">
            <img src={require("../assets/team/2.jpg")}/>
          </div>
        </Transporter>

        <Transporter name="member-alana" properties={['opacity']} show={peekedAbout} duration={150}>
          <div className="peek-member-image peek-member-alana peeked">
            <img src={require("../assets/team/3.jpg")}/>
          </div>
        </Transporter>
        <Transporter name="member-alana" properties={['opacity']} show={!peekedAbout} duration={150}>
          <div className="peek-member-image peek-member-alana unpeeked">
            <img src={require("../assets/team/3.jpg")}/>
          </div>
        </Transporter>
        <Transporter name="member-eugene" properties={['opacity']} show={peekedAbout} duration={150}>
          <div className="peek-member-image peek-member-eugene peeked">
          <img src={require("../assets/team/4.jpg")}/>
          </div>
        </Transporter>
        <Transporter name="member-eugene" properties={['opacity']} show={!peekedAbout} duration={150}>
          <div className="peek-member-image peek-member-eugene unpeeked">
          <img src={require("../assets/team/4.jpg")}/>
          </div>
        </Transporter>
        <Transporter name="member-taylor" properties={['opacity']} show={peekedAbout} duration={150}>
          <div className="peek-member-image peek-member-taylor peeked">
          <img src={require("../assets/team/5.jpg")}/>
          </div>
        </Transporter>
        <Transporter name="member-taylor" properties={['opacity']} show={!peekedAbout} duration={150}>
          <div className="peek-member-image peek-member-taylor unpeeked">
          <img src={require("../assets/team/5.jpg")}/>
          </div>
        </Transporter>
        </>}
      </div>
      <div className={`peek
        ${peekedApproach && "peek-approach"}
      `}>
      {route !== 'approach' && <>
        <Transporter name="value-1" properties={['opacity']} show={peekedApproach} duration={250}>
          <div className="peek-approach-value peek-value-1 peeked">
          </div>
        </Transporter>
        <Transporter name="value-1" properties={['opacity']} show={!peekedApproach} duration={250}>
          <div className="peek-approach-value peek-value-1 unpeeked">
          </div>
        </Transporter>

        <Transporter name="value-2" properties={['opacity']} show={peekedApproach} duration={100}>
          <div className="peek-approach-value peek-value-2 peeked" />
        </Transporter>
        <Transporter name="value-2" properties={['opacity']} show={!peekedApproach} duration={100}>
          <div className="peek-approach-value peek-value-2 unpeeked" />
        </Transporter>

        <Transporter name="value-3" properties={['opacity']} show={peekedApproach} duration={150}>
          <div className="peek-approach-value peek-value-3 peeked" />
        </Transporter>
        <Transporter name="value-3" properties={['opacity']} show={!peekedApproach} duration={150}>
          <div className="peek-approach-value peek-value-3 unpeeked" />
        </Transporter>
        <Transporter name="value-4" properties={['opacity']} show={peekedApproach} duration={150}>
          <div className="peek-approach-value peek-value-4 peeked" />
        </Transporter>
        <Transporter name="value-4" properties={['opacity']} show={!peekedApproach} duration={150}>
          <div className="peek-approach-value peek-value-4 unpeeked" />
        </Transporter>
        </>}
      </div>
      </>
    )
  }
}

export default Peek;
