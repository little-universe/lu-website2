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

class Outraise extends Component {
  state = {
    hovered: undefined,
    route: 'outraise'

  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
      <Transporter name="caseStudyOutraise" show={true} duration={500} properties={[]}>
        <Hero heroImage className="outraise-hero" projectName="Outraise" projectCategory="Digital Product" projectIndustry="Advocacy Tech"/>
      </Transporter>
      <FeaturedText textWithCardRight className="" status="Ongoing Project" list={["Digital Product", "UX/UI", "Front End", "Back End"]} projectType="Advocacy Tech" projectTitle="Outraise" text="Outraise is a digital product designed to enable small scale, intimate fundraising for progressive political causes. We designed and built a mobile-first web app which made collecting donations from friends easy, fun, and engaging." dominantColor="lightGrey" ctaLabel="Instructrr"/>
      <FeaturedImage featuredFullMatte className="outraise-4"/>
      <FeaturedText textWithHeader header="Party For Change" text="By listening to insights gained from a prototype the founders had made we quickly understood OutRaise's core interaction to be centered around sharing event invitations. We designed a clear flow for donations stemming from our understanding of this initial context, making improvements to UX and UI along the way."/>
      <FeaturedText textForProductImageLeft className="outraise-1" header="All Event Details In One Spot" text="A single page with a unique URL makes sharing the event with friends easy and straightforward. We designed a clean event detail page which balanced graphical content and informational content. Using strong typography and building clarity through strong colors allowed us to present a simple and clear page." dominantColor="lightBlue"/>
      <FeaturedText textForProductImageRight className="outraise-2" header="RSVP Made Easy As Pie" text="RSVPing to an event from your friend is a single screen, single CTA affair. We designed a clean UI for collecting the necessary data from the user and stripped away distractions." dominantColor="darkBlue"/>
      <FeaturedText textForProductImageLeft className="outraise-3" header="Gratifying and Targeted Follow Up" text="We designed the donation flow to be gratifying across all touchpoints. When a donation to the cause for the event is verified we show the user a playful graphic and well organized details about their event. We also use this as an opportunity to direct them towards sharing and promoting the event within their circles." dominantColor="lightBlue"/>
      <FeaturedText textWithHeader header="Clarity and Familiarity" text="We chose to pair two very specific UI elements together: a personal message from the host of the event, and information about the donation beneficiary. We did this in order to increase the user's perception of the ask for a donation coming specifically from their friend, the host."/>
      <FeaturedImage featuredFullMatte className="outraise-5"/>
      <FeaturedImage featuredCenter className="votecrew-next" projectName="Vote Crew" projectCategory="Digital Product" projectIndustry="Advocacy Tech" destination="../votecrew" caseStudyName="caseStudyVotecrew"/>
      <WorkTogether headline="Let's Work Together"/>
      <Footer/>
      </>
    )
  }
}

export default Outraise;
