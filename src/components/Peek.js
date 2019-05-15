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

    return (
      <div className={`peek
        ${peekedWork && "peek-work"}
      `}>
      {route !== 'work' && <>
        <Transporter name="caseStudy1" properties={['opacity']} show={peekedWork} duration={300}>
          <div className="peek-case-study peek-case-study1 peeked">
            <Grid container alignItems="flex-end">
              <Grid item md={12} xs={12}>
                This
              </Grid>
            </Grid>
          </div>
        </Transporter>
        <Transporter name="caseStudy1" properties={['opacity']} show={!peekedWork} duration={300}>
          <div className="peek-case-study peek-case-study1 unpeeked">
          <Grid container alignItems="flex-end">
            <Grid item md={12} xs={12}>
              This
            </Grid>
          </Grid>
          </div>
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
        </>}
      </div>
    )
  }
}

export default Peek;
