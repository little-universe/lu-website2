import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import WorkCard from '../../components/WorkCard';
import WorkTogether from '../../components/WorkTogether';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Transporter } from '../../orbit'
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';

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
            <WorkCard bgImage={require("../../assets/projects/strive/strive-hero.png")} className="strive-card" projectName="Strive Digital" projectType="Digital Product" projectIndustry="Advocacy Tech"/>
          </Transporter>
        </Link>
        <Link to="../motivote" className="work-card-link">
          <Transporter name="caseStudy3" show={true} duration={250} properties={['margin']}>
            <WorkCard bgImage={require("../../assets/projects/motivote/motivote-hero.png")} className="motivote-card" projectName="Motivote" projectType="Digital Product" projectIndustry="Advocacy Tech"/>
          </Transporter>
        </Link>
        <Fade bottom distance="30px" duration={500}>
        <Link to="../votecrew" className="work-card-link">
        <Transporter name="caseStudy4" show={true} duration={250} properties={['margin']}>
          <WorkCard bgImage={require("../../assets/projects/votecrew/votecrew-hero.png")} projectName="Vote Crew" projectType="Digital Product" projectIndustry="Advocacy Tech"/>
        </Transporter>
        </Link>
        <Link to="../farmigo" className="work-card-link">
          <Transporter name="caseStudy5" show={true} duration={250} properties={['margin']}>
            <WorkCard bgImage={require("../../assets/projects/farmigo/farmigo-hero.png")} projectName="Farmigo" projectType="Digital Product" projectIndustry="Food"/>
          </Transporter>
        </Link>
        <Link to="../instructrr" className="work-card-link">
          <Transporter name="caseStudy6" show={true} duration={250} properties={['margin']}>
            <WorkCard bgImage={require("../../assets/projects/instructrr/instructrr-hero.png")} projectName="Instructrr" projectType="Digital Product" projectIndustry="Fitness"/>
          </Transporter>
        </Link>

        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default Work;
