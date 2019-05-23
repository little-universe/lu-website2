import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import WorkCard from '../../components/WorkCard';
import WorkTextOpener from '../../components/WorkTextOpener';
import WorkBigImage from '../../components/WorkBigImage';
import WorkTextCentered from '../../components/WorkTextCentered';
import WorkImageLeft from '../../components/WorkImageLeft';
import WorkImageRight from '../../components/WorkImageRight';
import WorkTextQuote from '../../components/WorkTextQuote';
import WorkTextMetric from '../../components/WorkTextMetric';
import WorkNextProject from '../../components/WorkNextProject';
import WorkTogether from '../../components/WorkTogether';
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
      <Transporter name="caseStudy2" show={true} duration={250} properties={[]}>
      <div style={{ width: '100%', minHeight: '1vh' }}>
        <Hero headline="strive" bgImage={require("../../assets/projects/strive/strive-hero.png")} className="project-hero strive-hero"/>
        </div>
      </Transporter>
      <Fade bottom distance="30px" duration={500}>
          <WorkTextOpener list={["Digital Product", "UX/UI", "Front End", "Back End", "Data Architecture"]} paragraph="Strive Digital is multi-channel messaging platform used by nonprofits and campaigns across the country to recruit and activate their supporters."/>
          <WorkBigImage bgImage={require("../../assets/projects/strive/strive-1.png")} className="workImage"/>
          <WorkTextCentered title="Partnership" paragraph="Our process with Strive fostered a deeper strategic partnership between our two teams, where growth and product enjoyed a shared interest in success and creative problem solving."/>
          <WorkImageLeft image={require("../../assets/projects/strive/strive-4.png")} headline="Powerful Messaging Tools" description="We built a call and text tool which enabled organizers to send messages to huge audiences, getting their outreach done on a channel with increasing engagement potential."/>
          <WorkTextQuote author="Jedd Countey, Strive Founder" paragraph="Little Universe was a game-changer for Strive Digital. As a young startup, we needed an agency that could step in and make an immediate impact. Perfectly balancing strategy with execution, they went far beyond our expectations by establishing a strategic foundation and product vision we're still benefitting from today."/>
          <WorkImageRight image={require("../../assets/projects/strive/strive-2.png")} headline="Multi Channel" description="Strive allowed users to Design and develop custom messaging capabilities optimized for their needs, including powerful machine learning, platform extensions, and deep integrations with a CRM."/>
          <WorkBigImage bgImage={require("../../assets/projects/strive/strive-3.png")} className="workImage"/>
          <Grid className={`work-next-project`} container justify="center" alignItems="center">
            <Transporter name="caseStudy3" show={true} duration={500} properties={[]} unstableOnUnmount noTransition>
              <WorkNextProject image={require("../../assets/projects/motivote/motivote-hero.png")} className="next-motivote" projectName="Motivote" projectType="Digital Product" projectIndustry="Advocacy Tech" destination="../motivote"/>
            </Transporter>
          </Grid>
        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default Strive;
