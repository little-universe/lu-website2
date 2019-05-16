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
import { Transporter } from '../../orbit'

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
          <AboutBigImage className="group-photo"/>
          <Transporter name="member-zach" show={true} duration={4000} properties={['margin']}>
            <AboutMemberLeft className="zach-member" name="Zach Smith" title="Founder" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests="hiking, biking, kayaking" image={require("../../assets/team/1.jpg")}/>
          </Transporter>
          <Transporter name="member-adrian" show={true} duration={4000} properties={['margin']}>
            <AboutMemberRight className="adrian-member" name="Adrian Del Balso" title="Founder" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests="hiking, biking, kayaking" image={require("../../assets/team/2.jpg")}/>
          </Transporter>
          <AboutMemberHistory className="zach-adrian" description="Zach and Adrian have written over 1M lines of code together."/>
          <Transporter name="member-eugene" show={true} duration={4000} properties={['margin']}>
            <AboutMemberLeft className="zach-eugene" name="Eugene Butler" title="Senior Developer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests="hiking, biking, kayaking"/>
          </Transporter>
          <Transporter name="member-alana" show={true} duration={4000} properties={['margin']}>
            <AboutMemberRight className="alana-member" name="Alana Simoncelli" title="Senior Developer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests="hiking, biking, kayaking"/>
          </Transporter>
          <Transporter name="member-taylor" show={true} duration={4000} properties={['margin']}>
            <AboutMemberLeft className="taylor-member" name="Taylor Zanke" title="Product Designer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests="hiking, biking, kayaking"/>
          </Transporter>
          <AboutMemberHistory className="eugene-alana" description="Eugene and Alana have built 12 products together."/>
          <AboutMemberHistory className="taylor-adrian" description="Taylor and Adrian have designed 1,000 user flows together."/>
          <WorkTextOpener className="workImage" list="hi" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <WorkTogether headline="Let's get to know each other"/>
      </>
    )
  }
}

export default About;
