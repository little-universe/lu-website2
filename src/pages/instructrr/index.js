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

import FeaturedImage from '../../components/FeaturedImage';
import ImageWithText from '../../components/ImageWithText';

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Transporter } from '../../orbit'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade';

class Instructrr extends Component {
  state = {
    hovered: undefined,
    route: 'instructrr'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
      <Transporter name="caseStudyInstructrr" show={true} duration={500} properties={[]}>
        <div style={{ width: '100%', minHeight: '1vh' }}>
          <Hero className="project-hero instructrr-hero"/>
        </div>
      </Transporter>
        <Fade bottom distance="30px" duration={500}>
            <WorkTextOpener list={["Concepting","Digital Product", "UX/UI"]} paragraph="Instructrr is a workout building and queueing tool for spin instructors. Fitness instructors often have to juggle a number of roles including DJ, Hype Person, Coach, and Choreographer. Instructrr takes the demands of these roles and offers a fix-all tool to busy fitness professionals."/>
            <FeaturedImage featuredFull className="instructrr-6"/>
            <WorkTextCentered title="If You Build It, They Will Sweat" paragraph="We concepted a number of ideas which aimed to address one of the fitness instructor's primary problems: it takes very long to plan workouts even though they often follow a known arc. We worked with the core Instructrr team to develop ideas about how blocks of music and exercises could be saved, re-used, and shared."/>
            <ImageWithText imageLeft imageMatte className="instructrr-1" headline="Coordinating Song and Movement" description="A good spin class coordinates musical moments, like a beat drop, with the right amount of physical exertion. This is a coveted skill in spin instructors, and Instructrr believed it could be taught. We designed a UI that offered visualizations into musical movement and paired it with visuals indicating relative intensity of exertion."/>
            <ImageWithText imageRight imageMatte className="instructrr-2" headline="Different Views, Consistent Results" description="There are different ways of understanding music and movement, all of which is addressed by the subjective talents of the spin instructor. In an effort to lend some consistency to classes we concepted multiple UIs to convey how timing, rhythm, and pacing could be used to construct the best class."/>
            <ImageWithText imageLeft imageMatte className="instructrr-3" headline="Complexity Born From Simplicity" description="A good spin class has motion and dynamism. It takes you through a story which is both physical and sonic. With the help of the domain expertise of the Instructrr team we distilled workout construction into three simple building blocks, from which an endless variety of workouts could be constructed."/>
            <WorkTextCentered title="Active Lifestyle, Active Performance" paragraph="Beyond building workouts, which is an artform in itself, instructors need to know how to queue and sync class participants with music and exertion in a live setting. We developed concepts for a live view of the workouts to be used by instructors in a sweaty, heat-of-the-moment class setting."/>
            <FeaturedImage featuredFullMatte className="instructrr-5"/>
            <Transporter name="caseStudyStrive" show={true} duration={500} properties={[]} unstableOnUnmount noTransition>
              <FeaturedImage featuredCenter className="strive-next" projectName="Strive Digital" projectCategory="Digital Product" projectIndustry="Advocacy Tech" destination="../strive"/>
            </Transporter>

          <WorkTogether headline="Let's get to know each other"/>
          </Fade>
      </>
    )
  }
}

export default Instructrr;
