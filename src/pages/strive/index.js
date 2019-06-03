import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import FeaturedText from '../../components/FeaturedText';
import ImageWithText from '../../components/ImageWithText';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Transporter } from '../../orbit'
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
class Strive extends Component {
  state = {
    hovered: undefined,
    route: 'strive'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
      <Transporter name="caseStudyStrive" show={true} duration={500} properties={[]}>
        <Hero heroImage className="strive-hero" projectName="Strive Digital" projectCategory="Digital Product" projectIndustry="Advocacy Tech"/>
      </Transporter>
      <Fade bottom distance="30px" duration={500}>
          <FeaturedText textWithList list={["Digital Product", "UX/UI", "Front End", "Back End", "Data Architecture"]} text="Strive is multi-channel messaging platform used by nonprofits and campaigns across the country to recruit and activate their supporters." linkTo="https://www.strivedigital.org/" linkName="Visit live site" status="Ongoing Partnership"/>
          <FeaturedImage featuredFullMatte className="strive-1"/>
          <FeaturedText textWithHeader header="Partnership & Progress" text="Our process with Strive fostered a deeper strategic partnership between our two teams, where growth and product enjoyed a shared interest in success and creative problem solving."/>
          <ImageWithText imageLeft imageMatte className="strive-4" headline="Powerful Messaging Tools" description="We built a call and text tool which enabled organizers to send messages to huge audiences, getting their outreach done on a channel with increasing engagement potential."/>
          <FeaturedText textWithList list={["Jedd Countey", "Strive Founder"] } text="Little Universe was a game-changer for Strive Digital. As a young startup, we needed an agency that could step in and make an immediate impact. Perfectly balancing strategy with execution, they went far beyond our expectations by establishing a strategic foundation and product vision we're still benefitting from today."/>
          <ImageWithText imageRight imageMatte className="strive-2" headline="Multi Channel" description="Strive allowed users to Design and develop custom messaging capabilities optimized for their needs, including powerful machine learning, platform extensions, and deep integrations with a CRM."/>
          <FeaturedImage featuredFullMatte className="strive-3"/>
          <FeaturedImage featuredCenter className="motivote-next" projectName="Motivote" projectCategory="Digital Product" projectIndustry="Advocacy Tech" destination="../motivote" caseStudyName="caseStudyMotivote"/>
        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default Strive;
