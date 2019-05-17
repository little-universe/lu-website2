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

class Betterfin extends Component {
  state = {
    hovered: undefined,
    route: 'dv01'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Hero className="betterfin-hero"/>
        <div className="content-container">
          <WorkTextOpener list={["Digital Product", "UX/UI"]} paragraph="Betterfin is a service for business owners to get educated on small business lending and navigate commercial products with confidence. They provide transparency into lending through data analytics to help owners secure business financing they understand."/>
          <WorkBigImage className="workImage"/>
          <WorkTextCentered title="Building Trust" paragraph="Betterfin had built complex tech. They were frustrated that it was not packaged into a product that could build trust with their customers, satisfy their investors, and - of course - make their team proud. We worked closely with them to create a powerful, clean and polished product."/>
          <WorkImageLeft image="" headline="Hello Small Business!" description="Betterfin exchanges data for value, and their onboarding flow captures that data in a clean and efficient manner."/>
          <WorkTextQuote author="Eric G., Betterfin CEO" paragraph="Little Universe is an absolute pleasure to work with. Every time I threw a challenge a them, they came back with an opportunity and a plan to execute."/>
          <WorkImageRight image="" headline="Hello Small Business!" description="Betterfin exchanges data for value, and their onboarding flow captures that data in a clean and efficient manner."/>
          <WorkTextMetric metricNumber="2x" metricName="Increased Conversion"/>
          <WorkBigImage className="workImage"/>
          <WorkNextProject className="next-strive" projectName="Strive Digital" projectType="Digital Product" projectIndustry="Advocacy Tech"/>
        </div>
        <WorkTogether headline="Let's get to know each other"/>
      </>
    )
  }
}

export default Betterfin;
