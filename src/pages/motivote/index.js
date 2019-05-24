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
class Motivote extends Component {
  state = {
    hovered: undefined,
    route: 'motivote'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Transporter name="caseStudy3" show={true} duration={500} properties={[]}>
          <div style={{ width: '100%', minHeight: '1vh' }}>
            <Hero className="project-hero motivote-hero"/>
          </div>
        </Transporter>
        <Fade bottom distance="30px" duration={500}>
          <WorkTextOpener list={["Digital Product", "UX/UI", "Branding", "Strategy", "Front End", "Back End"]} paragraph="Motivote is a digital platform built by a former student organizer and non-voter which gets millenials to vote by offering incentives. By creating a seamless digital experience on a product which could be whitelabeled to fit partnership goals, we bridge the gap between intention and action for young voters."/>
          <WorkBigImage bgImage={require("../../assets/projects/motivote/motivote-4.png")} className="workImage"/>
          <WorkTextCentered title="Building Trust" paragraph="Betterfin had built complex tech. They were frustrated that it was not packaged into a product that could build trust with their customers, satisfy their investors, and - of course - make their team proud. We worked closely with them to create a powerful, clean and polished product."/>
          <WorkImageLeft image={require("../../assets/projects/motivote/motivote-1.png")} headline="Sign Up and Win Cool Stuff" description="Motivote's gamified model is immediately surfaced to the end user as a primary element of the app. At the sign up page the user is greeted with a punchy, illustrated, call to action. "/>
          <WorkTextQuote author="Jess Riegel, Motivote CEO" paragraph="Little Universe is an amazing team that perfectly balances execution with process. I'd hire them again in a minute to design and build anything."/>
          <WorkImageRight image={require("../../assets/projects/motivote/motivote-2.png")} headline="Inaction to Action Dashboard" description="We build a robust, whitelabel-able dashboard integrating gamification, leaderboards, voting resources, into executable action lists for users. Users can see what they need to do to make an impact through voting all in one place."/>
          <WorkTextCentered title="Making A Good First Impression" paragraph="We were aware that while working on Motivote's product they were in the midst of fundraising, which meant pitch decks. We designed a deck in close collaboration with Jess, Motivote's CEO, in order to make sure visual design and layout of her deck was slick and covered all the bases."/>
          <WorkBigImage bgImage={require("../../assets/projects/motivote/motivote-5.png")} className="workImage"/>
          <Grid className={`work-next-project`} container justify="center" alignItems="center">
            <Transporter name="caseStudy4" show={true} duration={500} properties={[]} unstableOnUnmount noTransition>
              <WorkNextProject image={require("../../assets/projects/votecrew/votecrew-hero.png")} className="next-votecrew" projectName="Vote Crew" projectType="Digital Product" projectIndustry="Advocacy Tech" destination="../votecrew"/>
            </Transporter>
          </Grid>
        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default Motivote;
