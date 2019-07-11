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
        <FeaturedText textForProjectLeft destination="/motivote" className="motivote-project" projectType="Digital Product" projectTitle="Motivote" text="Motivote is a digital platform built by a former student organizer and non-voter which gets millenials to vote by offering incentives. By creating a seamless digital experience on a product which can be whitelabeled to fit partnership goals, we bridge the gap between intention and action for young voters." dominantColor="lightBlue" ctaLabel="Motivote"/>
        <FeaturedText textForProjectRight destination="/strive" className="strive-project" projectType="Digital Product" projectTitle="Strive Digital" text="Strive is a multi-channel messaging platform used by nonprofits and campaigns across the country to recruit and activate their supporters." dominantColor="pink" ctaLabel="Strive Digital"/>
        <FeaturedText textForProjectLeft destination="/betterfin" className="betterfin-project" projectType="Digital Product" projectTitle="Betterfin" text="Betterfin is a service for business owners to get educated on small business lending and navigate commercial products with confidence. They provide transparency into lending through data analytics to help owners secure business financing they understand." dominantColor="yellow" ctaLabel="Betterfin"/>
        <FeaturedText textForProjectRight destination="/votecrew" className="votecrew-project" projectType="Digital Product" projectTitle="Vote Crew" text="Vote Crew is a team-based advocacy platform used by political campaigns to raise awareness about voting. Through Vote Crew organizations can target specific groups of individuals by affiliation, whether it be through schools, campus clubs, or extra-curricular activity." dominantColor="darkBlue" ctaLabel="Vote Crew"/>
        <FeaturedText textForProjectLeft destination="/farmigo" className="farmigo-project" projectType="Digital Product" projectTitle="Farmigo" text="Farmigo is an ecommerce marketplace for farm fresh food which targets urban communities who othewise may not have access to goods of a high quality. Through a web application, several mobile applications, and an on-the-ground coordination of pick up points, Farmigo supplies food and community to urban contexts." dominantColor="pink" ctaLabel="Farmigo"/>
        <FeaturedText textForProjectRight destination="/instructrr" className="instructrr-project" projectType="Digital Product" projectTitle="Instructrr" text="Instructrr is a workout building and queueing tool for spin instructors. Fitness instructors often have to juggle a number of roles including DJ, coach, and choreographer. Instructrr takes the demands of these roles and offers a fix-all tool to busy fitness professionals." dominantColor="lightBlue" ctaLabel="Instructrr"/>
        <WorkTogether headline="Let's Work Together"/>
        <Footer/>
      </>
    )
  }
}

export default Work;
