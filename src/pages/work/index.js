import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import WorkCard from '../../components/WorkCard';
import WorkTogether from '../../components/WorkTogether';
import { Transporter } from '../../orbit'

class Work extends Component {
  state = {
    hovered: undefined,
    route: 'work'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Logo/>
        <Hero headline="Our Work" subhead="We make a difference for our clients"/>
        <div className="content-container">
        <Transporter name="caseStudy1" show={true}>
          <WorkCard projectName="Betterfin" projectType="Digital Product" projectIndustry="Fintech"/>
        </Transporter>
        <WorkCard projectName="Strive Digital" projectType="Digital Product" projectIndustry="Advocacy Tech"/>
        <WorkCard projectName="Motivote" projectType="Digital Product" projectIndustry="Advocacy Tech"/>
        <WorkCard projectName="Vote Crew" projectType="Digital Product" projectIndustry="Advocacy Tech"/>
        <WorkCard projectName="Dv01" projectType="Digital Product" projectIndustry="Fintech"/>
        <WorkCard projectName="Farmigo" projectType="Digital Product" projectIndustry="Food"/>
        </div>
        <WorkTogether headline="Let's get to know each other"/>
      </>
    )
  }
}

export default Work;
