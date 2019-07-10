import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import FeaturedText from '../../components/FeaturedText';
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
      require("../../assets/team/adrian.png"),
      require("../../assets/team/alana.png"),
      require("../../assets/team/taylor.png")
    ].forEach(preloadImage)
  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Hero
          heroText
          secondaryHero
          className="about-hero"
          headline={<>Small Team. <span className="headline-emphasis">Big Impact.</span></>}
          subhead="We're startup industry veterans who care deeply about Making A Difference."
        />
        <FeaturedText textForMemberLeft className="adrian-member" memberTitle="Founder" memberName="Adrian Del Balso" text="Adrian has a deep background in leading product teams for impact. His decade of product, design and frontend engineering experience have been focused on engaging users with digital tools to better their lives and communities." dominantColor="darkBlue"/>
        <FeaturedText textForMemberRight className="zach-member" memberTitle="Founder" memberName="Zach Smith" text="Zach has a proven record and mastery of full-stack development and thoughtful engineering architecture for projects at all scales. He has architected large scale data applications in te healthcare, financial, and political tech industries." dominantColor="lightBlue"/>
        <FeaturedText textBigStatement text="We are partners, not vendors."/>
        <FeaturedText textForMemberLeft className="alana-member" memberTitle="Senior Developer" memberName="Alana Simoncelli" text="Alana develops products across platforms and formats with close attention to detail and thoughtful responsiveness to context. She's an experience team leader and communicator, and structures development processes with intelligence and conviction." dominantColor="pink"/>
        <FeaturedText textForMemberRight className="taylor-member" memberTitle="Senior Designer" memberName="Taylor Zanke" text="Taylor is a designer passionate about doing work that matters. With a background in Architecture and Graphic Design, he brings a rigorous yet flexible process to every project. He creates clean visual design and thoughtful UX." dominantColor="yellow"/>
        <FeaturedText textBigStatement text="We are partners, not vendors."/>
        <WorkTogether headline="Let's Work Together"/>
        <Footer/>
      </>
    )
  }
}

export default About;
