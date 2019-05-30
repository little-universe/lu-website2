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
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
class Motivote extends Component {
  state = {
    hovered: undefined,
    route: 'motivote'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Transporter name="caseStudyMotivote" show={true} duration={500} properties={[]}>
          <div style={{ width: '100%', minHeight: '1vh' }}>
            <Hero className="project-hero motivote-hero"/>
          </div>
        </Transporter>
        <Fade bottom distance="30px" duration={500}>
          <WorkTextOpener list={["Digital Product", "UX/UI", "Branding", "Strategy", "Front End", "Back End"]} paragraph="Motivote is a digital platform built by a former student organizer and non-voter which gets millenials to vote by offering incentives. By creating a seamless digital experience on a product which could be whitelabeled to fit partnership goals, we bridge the gap between intention and action for young voters."/>
          <FeaturedImage featuredFullMatte className="motivote-4"/>
          <WorkTextCentered title="Fleshing Out A Strong Idea" paragraph="Motivote came to us with a great MVP and a solid conceptual understanding of what they needed their product to do. We worked very closely with the founders in order to turn ideas into actionable tasks, developing a brand guide, UX and UI, and implementing all the front end and back end code."/>
          <ImageWithText imageLeft imageMatte className="motivote-1"  headline="Sign Up and Win Cool Stuff" description="Motivote's gamified model is immediately surfaced to the end user as a primary element of the app. At the sign up page the user is greeted with a punchy, illustrated, call to action."/>
          <WorkTextQuote author="Jess Riegel, Motivote CEO" paragraph="Little Universe is an amazing team that perfectly balances execution with process. I'd hire them again in a minute to design and build anything."/>
          <ImageWithText imageRight imageMatte className="motivote-2"  headline="Inaction to Action Dashboard" description="We build a robust, whitelabel-able dashboard integrating gamification, leaderboards, voting resources, into executable action lists for users. Users can see what they need to do to make an impact through voting all in one place."/>
          <WorkTextCentered title="Making A Good First Impression" paragraph="We were aware that while working on Motivote's product they were in the midst of fundraising, which meant pitch decks. We designed a deck in close collaboration with Jess, Motivote's CEO, in order to make sure visual design and layout of her deck was slick and covered all the bases."/>
          <FeaturedImage featuredFullMatte className="motivote-5"/>

            <Transporter name="caseStudyBetterfin" show={true} duration={500} properties={[]} unstableOnUnmount noTransition>
            <FeaturedImage featuredCenter className="betterfin-next" projectName="Betterfin" projectCategory="Digital Product" projectIndustry="Fintech" destination="../betterfin"/>
            </Transporter>

        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default Motivote;
