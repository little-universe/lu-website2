import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import FeaturedText from '../../components/FeaturedText';
import ImageWithText from '../../components/ImageWithText';
import { Transporter } from '../../orbit';
import Fade from 'react-reveal/Fade';
import Footer from '../../components/Footer';
import { preloadImage } from '../../preload'

class Approach extends Component {
  state = {
    hovered: undefined,
    route: 'betterfin'
  }

  componentDidMount() {
    [
      require("../../assets/office/desk.jpg"),
      require("../../assets/office/process.jpg"),
      require("../../assets/office/intention.jpg"),
      require("../../assets/office/office.jpg")
    ].forEach(preloadImage)
  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Hero
          heroText
          secondaryHero
          className="approach-hero"
          headline={<>We build trust for <span className="headline-emphasis">impact.</span></>}
          subhead="The most useful products are usually the ones you didnt know you needed, and that didnt exist when you started."
        />
        <WorkTogether headline="Lets Work Together"/>
        <Footer/>
      </>
    )
  }
}

export default Approach;
