import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import ApproachStatement from '../../components/ApproachStatement';
import WorkTextCentered from '../../components/WorkTextCentered';
import ApproachArticle from '../../components/ApproachArticle';
import ApproachImageLeft from '../../components/ApproachImageLeft';
import ApproachImageRight from '../../components/ApproachImageRight';
import WorkTogether from '../../components/WorkTogether';
import AboutBigImage from '../../components/AboutBigImage';
import { Transporter } from '../../orbit';
import Fade from 'react-reveal/Fade';

class Approach extends Component {
  state = {
    hovered: undefined,
    route: 'betterfin'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Hero headline="Approach" subhead="We build trust to deliver impactful results."/>

        <Transporter name="approach1" show={true} duration={500} properties={[]}>
          <AboutBigImage bgImage={require("../../assets/office/office-2.jpg")} className="approach-image"/>
        </Transporter>
        <Fade bottom distance="30px" duration={500}>
          <ApproachStatement className="" title="Driven by Principles" paragraph="Through our cumulative decades of experience we have built a foundation of strong principles and have developed a deep intuition for product. We bring this to every project we work on and seek to grow with every team we partner with."/>
          <ApproachImageLeft className="" headline="A Technical Foundation" description="We're experts in design and engineering and are always searching for ways to improve. In the face of evolving markets or social contexts we stay anchored to our understanding of the fundamental principals of design and engineering as ways of seeing the world. Our ability to return to well learned foundations helps us weather rocky seas." image={require("../../assets/office/desk.jpg")}/>
          <ApproachImageRight className="" headline="No Process Without Context" description="We're process agnostic. We're not a huge agency here to push your project through the design and development juggernaut. We're more about sharing experiences and stories, reference and past works, and building a unique process around a context. We don't only seek out product market fit, but process context fit. " image={require("../../assets/office/process.jpg")}/>
          <ApproachImageLeft className="" headline="Our Effort in Intention" description="We cultivate relationships with the people we work with, internally and externally. We make a concious effort to be present and clear with the way we build collaborations with the knowledge that good work comes best from systems of support and connection. We're always seeking to expand our practice of intentionality and hope to work with clients who share this outlook." image={require("../../assets/office/intention.jpg")}/>
          <ApproachImageRight className="" headline="Trusting Partnerships" description="Across all of our work we make a concerted effort to be trusting and earn trust. It is important to us to work with people who we consider partners and those who we can prove our commitment to. We listen and thoughtfully respond as much as we conceptualize, design, and implement. We think this is partnership." image={require("../../assets/office/office.jpg")}/>

        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default Approach;
