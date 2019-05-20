import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import WorkCard from '../../components/WorkCard';
import WorkTogether from '../../components/WorkTogether';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Transporter } from '../../orbit'
import {Link} from "react-router-dom";

class Work extends Component {
  state = {
    hovered: undefined,
    route: 'work'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Hero headline="Our Work" subhead="We make a difference for our clients"/>
        <Link to="../betterfin" className="work-card-link">
          <Transporter name="caseStudy1" show={true} duration={750} unstableOnUnmount>
              <WorkCard bgImage={require("../../assets/projects/betterfin/betterfin-hero.png")} className="betterfin-card" projectName="Betterfin" projectType="Digital Product" projectIndustry="Fintech"/>
          </Transporter>
        </Link>
        <Link to="../strive" className="work-card-link">
          <Transporter name="caseStudy2" show={true} duration={500} properties={['margin']}>
            <WorkCard projectName="Strive Digital" projectType="Digital Product" projectIndustry="Advocacy Tech"/>
          </Transporter>
        </Link>
        <Link to="../motivote" className="work-card-link">
          <Transporter name="caseStudy3" show={true} duration={250} properties={['margin']}>
            <WorkCard projectName="Motivote" projectType="Digital Product" projectIndustry="Advocacy Tech"/>
          </Transporter>
        </Link>
        <Link to="../votecrew" className="work-card-link">
          <WorkCard projectName="Vote Crew" projectType="Digital Product" projectIndustry="Advocacy Tech"/>
        </Link>
        <Link to="../dv01" className="work-card-link">
          <WorkCard projectName="Dv01" projectType="Digital Product" projectIndustry="Fintech"/>
        </Link>
        <Link to="../farmigo" className="work-card-link">
          <WorkCard projectName="Farmigo" projectType="Digital Product" projectIndustry="Food"/>
        </Link>

        <WorkTogether headline="Let's get to know each other"/>
      </>
    )
  }
}

export default Work;
