import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import WorkCard from '../../components/WorkCard';
import WorkTextOpener from '../../components/WorkTextOpener';
import WorkBigImage from '../../components/WorkBigImage';
import WorkTextCentered from '../../components/WorkTextCentered';
import WorkImageLeft from '../../components/WorkImageLeft';
import WorkTogether from '../../components/WorkTogether';

class Betterfin extends Component {
  state = {
    hovered: undefined,
    route: 'betterfin'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Logo/>
        <Nav/>
        <Hero className="betterfin-hero"/>
        <div className="content-container">
          <WorkTextOpener list={["product", "this"]} paragraph="Betterfin is a service for business owners to get educated on small business lending and navigate commercial products with confidence. They provide transparency into lending through data analytics to help owners secure business financing they understand."/>
          <WorkBigImage className="workImage"/>
          <WorkTextCentered title="Building Trust" paragraph="Betterfin had built complex tech. They were frustrated that it was not packaged into a product that could build trust with their customers, satisfy their investors, and - of course - make their team proud. We worked closely with them to create a powerful, clean and polished product."/>
          <WorkImageLeft image="" headline="Hello Small Business!" description="Betterfin exchanges data for value, and their onboarding flow captures that data in a clean and efficient manner."/>
        </div>
      </>
    )
  }
}

export default Betterfin;
