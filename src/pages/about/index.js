import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import WorkBigImage from '../../components/WorkBigImage';
import AboutMemberHistory from '../../components/AboutMemberHistory';
import WorkTextOpener from '../../components/WorkTextOpener';
import AboutMemberLeft from '../../components/AboutMemberLeft';
import AboutMemberRight from '../../components/AboutMemberRight';
import WorkTogether from '../../components/WorkTogether';

class About extends Component {
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
        <Hero headline="About Us" subhead="We're a cool bunch of folks who abosolutely love product"/>
        <div className="content-container">
          <WorkBigImage className="group-photo"/>
          <AboutMemberLeft className="zach-member" name="Zach Smith" title="Founder" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests="hiking, biking, kayaking"/>
          <AboutMemberRight className="zach-member" name="Zach Smith" title="Founder" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests="hiking, biking, kayaking"/>
          <AboutMemberHistory className="zach-adrian" description="Zach and Adrian have written over 1M lines of code together."/>
          <AboutMemberLeft className="zach-member" name="Zach Smith" title="Founder" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests="hiking, biking, kayaking"/>
          <AboutMemberRight className="zach-member" name="Zach Smith" title="Founder" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests="hiking, biking, kayaking"/>
          <AboutMemberLeft className="zach-member" name="Zach Smith" title="Founder" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." interests="hiking, biking, kayaking"/>
          <AboutMemberHistory className="eugene-alana" description="Eugene and Alana have built 12 products together."/>
          <AboutMemberHistory className="taylor-adrian" description="Taylor and Adrian have designed 1,000 user flows together."/>
          <WorkTextOpener className="workImage" list="hi" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        </div>
        <WorkTogether headline="Let's get to know each other"/>
      </>
    )
  }
}

export default About;
