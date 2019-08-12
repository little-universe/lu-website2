import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import FeaturedText from '../../components/FeaturedText';
import Footer from '../../components/Footer';
import { preloadImage } from '../../preload'

import { Transporter } from '../../orbit';
import Fade from 'react-reveal/Fade';

class Factsheet extends Component {
  state = {
    hovered: undefined,
    route: 'factsheet'
  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Hero
          heroText
          secondaryHero
          className="about-hero"
          headline={<>You like building stuff?<span className="headline-emphasis"></span></>}
          subhead="Us too. And we've done it a few times. Get at us for some help on what you're building."
        />
        <WorkTogether headline="Let's Work Together"/>
        <Footer/>
      </>
    )
  }
}

export default Factsheet;
