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
import { Transporter } from '../../orbit'
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

class Votecrew extends Component {
  state = {
    hovered: undefined,
    route: 'votecrew'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
      <Transporter name="caseStudy4" show={true} duration={500} properties={[]}>
        <div style={{ width: '100%', minHeight: '1vh' }}>
          <Hero className="project-hero votecrew-hero"/>
        </div>
      </Transporter>
        <Fade bottom distance="30px" duration={500}>
            <WorkTextOpener list={["Digital Product", "UX/UI", "Front End", "Back End"]} paragraph="Vote Crew is a team-based advocacy platform used by political campaigns to raise awareness about voting. Through Vote Crew organizations can target specific groups of individuals by affiliation, whether it be through schools, campus clubs, or extra-curricular activity."/>
            <WorkBigImage bgImage={require("../../assets/projects/votecrew/votecrew-1.png")} className="workImage"/>
            <WorkTextCentered title="Dashboard, Leaderboard, Across The Board" paragraph="We worked closely with Vote Crew, on a tight timeline, to prioritize and structure core functionality and product elements. We landed on a dashboard and leaderboard context which showed users a feed of activity in their affiliatedd groups. We did design and development across the board."/>
            <WorkImageLeft image={require("../../assets/projects/votecrew/votecrew-2.png")} headline="Voting Is A Conversation" description="One of the principle ideas with the Vote Crew dashboard was to incentivize use through engaging people across action types. Even small actions were included in a news feed, visible by all members of the group, alongside larger actions."/>
            <WorkImageRight image={require("../../assets/projects/votecrew/votecrew-3.png")} headline="Leaderboard Metrics" description="Typically a leaderboard is organized as a function of points, but with Vote Crew the leaderboard was organized based on actions taken by the users. Rather than abstracting behavior into points, this context called for a more direct approach. "/>
            <WorkTextCentered title="Including Guidance" paragraph="For young voters some of the primary uncertainty in voting comes from not knowing who is on the ballot, what their policies are, and how to make a decision about them. We included a ballot guide for upcoming elections that users could look through and use to make conclusions about which candidates they liked."/>
            <WorkBigImage bgImage={require("../../assets/projects/votecrew/votecrew-4.png")} className="workImage"/>
            <Grid className={`work-next-project`} container justify="center" alignItems="center">
              <Transporter name="caseStudy5" show={true} duration={500} properties={[]} unstableOnUnmount noTransition>
                <WorkNextProject image={require("../../assets/projects/farmigo/farmigo-hero.png")} className="next-farmigo" projectName="Farmigo" projectType="Digital Product" projectIndustry="Food" destination="../farmigo"/>
              </Transporter>
            </Grid>
          <WorkTogether headline="Let's get to know each other"/>
          </Fade>
      </>
    )
  }
}

export default Votecrew;
