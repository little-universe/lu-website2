import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import WorkCard from '../../components/WorkCard';
import WorkTextOpener from '../../components/WorkTextOpener';
import WorkBigImage from '../../components/WorkBigImage';
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
        </div>
      </>
    )
  }
}

export default Betterfin;
