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

class Betterfin extends Component {
  state = {
    hovered: undefined,
    route: 'betterfin'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
          <Transporter name="caseStudy1" show={true} duration={500} properties={[]}>
            <div style={{ width: '100%', minHeight: '1vh' }}>
              <Hero bgImage={require("../../assets/projects/betterfin/betterfin-hero.png")} className="project-hero betterfin-hero"/>
            </div>
          </Transporter>
          <Fade bottom distance="30px" duration={500}>
          <WorkTextOpener list={["Digital Product", "UX/UI", "User Testing", "Product Strategy", "Front End"]} paragraph="Betterfin is a service for business owners to get educated on small business lending and navigate commercial products with confidence. They provide transparency into lending through data analytics to help owners secure business financing they understand."/>
          <WorkBigImage bgImage={require("../../assets/projects/betterfin/betterfin-5.png")} className="workImageFill"/>
          <WorkTextCentered title="Building Trust" paragraph="Betterfin had built complex tech. They were frustrated that it was not packaged into a product that could build trust with their customers, satisfy their investors, and - of course - make their team proud. We worked closely with them to create a powerful, clean and polished product."/>
          <WorkImageLeft image={require("../../assets/projects/betterfin/betterfin-1.png")} headline="Hello Small Business" description="Betterfin exchanges data for value, and their onboarding flow captures that data in a clean and efficient manner."/>
          <WorkTextQuote author="Eric Greigo, Betterfin CEO" paragraph="Little Universe is an absolute pleasure to work with. Every time I threw a challenge a them, they came back with an opportunity and a plan to execute."/>
          <WorkImageRight image={require("../../assets/projects/betterfin/betterfin-3.png")} headline="Flow Optimization" description="Betterfin offers a suite of analytical tools for small business, often on aspects of a business some small business owners may not have experience with. We designed flows that accomodated Betterfin's data requirements and kept things simple for the end user."/>
          <WorkImageLeft image={require("../../assets/projects/betterfin/betterfin-2.png")} headline="Time Management" description="By simplifying the order of operations of analyzing their business for the end user, we allowed Betterfin's complex data analysis model to shine not as an overwhelming process, but as clear calls to action with clear time-to-completion."/>
          <WorkTextCentered title="A Dashboard For Small Business" paragraph="Small businesses may not always have access to a clear display of analytics on their operations and expenses. Betterfin seeks to offer this. We designed UX and UI for a dashboard which offers a variety of important information as well as links to financing opportunities. As with everything, we kept in mind scalability of tech and design."/>
          <WorkBigImage bgImage={require("../../assets/projects/betterfin/betterfin-4.png")} className="workImage"/>
          <Grid className={`work-next-project`} container justify="center" alignItems="center">
            <Transporter name="caseStudy2" show={true} duration={500} properties={[]} unstableOnUnmount noTransition>
              <WorkNextProject image={require("../../assets/projects/strive/strive-hero.png")} className="next-strive" projectName="Strive Digital" projectType="Digital Product" projectIndustry="Advocacy Tech" destination="../strive"/>
            </Transporter>
          </Grid>
        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default Betterfin;
