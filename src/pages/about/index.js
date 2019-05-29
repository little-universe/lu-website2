import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import WorkTextOpener from '../../components/WorkTextOpener';
import AboutMemberLeft from '../../components/AboutMemberLeft';
import AboutMemberRight from '../../components/AboutMemberRight';
import WorkTogether from '../../components/WorkTogether';
import ApproachStatement from '../../components/ApproachStatement';
import FeaturedImage from '../../components/FeaturedImage';
import { Transporter } from '../../orbit';
import Fade from 'react-reveal/Fade';

class About extends Component {
  state = {
    hovered: undefined,
    route: 'betterfin'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Hero headline="About Us" subhead="Small Team. Full Stack. Big Impact."/>

        <Transporter name="member-team" show={true} duration={500} properties={[]}>
          <FeaturedImage featuredFull className="group-photo"/>
        </Transporter>
        <Fade bottom distance="30px" duration={500}>
        <ApproachStatement className="" title="We Love Product" paragraph="Our team has gone to bat with all things startup. We’ve built, launched and scaled multiple ventures as founders, managers, operators and dreamers. We’ve seen huge successes and formidable failures. We understand what it means to operate in ambiguity, where to make tough calls, and we have the skills to back it up."/>
        <AboutMemberLeft className="zach-member" name="Zach Smith" title="Founder" description="Zach has a strong background in leading technical teams for companies both large and small. His experience over a decade of developing products has been focused on impact and scale." interests={["Hiking", "Climbing"]} image={require("../../assets/team/zach.png")}/>
        <AboutMemberRight className="adrian-member" name="Adrian Del Balso" title="Founder" description="Adrian has a deep background in leading product teams for impact. His decade of product, design and frontend engineering experience have been focused on engaging users with digital tools to better their lives and communities." interests={["this", "that"]} image={require("../../assets/team/adrian.png")}/>
        <FeaturedImage featuredCenter className="zach-adrian" caption="Zach and Adrian have built 3 companies together."/>
        <AboutMemberLeft className="zach-eugene" name="Eugene Butler" title="Senior Developer" description="Eugene is an analytical and systematic full stack developer. Through years of experience he has developed a strong ability to balance execution, planning, and communication in all leadership contexts." interests={["this", "that"]} image={require("../../assets/team/eugene.png")}/>
        <AboutMemberRight className="alana-member" name="Alana Simoncelli" title="Senior Developer" description="Alana develops products across platforms and formats with close attention to detail and thoughtful responsiveness to context. She's an experience team leader and communicator, and structures development processes with intelligence and conviction. " interests={["this", "that"]} image={require("../../assets/team/alana.png")}/>
        <AboutMemberLeft className="taylor-member" name="Taylor Zanke" title="Creative Director" description="Taylor is a designer and front-end developer passionate about doing work that matters. With a background in Architecture and Graphic Design, he brings a rigorous yet flexible process to every project. He creates clean visual design and thoughtful UX." interests={["this", "that"]} image={require("../../assets/team/taylor.png")}/>
        <FeaturedImage featuredCenter className="eugene-alana" caption="Eugene and Alana have built scalable products together."/>
        <FeaturedImage featuredCenter className="taylor-adrian" caption="Taylor and Adrian have established a vocabulary for discussing design."/>
        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default About;
