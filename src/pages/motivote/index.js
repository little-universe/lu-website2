import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import FeaturedText from '../../components/FeaturedText';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Transporter } from '../../orbit'
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import Footer from '../../components/Footer';

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
          <Hero heroImage className="motivote-hero" projectName="Motivote" projectCategory="Digital Product" projectIndustry="Advocacy Tech"/>
        </Transporter>
        <FeaturedText textWithCardRight className="" status="We collaborated with the Motivote team to build their MVP product" list={["Digital Product", "UX/UI", "Branding", "Strategy", "Front End Development", "Back End Development"]} projectType="Advocacy" projectTitle="Motivote" text="Motivote is a digital platform built by a former student organizer and non-voter which gets millenials to vote by offering incentives. By creating a seamless digital experience on a product which can be whitelabeled to fit partnership goals, we bridge the gap between intention and action for young voters." dominantColor="lightGrey" ctaLabel="Strive Digital"/>
        <FeaturedImage featuredFullMatte className="motivote-4"/>
        <FeaturedText textWithHeader header="Fleshing Out A Strong Idea" text="Motivote came to us with a great MVP and a solid conceptual understanding of what they needed their product to do. We worked very closely with the founders in order to turn ideas into actionable tasks, developing a brand guide, UX and UI, and implementing all the front end and back end code."/>
        <FeaturedText textForProductImageLeft className="motivote-1" header="Sign Up and Win Cool Stuff" text="Motivote's gamified model is immediately surfaced to the end user as a primary element of the app. At the sign up page the user is greeted with a punchy, illustrated, call to action." dominantColor="lightGreen"/>
        <FeaturedText textWithHeader header="Jess Riegel, Motivote CEO" text="Little Universe is an amazing team that perfectly balances execution with process. I'd hire them again in a minute to design and build anything."/>
        <FeaturedText textForProductImageRight className="motivote-2" header="Inaction to Action Dashboard" text="We built a robust, whitelabel-able dashboard integrating gamification, leaderboards, and voting resources, into executable action lists for users. Users can see what they need to do to make an impact through voting all in one place." dominantColor="darkBlue"/>

        <FeaturedText textWithHeader header="Making A Good First Impression" text="We were aware that while working on Motivote's product they were in the midst of fundraising, which meant pitch decks. We designed a deck in close collaboration with Jess, Motivote's CEO, in order to make sure visual design and layout of her deck was slick and covered all the bases."/>
        <FeaturedImage featuredFullMatte className="motivote-5"/>
        <FeaturedImage featuredCenter className="strive-next" projectName="Strive Digital" projectCategory="Digital Product" projectIndustry="Advocacy" destination="../strive" caseStudyName="caseStudyStrive"/>

        <WorkTogether headline="Let's Work Together"/>
        <Footer/>
      </>
    )
  }
}

export default Motivote;
