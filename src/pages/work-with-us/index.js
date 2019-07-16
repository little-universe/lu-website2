import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import FeaturedText from '../../components/FeaturedText';
import { Transporter } from '../../orbit';
import Fade from 'react-reveal/Fade';
import Footer from '../../components/Footer';
import { preloadImage } from '../../preload'

class WorkWithUs extends Component {
  state = {
    hovered: undefined,
    route: 'betterfin'
  }

  componentDidMount() {
    [
    ].forEach(preloadImage)
  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <WorkTogether className="work-together-page" headline="Let's Work Together" fullHeight/>
        <Footer/>
      </>
    )
  }
}

export default WorkWithUs;
