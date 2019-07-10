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

class Votecrew extends Component {
  state = {
    hovered: undefined,
    route: 'votecrew'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
      <Transporter name="caseStudyVotecrew" show={true} duration={500} properties={[]}>
        <Hero heroImage className="votecrew-hero" projectName="Vote Crew" projectCategory="Digital Product" projectIndustry="Advocacy Tech"/>
      </Transporter>
        <Fade bottom distance="30px" duration={500}>
            <FeaturedText textWithList list={["Digital Product", "UX/UI", "Front End", "Back End"]} text="Vote Crew is a team-based advocacy platform used by political campaigns to raise awareness about voting. Through Vote Crew organizations can target specific groups of individuals by affiliation, whether it be through schools, campus clubs, or extra-curricular activity." linkTo="https://votecrew.org/" linkName="Visit live site" status="Complete"/>
            <FeaturedImage featuredFullMatte className="votecrew-1"/>
            <FeaturedText textWithHeader header="Dashboard, Leaderboard, Across The Board" text="We worked closely with Vote Crew, on a tight timeline, to prioritize and structure core functionality and product elements. We landed on a dashboard and leaderboard context which showed users a feed of activity in their affiliatedd groups. We did design and development across the board."/>
            {/*<ImageWithText imageLeft imageMatte className="votecrew-2" headline="Voting Is A Conversation" description="One of the principle ideas with the Vote Crew dashboard was to incentivize use through engaging people across action types. Even small actions were included in a news feed, visible by all members of the group, alongside larger actions."/>*/}
            {/*<ImageWithText imageRight imageMatte className="votecrew-3" headline="Leaderboard Metrics" description="Typically a leaderboard is organized as a function of points, but with Vote Crew the leaderboard was organized based on actions taken by the users. Rather than abstracting behavior into points, this context called for a more direct approach."/>*/}
            <FeaturedText textWithHeader header="Including Guidance" text="For young voters some of the primary uncertainty in voting comes from not knowing who is on the ballot, what their policies are, and how to make a decision about them. We included a ballot guide for upcoming elections that users could look through and use to make conclusions about which candidates they liked."/>
            <FeaturedImage featuredFullMatte className="votecrew-4"/>
            <FeaturedImage featuredCenter className="farmigo-next" projectName="Farmigo" projectCategory="Digital Product" projectIndustry="Food" destination="../farmigo" caseStudyName="caseStudyFarmigo"/>
          <WorkTogether headline="Let's get to know each other"/>
          </Fade>
          <Footer/>
      </>
    )
  }
}

export default Votecrew;
