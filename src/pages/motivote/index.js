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
            <Hero headline="motivote" bgImage={require("../../assets/projects/motivote/motivote-hero.png")} className="project-hero motivote-hero"/>
          </div>
        </Transporter>
        <Fade bottom distance="30px" duration={500}>
          <WorkTextOpener list={["Digital Product", "UX/UI", "Branding", "Strategy"]} paragraph="Betterfin is a service for business owners to get educated on small business lending and navigate commercial products with confidence. They provide transparency into lending through data analytics to help owners secure business financing they understand."/>
          <WorkBigImage className="workImage"/>
          <WorkTextCentered title="Building Trust" paragraph="Betterfin had built complex tech. They were frustrated that it was not packaged into a product that could build trust with their customers, satisfy their investors, and - of course - make their team proud. We worked closely with them to create a powerful, clean and polished product."/>
          <WorkImageLeft image="" headline="Hello Small Business!" description="Betterfin exchanges data for value, and their onboarding flow captures that data in a clean and efficient manner."/>
          <WorkTextQuote author="Eric G., Betterfin CEO" paragraph="Little Universe is an absolute pleasure to work with. Every time I threw a challenge a them, they came back with an opportunity and a plan to execute."/>
          <WorkImageRight image="" headline="Hello Small Business!" description="Betterfin exchanges data for value, and their onboarding flow captures that data in a clean and efficient manner."/>
          <WorkTextMetric metricNumber="2x" metricName="Increased Conversion"/>
          <WorkBigImage className="workImage"/>
          <WorkNextProject className="next-strive" projectName="Strive Digital" projectType="Digital Product" projectIndustry="Advocacy Tech"/>
        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default Motivote;
