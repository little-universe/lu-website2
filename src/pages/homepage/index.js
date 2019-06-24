import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Logo from '../../components/Logo';
import Hero from '../../components/Hero';
import MotifAnimation from '../../components/MotifAnimation';
import FeaturedText from '../../components/FeaturedText';
import Fade from 'react-reveal/Fade';
import Grid from '@material-ui/core/Grid';


class Homepage extends Component {

  render() {

    return (
      <>
        <Hero
          heroText
          featuredWorks
          className="homepage-hero"
          headline={<>We're doing impact <span className="headline-emphasis">differently</span></>}
          subhead="Little Universe is a digital product design and development agency located in Brooklyn, NY."
        />
        <Grid container className="team-motif">
          <Grid item md={6}>
            <MotifAnimation gravityAnimation/>
          </Grid>
        </Grid>
        <Grid container className="team-motif">
          <Grid item md={6} />
          <Grid item md={6}>
            <MotifAnimation orbitAnimation/>
          </Grid>
        </Grid>
        <Grid container className="callout-statement" alignItems="center">
          <Grid item xs={12} md={8}>
            <div className="callout-text">
              Movements needs fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible. They need custom solutions that don't break the bank.
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="callout-cta">
              <button>Meet Our Team</button>
            </div>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default Homepage;
