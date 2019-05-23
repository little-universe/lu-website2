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
          <Hero bgImage={require("../../assets/projects/votecrew/votecrew-hero.png")} className="project-hero votecrew-hero"/>
        </div>
      </Transporter>
        <Fade bottom distance="30px" duration={500}>
            <WorkTextOpener list={["Digital Product", "UX/UI", "Front End", "Back End"]} paragraph="Strive Digital is a service for business owners to get educated on small business lending and navigate commercial products with confidence. They provide transparency into lending through data analytics to help owners secure business financing they understand."/>
            <WorkBigImage bgImage={require("../../assets/projects/votecrew/votecrew-1.png")} className="workImage"/>
            <WorkTextCentered title="Building Trust" paragraph="Betterfin had built complex tech. They were frustrated that it was not packaged into a product that could build trust with their customers, satisfy their investors, and - of course - make their team proud. We worked closely with them to create a powerful, clean and polished product."/>
            <WorkImageLeft image={require("../../assets/projects/votecrew/votecrew-2.png")} headline="Voting Is A Conversation" description="One of the principle ideas with the Vote Crew dashboard was to incentivize use through engaging people across action types. Even small actions were included in a news feed, visible by all members of the group, alongside larger actions."/>
            <WorkTextQuote author="Eric G., Betterfin CEO" paragraph="Little Universe is an absolute pleasure to work with. Every time I threw a challenge a them, they came back with an opportunity and a plan to execute."/>
            <WorkImageRight image={require("../../assets/projects/votecrew/votecrew-3.png")} headline="Leaderboard Metrics" description="Typically a leaderboard is organized as a function of points, but with Vote Crew the leaderboard was organized based on actions taken by the users. Rather than abstracting behavior into points, this context called for a more direct approach. "/>
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
