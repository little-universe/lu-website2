import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedText from '../../components/FeaturedText';
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
        <FeaturedText textForProjectLeft className="zach-member" projectType="Digital Product" projectTitle="Motivote" text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible—they need custom solutions that don't break the bank." dominantColor="lightBlue" ctaLabel="Motivote"/>
        <FeaturedText textForProjectRight className="zach-member" projectType="Digital Product" projectTitle="Strive Digital" text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible—they need custom solutions that don't break the bank." dominantColor="pink" ctaLabel="Strive Digital"/>
        <FeaturedText textForProjectLeft className="zach-member" projectType="Digital Product" projectTitle="Betterfin" text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible—they need custom solutions that don't break the bank." dominantColor="yellow" ctaLabel="Betterfin"/>
        <FeaturedText textForProjectRight className="zach-member" projectType="Digital Product" projectTitle="Vote Crew" text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible—they need custom solutions that don't break the bank." dominantColor="darkBlue" ctaLabel="Vote Crew"/>
        <FeaturedText textForProjectLeft className="zach-member" projectType="Digital Product" projectTitle="Farmigo" text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible—they need custom solutions that don't break the bank." dominantColor="pink" ctaLabel="Farmigo"/>
        <FeaturedText textForProjectRight className="zach-member" projectType="Digital Product" projectTitle="Instructrr" text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible—they need custom solutions that don't break the bank." dominantColor="lightBlue" ctaLabel="Instructrr"/>
        <WorkTogether headline="Let's get to know each other"/>
        <Footer/>
      </>
    )
  }
}

export default Work;
