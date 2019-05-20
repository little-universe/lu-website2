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
        <Hero headline="About Us" subhead="We're a cool bunch of folks who abosolutely love product"/>

        <Transporter name="member-team" show={true} duration={500} properties={[]}>
          <AboutBigImage bgImage={require("../../assets/team/team.jpg")} className="group-photo"/>
        </Transporter>
        <Fade bottom distance="30px" duration={500}>
        <AboutMemberLeft className="zach-member" name="Zach Smith" title="Founder" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests={["Hiking", "Climbing"]} image={require("../../assets/team/1.jpg")}/>
        <AboutMemberRight className="adrian-member" name="Adrian Del Balso" title="Founder" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests={["this", "that"]} image={require("../../assets/team/adrian-grey.png")}/>

        <AboutMemberHistory bgImage={require("../../assets/team/team.jpg")} className="zach-adrian" description="Zach and Adrian have written over 1M lines of code together."/>

        <AboutMemberLeft className="zach-eugene" name="Eugene Butler" title="Senior Developer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests={["this", "that"]} image={require("../../assets/team/3.jpg")}/>


        <AboutMemberRight className="alana-member" name="Alana Simoncelli" title="Senior Developer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests={["this", "that"]} image={require("../../assets/team/4.jpg")}/>
        <AboutMemberLeft className="taylor-member" name="Taylor Zanke" title="Product Designer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests={["this", "that"]} image={require("../../assets/team/5.jpg")}/>
        <AboutMemberHistory bgImage={require("../../assets/team/team.jpg")} className="eugene-alana" description="Eugene and Alana have built 12 products together."/>
        <AboutMemberHistory bgImage={require("../../assets/team/team.jpg")} className="taylor-adrian" description="Taylor and Adrian have designed 1,000 user flows together."/>
        <WorkTextOpener className="workImage" list={["260 Ainslie Street"]} paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default About;
