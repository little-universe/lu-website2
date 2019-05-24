import React, { Component } from 'react';
import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import WorkCard from '../../components/WorkCard';
import WorkTextOpener from '../../components/WorkTextOpener';
import WorkBigImage from '../../components/WorkBigImage';
import WorkTextCentered from '../../components/WorkTextCentered';
import WorkImageLeft from '../../components/WorkImageLeft';
import WorkImageRight from '../../components/WorkImageRight';
import WorkTextQuote from '../../components/WorkTextQuote';
import WorkTextMetric from '../../components/WorkTextMetric';
import WorkNextProject from '../../components/WorkNextProject';
import WorkTogether from '../../components/WorkTogether';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Transporter } from '../../orbit'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade';

class Farmigo extends Component {
  state = {
    hovered: undefined,
    route: 'farmigo'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
      <Transporter name="caseStudy5" show={true} duration={500} properties={[]}>
        <div style={{ width: '100%', minHeight: '1vh' }}>
          <Hero bgImage={require("../../assets/projects/farmigo/farmigo-hero.png")} className="project-hero farmigo-hero"/>
        </div>
      </Transporter>
        <Fade bottom distance="30px" duration={500}>
            <WorkTextOpener list={["Digital Product", "UX/UI", "User Testing", "Front End"]} paragraph="Farmigo is an ecommerce marketplace for farm fresh food which targets urban communities who othewise may not have access to goods of a high quality. Through a web application, several mobile applications, and an on-the-ground coordination of pick up points, Farmigo supplies food and community to urban contexts."/>
            <WorkBigImage bgImage={require("../../assets/projects/farmigo/farmigo-1.png")} className="workImage"/>
            <WorkTextCentered title="Local Food, Digital Checkout" paragraph="Farmigo had built complex tech. They were frustrated that it was not packaged into a product that could build trust with their customers, satisfy their investors, and - of course - make their team proud. We worked closely with them to create a powerful, clean and polished product."/>
            <WorkImageLeft image={require("../../assets/projects/farmigo/farmigo-3.png")} headline="Food Ecommerce Meets Community" description="We designed a robust e-commerce site with big product images and clear pricing. Though clarity of UI we enabled users to feel confident about what they were purchasing leading to higher checkout volume. An up-front attitude of simplicity carried through across all of Farmigo's platforms."/>
            <WorkImageRight image={require("../../assets/projects/farmigo/farmigo-2.png")} headline="Legit Delicious Food" description="Genuinely good food is an easy product to sell, the value speaks for itself. Given that the product had such an internal strength already, our job became about conveying that message as clearly and purely as possible. UI and UX were optimized for succinctness and openness."/>
            <WorkTextCentered title="Mobile Checkout, Happy Customers" paragraph="The spirit of local food co-ops and farmers markets lived within Farmigo. Users picked up their bags of fresh goods from community locations, interacted with people involved across the packing and fulfillment process, and brought them to their homes themselves. It only made sense that the user's checkout experience be just as mobile."/>
            <WorkImageLeft image={require("../../assets/projects/farmigo/farmigo-m-4.png")} headline="Gated Ordering, Discounted Surplus" description="Whole, fresh food operates on its own scale of time. Without preservatives and other elements which may prolong shelf life in stores, food fulfilled by Farmigo lived on an organic timeline. The checkout experience was gated clearly, with pickp times organized and cupon elegibility made obvious."/>
            <WorkImageRight image={require("../../assets/projects/farmigo/farmigo-m-5.png")} headline="Checkout, Checkout Again" description="With food, sometimes you know what you like, and you know you want it! We used the unique gesture functionality of touch mobile devices to encourage users to order their favorites on a recurring schedule, allowing farmers, suppliers, and Farmigo's fulfillment staff alike to plan ahead."/>
            <WorkTextCentered title="Packing, Shipping, Handing Off" paragraph="Farmigo's fulfillment team needed to keep up to demand in order to ensure orders were being packed and delivered to be picked up on time. In order to help with this process we designed a UI for in-house use which tracked how far ahead or behind food was being packed."/>
            <WorkBigImage bgImage={require("../../assets/projects/farmigo/farmigo-4.png")} className="workImage"/>
            <Grid className={`work-next-project`} container justify="center" alignItems="center">
              <Transporter name="caseStudy6" show={true} duration={500} properties={[]} unstableOnUnmount noTransition>
                <WorkNextProject image={require("../../assets/projects/instructrr/instructrr-hero.png")} className="next-instructrr" projectName="Instructrr" projectType="Digital Product" projectIndustry="Fitness" destination="../instructrr"/>
              </Transporter>
            </Grid>
          <WorkTogether headline="Let's get to know each other"/>
          </Fade>
      </>
    )
  }
}

export default Farmigo;
