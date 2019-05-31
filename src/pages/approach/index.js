import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import FeaturedText from '../../components/FeaturedText';
import ImageWithText from '../../components/ImageWithText';
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
        <Hero heroText className="about-hero" headline="Approach" subhead="We build trust to deliver impactful results"/>

        <Transporter name="approach1" show={true} duration={500} properties={[]}>
          <FeaturedImage featuredFull className="approach-photo"/>
        </Transporter>
        <Fade bottom distance="30px" duration={500}>
          <FeaturedText textWithHeader header="Driven by Principles" text="Through our cumulative decades of experience we have built a foundation of strong principles and have developed a deep intuition for product. We bring this knowledge to every project we work on and seek to learn from every team we partner with."/>
          <ImageWithText imageLeft imageFull className="approach-1" headline="A Technical Foundation" description="We're experts in design and engineering and are always searching for ways to improve. In the face of evolving markets or social contexts we stay anchored to our understanding of the fundamental principals of design and engineering as ways of seeing the world. Our ability to return to well learned foundations helps us weather rocky seas."/>
          <ImageWithText imageRight imageFull className="approach-2" headline="No Process Without Context" description="We're process agnostic. We're not a huge agency here to push your project through the design and development juggernaut. We're more about sharing experiences and stories, reference and past works, and building a unique process around a context. We don't only seek out product market fit, but process context fit."/>
          <ImageWithText imageLeft imageFull className="approach-3" headline="Seeking Intentionality" description="We cultivate relationships with the people we work with, internally and externally. We make a conscious effort to be present and clear with how we collaborate. We believe that great work comes from systems of support and connection. We're always seeking to expand our practice of intentionality and hope to work with clients who share this outlook."/>
          <ImageWithText imageRight imageFull className="approach-4" headline="Trusting Partnerships" description="We make a concerted effort to be trusting and earn trust across all our work. It is important to us to work with people who we consider partners and those who we can prove our commitment to. We listen and thoughtfully respond as much as we conceptualize, design, and implement."/>
          <WorkTogether headline="Let's get to know each other"/>
        </Fade>
      </>
    )
  }
}

export default Approach;
