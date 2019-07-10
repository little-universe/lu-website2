import React, { Component } from 'react';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import FeaturedImage from '../../components/FeaturedImage';
import FeaturedText from '../../components/FeaturedText';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Transporter } from '../../orbit'
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import Footer from '../../components/Footer';

class Farmigo extends Component {
  state = {
    hovered: undefined,
    route: 'farmigo'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
      <Transporter name="caseStudyFarmigo" show={true} duration={500} properties={[]}>
        <Hero heroImage className="farmigo-hero" projectName="Farmigo" projectCategory="Digital Product" projectIndustry="Food"/>
      </Transporter>
      <FeaturedText textWithCardRight className="" status="Completed Project" list={["Digital Product", "UX/UI", "User Testing", "Front End"]} projectType="Food Tech" projectTitle="Farmigo" text="Farmigo is an ecommerce marketplace for farm fresh food which targets urban communities who othewise may not have access to goods of a high quality. Through a web application, several mobile applications, and an on-the-ground coordination of pick up points, Farmigo supplies food and community to urban contexts." dominantColor="lightGrey" ctaLabel="Vote Crew"/>
      <FeaturedImage featuredFullMatte className="farmigo-1"/>
      <FeaturedText textWithHeader header="Local Food, Digital Checkout" text="Farmigo had to tackle both the complex tasks of ecommerce and order fulfillment with local food producers who may not have the infrastructure in place to do large volume orders. We built a platform that accomodated not only the end user's experience of pickup, but also the prodcer's experience of distribution."/>
      <FeaturedText textForProductImageLeft className="farmigo-3" header="Food Ecommerce Meets Community" text="We designed a robust e-commerce site with big product images and clear pricing. Though clarity of UI we enabled users to feel confident about what they were purchasing leading to higher checkout volume. An up-front attitude of simplicity carried through across all of Farmigo's platforms." dominantColor="lightGreen"/>
      <FeaturedText textForProductImageRight className="farmigo-2" header="Legit Delicious Food" text="Genuinely good food is an easy product to sell, the value speaks for itself. Given that the product had such an internal strength already, our job became about conveying that message as clearly and purely as possible. UI and UX were optimized for succinctness and openness." dominantColor="lightGreen"/>
      <FeaturedText textWithHeader header="Mobile Checkout, Happy Customers" text="The spirit of local food co-ops and farmers markets lived within Farmigo. Users picked up their bags of fresh goods from community locations, interacted with people involved across the packing and fulfillment process, and brought them to their homes themselves. It only made sense that the user's checkout experience be just as mobile."/>
      <FeaturedText textForProductImageLeft className="farmigo-4" header="Food Ecommerce Meets Community" text="We designed a robust e-commerce site with big product images and clear pricing. Though clarity of UI we enabled users to feel confident about what they were purchasing leading to higher checkout volume. An up-front attitude of simplicity carried through across all of Farmigo's platforms." dominantColor="lightGreen"/>
      <FeaturedText textForProductImageRight className="farmigo-5" header="Legit Delicious Food" text="Genuinely good food is an easy product to sell, the value speaks for itself. Given that the product had such an internal strength already, our job became about conveying that message as clearly and purely as possible. UI and UX were optimized for succinctness and openness." dominantColor="lightGreen"/>
      <FeaturedText textWithHeader header="Packing, Shipping, Handing Off" text="Farmigo's fulfillment team needed to keep up to demand in order to ensure orders were being packed and delivered to be picked up on time. In order to help with this process we designed a UI for in-house use which tracked how far ahead or behind food was being packed."/>
      <FeaturedImage featuredFullMatte className="farmigo-4"/>
      <FeaturedImage featuredCenter className="instructrr-next" projectName="Instructrr" projectCategory="Mobile Application" projectIndustry="Fitness" destination="../instructrr" caseStudyName="caseStudyInstructrr"/>
      <WorkTogether headline="Let's Work Together"/>
      <Footer/>
      </>
    )
  }
}

export default Farmigo;
