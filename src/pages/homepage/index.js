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
        <Hero
          heroText
          className="homepage-hero"
          headline={<>We're doing impact <span className="headline-emphasis">differently</span></>}
          subhead="Little Universe is a digital product design and development agency located in Brooklyn, NY."
        />
      </>
    )
  }
}

export default Homepage;
