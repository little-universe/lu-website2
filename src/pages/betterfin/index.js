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

class Betterfin extends Component {
  state = {
    hovered: undefined,
    route: 'betterfin'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
          <Transporter name="caseStudyBetterfin" show={true} duration={500} properties={[]}>
            <Hero heroImage className="betterfin-hero" projectName="Betterfin" projectCategory="Digital Product" projectIndustry="Fintech"/>
          </Transporter>
          <FeaturedText textWithCardRight className="" status="Ongoing Partnership" list={["Digital Product", "UX/UI", "Branding", "Strategy", "Front End Development", "Back End Development"]} projectType="Fintech" projectTitle="Betterfin" text="Betterfin is a service for business owners to get educated on small business lending and navigate commercial products with confidence. They provide transparency into lending through data analytics to help owners secure business financing they understand." dominantColor="lightGrey" ctaLabel="Strive Digital"/>
          <FeaturedImage featuredFull className="betterfin-5"/>
          <FeaturedText textWithHeader header="Building Trust" text="Betterfin had built complex tech. They were frustrated that it was not packaged into a product that could build trust with their customers, satisfy their investors, and - of course - make their team proud. We worked closely with them to create a powerful, clean and polished product."/>
          <FeaturedText textForProductImageLeft className="betterfin-1" header="Hello Small Business" text="Betterfin exchanges data for value, and their onboarding flow captures that data in a clean and efficient manner." dominantColor="lightGreen"/>
          <FeaturedText textWithHeader header="Eric Greigo, Betterfin CEO" text="Little Universe is an absolute pleasure to work with. Every time I threw a challenge a them, they came back with an opportunity and a plan to execute."/>
          <FeaturedText textForProductImageRight className="betterfin-3" header="Flow Optimization" text="Betterfin offers a suite of analytical tools for small business, often on aspects of a business some small business owners may not have experience with. We designed flows that accomodated Betterfin's data requirements and kept things simple for the end user." dominantColor="lightGreen"/>
          <FeaturedText textForProductImageLeft className="betterfin-2" header="Time Management" text="By simplifying the order of operations of analyzing their business for the end user, we allowed Betterfin's complex data analysis model to shine not as an overwhelming process, but as clear calls to action with clear time-to-completion." dominantColor="lightGreen"/>
          <FeaturedText textWithHeader header="A Dashboard For Small Business" text="Small businesses may not always have access to a clear display of analytics on their operations and expenses. Betterfin seeks to offer this. We designed UX and UI for a dashboard which offers a variety of important information as well as links to financing opportunities. As with everything, we kept in mind scalability of tech and design."/>
          <FeaturedImage featuredFullMatte className="betterfin-4"/>

          <FeaturedImage featuredCenter className="votecrew-next" projectName="Vote Crew" projectCategory="Digital Product" projectIndustry="Advocacy Tech" destination="../votecrew" caseStudyName="caseStudyVotecrew"/>

          <WorkTogether headline="Let's Work Together"/>
          <Footer/>
      </>
    )
  }
}

export default Betterfin;
