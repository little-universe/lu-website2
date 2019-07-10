import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import FeaturedText from '../../components/FeaturedText';
import { Transporter } from '../../orbit';
import Fade from 'react-reveal/Fade';
import Footer from '../../components/Footer';
import { preloadImage } from '../../preload'

class WorkWithUs extends Component {
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
        <WorkTogether headline="Let's Work Together" fullHeight/>
        <Footer/>
      </>
    )
  }
}

export default WorkWithUs;
