import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
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
        <Link to="../strive" className="work-card-link">
          <Transporter name="caseStudyStrive" show={true} duration={500} properties={['margin']}>
            <FeaturedImage featuredFullProject className="featured-strive" projectName="Strive Digital" projectCategory="Digital Product" projectIndustry="Advocacy Tech"/>
          </Transporter>
        </Link>
        <Link to="../motivote" className="work-card-link">
          <Transporter name="caseStudyMotivote" show={true} duration={250} properties={['margin']}>
            <FeaturedImage featuredFullProject className="featured-motivote" projectName="Motivote" projectCategory="Digital Product" projectIndustry="Advocacy Tech"/>
          </Transporter>
        </Link>
        <Link to="../betterfin" className="work-card-link">
          <Transporter name="caseStudyBetterfin" show={true} duration={750} unstableOnUnmount>
            <FeaturedImage featuredFullProject className="featured-betterfin" projectName="Betterfin" projectCategory="Digital Product" projectIndustry="Fintech"/>
          </Transporter>
        </Link>
        <Fade bottom distance="30px" duration={500}>
        <Link to="../votecrew" className="work-card-link">
        <Transporter name="caseStudyVotecrew" show={true} duration={250} properties={['margin']}>
          <FeaturedImage featuredFullProject className="featured-votecrew" projectName="Votecrew" projectCategory="Digital Product" projectIndustry="Advocacy Tech"/>
        </Transporter>
        </Link>
        <Link to="../farmigo" className="work-card-link">
          <Transporter name="caseStudyFarmigo" show={true} duration={250} properties={['margin']}>
            <FeaturedImage featuredFullProject className="featured-farmigo" projectName="Farmigo" projectCategory="Digital Product" projectIndustry="Food"/>
          </Transporter>
        </Link>
        <Link to="../instructrr" className="work-card-link">
          <Transporter name="caseStudyInstructrr" show={true} duration={250} properties={['margin']}>
            <FeaturedImage featuredFullProject className="featured-instructrr" projectName="Instructrr" projectCategory="Digital Product" projectIndustry="Fitness"/>
          </Transporter>
        </Link>
        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default Work;
