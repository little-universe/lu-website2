import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Logo from '../../components/Logo';
import Hero from '../../components/Hero';
import FeaturedText from '../../components/FeaturedText';
import WorkFeatured from '../../components/WorkFeatured';
import ProductFeatured from '../../components/ProductFeatured';
import WorkTogether from '../../components/WorkTogether';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import Grid from '@material-ui/core/Grid';
import { ArrowDown } from "react-feather";
import { preloadImage } from '../../preload'

class Homepage extends Component {

  componentDidMount() {
    [
      require("../../assets/team/team-1-small.jpg"),
      require("../../assets/office/desk.jpg")
    ].forEach(preloadImage)
  }

  render() {

    return (
      <>
        <Hero
          heroText
          featuredWorks
          className="homepage-hero"
          destination="/motivote"
          headline={<>Hi <span className="emoji">👋</span> We're <span className="headline-emphasis">Little Universe.</span></>}
          subhead="We make innovation faster, cheaper, and easier for progressive causes."
        />
        <Grid container className="page-section arrow-down">
          <Grid item md={12}>
            <div className="arrow-icon"><ArrowDown size={20}/></div>
          </Grid>
        </Grid>
        <Grid container className="page-section products-section">
          <Grid container className="section-head">
            { /* <Grid item md={6}><p>We identify gaps between the tech you use and the results you need, and build efficient solutions that help you win.</p></Grid> */ }
            <Grid item md={6}><p>We identify opportunities for innovation to make the difference that helps you win.</p></Grid>
          </Grid>
          <Grid container className="section-body">
            <Grid item md={4} xs={12}><ProductFeatured className="sentiment-analysis" productName="Product Strategy" productDescription="Are there gaps between the tech you use and the results you need? Could your dev team benefit from seasoned product leadership to meet the challenges of greater scale or a growing list of feature requests? You know your work best, but having tech partners who have written field plans, managed campaign staff and volunteers, and raised millions online helps ensure we are all focused on the outcomes that matter, not just building cool tech."/></Grid>
            <Grid item md={4} xs={12}><ProductFeatured className="data-tracking" productName="Design + Engineering" productDescription="Full stack and flexible, we can be your technical team or augment the one you have. We’ll guide you to the best tech for the job, or work with what you already have. We are a cohesive team - we work fast, build to the highest standards of quality, and have the chops to tackle the hardest technical problems."/></Grid>
            <Grid item md={4} xs={12}><ProductFeatured className="messaging-infrastructure" productName="Data + Infrastructure" productDescription="Get more out of your data with advanced architecture and machine learning. Our back-end team specializes in working with YUGE data. We love unstructured, complex data sets, and messy integration challenges that are blocking our clients’ in-house developers. We have been working with progressive voter, volunteer, and donor data for a decade, and have a deep knowledge of the legal, technical, and personal landscapes that shape the space."/></Grid>
          </Grid>
        </Grid>
        <FeaturedText quoteTextRight destination="/strive" className="strive-hero" text="Little Universe was a game-changer for Strive Digital. As a young startup, we needed an agency that could step in and make an immediate impact. Perfectly balancing strategy with execution, they went far beyond our expectations by establishing a strategic foundation and product vision we're still benefitting from today." dominantColor="pink" ctaLabel="Read the Case Study"/>
        <FeaturedText textBigStatement text="We're organizers, not vendors."/>
        <FeaturedText textWithMotifLeft destination="/about" className="team-motif" text="We are a team of  designers, engineers, data scientists, and organizers with deep experience in both high-tech startups and high-stakes campaigns. We're working to democratize innovation so that more campaigns and organizations have the tools they need to win, at the moment they need them most." dominantColor="darkBlue" ctaLabel="Learn More About Us"/>

        <Grid container className="page-section products-section">
          <Grid container className="section-head">
            { /* <Grid item md={6}><p>We identify gaps between the tech you use and the results you need, and build efficient solutions that help you win.</p></Grid> */ }
            <Grid item md={4}><p>You're fighting the good fight. We want to help.</p></Grid>
          </Grid>
          <Grid container className="section-body">
            <Grid item md={4} xs={12}><ProductFeatured className="political-campaigns" productName="Political Campaigns" productDescription="We work with campaigns in the heat of the battle to help you win."/></Grid>
            <Grid item md={4} xs={12}><ProductFeatured className="nonprofit" productName="Nonprofit / Advocacy" productDescription="We help bring technology to your organization."/></Grid>
            <Grid item md={4} xs={12}><ProductFeatured className="progressive-tech" productName="Progressive Tech" productDescription="We help scale your technology for wider impact."/></Grid>
          </Grid>
        </Grid>

        <FeaturedText textWithMotifRight className="contact-motif" destination="/work-with-us" text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible- they need custom solutions that don’t break the bank." dominantColor="lightBlue" ctaLabel="Work With Us"/>

        { /*
        <FeaturedText textBigStatement text="There is no recipe for change."/>
          <Grid container className="page-section what-we-do">
          <Grid container className="section-body">
            <Grid item md={4} xs={12} className="service-card">
              <div className="card-header">Digital</div>
              <div className="card-expanded">We do it all: Design, Development, Data, and everything in between. Build the tools you need to succeed.</div>
            </Grid>
            <Grid item md={4} xs={12} className="service-card">
              <div className="card-header">Strategy</div>
              <div className="card-expanded">Getting you from A to B, means thinking about Z. We're your technical advocate so you know where to make the call.</div>
            </Grid>
            <Grid item md={4} xs={12} className="service-card">
              <div className="card-header">Impact</div>
              <div className="card-expanded">We define metrics for success and execute towards them. We balance foresight with opportunism to create impact.</div>
            </Grid>
          </Grid>
        </Grid>
        */ }
        <WorkTogether headline="Let's Work Together"/>
        <Footer/>
      </>
    )
  }
}

export default Homepage;
