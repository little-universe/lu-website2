import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import Footer from '../../components/Footer';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Transporter } from '../../orbit'
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import { preloadImage } from '../../preload'

class Work extends Component {
  state = {
    hovered: undefined,
    route: 'work'

  }
  componentDidMount() {
    [
      require("../../assets/projects/strive/strive-hero.png"),
      require("../../assets/projects/motivote/motivote-hero.png")
    ].forEach(preloadImage)
  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Hero
          heroText
          secondaryHero
          className="work-hero"
          headline={<>We make a <span className="headline-emphasis">difference</span> for our clients.</>}
          subhead="We build trust to deliver impactful results."
        />
        <WorkTogether headline="Let's get to know each other"/>
        <Footer/>
      </>
    )
  }
}

export default Work;
