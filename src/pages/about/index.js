import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import FeaturedText from '../../components/FeaturedText';
import ImageWithText from '../../components/ImageWithText';
import Footer from '../../components/Footer';

import { Transporter } from '../../orbit';
import Fade from 'react-reveal/Fade';

class About extends Component {
  state = {
    hovered: undefined,
    route: 'about'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Hero heroText className="about-hero" headline="About Us" subhead="Small Team. Full Stack. Big Impact."/>
        <Fade bottom distance="30px" duration={500}>
        <FeaturedImage featuredFull className="group-photo"/>
        <FeaturedText textWithHeader header="We Love Product" text="Our team has gone to bat with all things startup. We’ve built, launched and scaled multiple ventures as founders, managers, operators and dreamers. We’ve seen huge successes and formidable failures. We understand what it means to operate in ambiguity, where to make tough calls, and we have the skills to back it up."/>
        <ImageWithText imageLeft imageFull className="zach-member" memberName="Zach Smith" memberTitle="Founder" description="Zach has a strong background in leading technical teams for companies both large and small. His experience over a decade of developing products has been focused on impact and scale."/>
        <ImageWithText imageRight imageFull className="adrian-member" memberName="Adrian Del Balso" memberTitle="Founder" description="Adrian has a deep background in leading product teams for impact. His decade of product, design and frontend engineering experience have been focused on engaging users with digital tools to better their lives and communities."/>
        <FeaturedImage featuredCenter className="zach-adrian" caption="Zach and Adrian have built 3 companies together."/>
        <ImageWithText imageLeft imageFull className="eugene-member" memberName="Eugene Butler" memberTitle="Senior Developer" description="Eugene is an analytical and systematic full stack developer. Through years of experience he has developed a strong ability to balance execution, planning, and communication in all leadership contexts."/>
        <ImageWithText imageRight imageFull className="alana-member" memberName="Alana Simoncelli" memberTitle="Senior Developer" description="Alana develops products across platforms and formats with close attention to detail and thoughtful responsiveness to context. She's an experience team leader and communicator, and structures development processes with intelligence and conviction."/>
        <ImageWithText imageLeft imageFull className="taylor-member" memberName="Taylor Zanke" memberTitle="Creative Director" description="Taylor is a designer and front-end developer passionate about doing work that matters. With a background in Architecture and Graphic Design, he brings a rigorous yet flexible process to every project. He creates clean visual design and thoughtful UX."/>
        <FeaturedImage featuredCenter className="eugene-alana" caption="Eugene and Alana have built scalable products together."/>
        <FeaturedImage featuredCenter className="taylor-adrian" caption="Taylor and Adrian have established a vocabulary for discussing design."/>
        <WorkTogether headline="Let's get to know each other"/>
        </Fade>
        <Footer/>
      </>
    )
  }
}

export default About;
