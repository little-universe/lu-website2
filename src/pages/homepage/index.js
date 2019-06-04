import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Logo from '../../components/Logo';
import Hero from '../../components/Hero';
import FeaturedText from '../../components/FeaturedText';
import Fade from 'react-reveal/Fade';
import Grid from '@material-ui/core/Grid';


class Homepage extends Component {

  render() {

    return (
      <>
      <div className="hero-homepage-text">
      <Grid container>
      <Grid item md={6} xs={12} className="text-container">
      <Fade bottom distance="10px" duration={1000} delay={250}>
      <p>We build digital products and real trust with ambitious organizations.</p>
      </Fade>
      </Grid>
      </Grid>
      </div>
      </>
    )
  }
}

export default Homepage;
