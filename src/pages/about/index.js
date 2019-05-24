import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import AboutBigImage from '../../components/AboutBigImage';
import AboutMemberHistory from '../../components/AboutMemberHistory';
import WorkTextOpener from '../../components/WorkTextOpener';
import AboutMemberLeft from '../../components/AboutMemberLeft';
import AboutMemberRight from '../../components/AboutMemberRight';
import WorkTogether from '../../components/WorkTogether';
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
        <Hero headline="About Us" subhead="We're a cool bunch of folks who absolutely love product"/>

        <Transporter name="member-team" show={true} duration={500} properties={[]}>
          <AboutBigImage bgImage={require("../../assets/team/team-1.jpg")} className="group-photo"/>
        </Transporter>
        <Fade bottom distance="30px" duration={500}>
        <AboutMemberLeft className="zach-member" name="Zach Smith" title="Founder" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests={["Hiking", "Climbing"]} image={require("../../assets/team/zach.png")}/>
        <AboutMemberRight className="adrian-member" name="Adrian Del Balso" title="Founder" description="Adrian has a deep background in leading product teams for impact. His decade of product, design and frontend engineering experience have been focused on engaging users with digital tools to better their lives and communities." interests={["this", "that"]} image={require("../../assets/team/adrian.png")}/>
        <AboutMemberHistory bgImage={require("../../assets/team/zach-adrian.jpg")} className="zach-adrian" description="Zach and Adrian have built 3 companies together."/>
        <AboutMemberLeft className="zach-eugene" name="Eugene Butler" title="Senior Developer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests={["this", "that"]} image={require("../../assets/team/eugene.png")}/>
        <AboutMemberRight className="alana-member" name="Alana Simoncelli" title="Senior Developer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests={["this", "that"]} image={require("../../assets/team/alana.png")}/>
        <AboutMemberLeft className="taylor-member" name="Taylor Zanke" title="Creative Director" description="Taylor is a designer and front-end developer passionate about doing work that matters. With a background in Architecture and Graphic Design, he brings a rigorous yet flexible process to every project. He creates clean visual design and thoughtful UX." interests={["this", "that"]} image={require("../../assets/team/taylor.png")}/>
        <AboutMemberHistory bgImage={require("../../assets/team/eugene-alana.jpg")} className="eugene-alana" description="Eugene and Alana have built scalable products together."/>
        <AboutMemberHistory bgImage={require("../../assets/team/taylor-adrian.jpg")} className="taylor-adrian" description="Taylor and Adrian have developed a deep design vocabulary."/>
        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default About;
