import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import FeaturedText from '../../components/FeaturedText';
import ImageWithText from '../../components/ImageWithText';
import Footer from '../../components/Footer';
import { preloadImage } from '../../preload'

import { Transporter } from '../../orbit';
import Fade from 'react-reveal/Fade';

class About extends Component {
  state = {
    hovered: undefined,
    route: 'about'
  }

  componentDidMount() {
    [
      require("../../assets/team/team-1-small.jpg"),
      require("../../assets/team/zach.png"),
      require("../../assets/team/adrian.png")
    ].forEach(preloadImage)
  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Hero
          heroText
          noFeaturedWorks
          className="about-hero"
          headline={<>Small Team. <span className="headline-emphasis">Big Impact.</span></>}
          subhead="We're startup industry veterans who care deeply about Making A Difference."
        />
        <FeaturedText textForMemberLeft className="zach-member" memberTitle="Founder" memberName="Zach Smith" text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible—they need custom solutions that don't break the bank." dominantColor="darkBlue"/>
        <FeaturedText textForMemberRight className="adrian-member" memberTitle="Founder" memberName="Adrian Del Balso" text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible—they need custom solutions that don't break the bank." dominantColor="lightBlue"/>
        <FeaturedText textForMemberLeft className="alana-member" memberTitle="Senior Developer" memberName="Alana Simoncelli" text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible—they need custom solutions that don't break the bank." dominantColor="pink"/>
        <FeaturedText textForMemberRight className="taylor-member" memberTitle="Senior Designer" memberName="Taylor Zanke" text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible—they need custom solutions that don't break the bank." dominantColor="yellow"/>
        <WorkTogether headline="Lets Work Together"/>
        <Footer/>
      </>
    )
  }
}

export default About;
