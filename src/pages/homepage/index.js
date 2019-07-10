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

class Homepage extends Component {


  render() {

    return (
      <>
        <Hero
          heroText
          featuredWorks
          className="homepage-hero"
          headline={<>We're your <span className="headline-emphasis">innovation partner</span></>}
          subhead="Little Universe builds technology for the progressive movement."
        />
        <Grid container className="page-section products-section">
          <Grid container className="section-head">
            { /* <Grid item md={6}><p>We identify gaps between the tech you use and the results you need, and build efficient solutions that help you win.</p></Grid> */ }
            <Grid item md={4}><p>We identify opportunities for innovation to make the difference that helps you win.</p></Grid>
          </Grid>
          <Grid container className="section-body">
            <Grid item md={4} xs={12}><ProductFeatured className="sentiment-analysis" productName="Product Strategy" productDescription="Are there gaps between the tech you use and the results you need?"/></Grid>
            <Grid item md={4} xs={12}><ProductFeatured className="data-tracking" productName="Design + Engineering" productDescription="Full stack and flexible, we can be your technical team or augment the one you have."/></Grid>
            <Grid item md={4} xs={12}><ProductFeatured className="messaging-infrastructure" productName="Data + Infrastructure" productDescription="Get more out of your data with advanced architecture and machine learning."/></Grid>
          </Grid>
        </Grid>
        <FeaturedText textWithMotifRight text="'Little Universe was a game-changer for Strive Digital. As a young startup, we needed an agency that could step in and make an immediate impact. Perfectly balancing strategy with execution, they went far beyond our expectations by establishing a strategic foundation and product vision we're still benefitting from today.'" dominantColor="pink" ctaLabel="Read the Case Study"/>
        <FeaturedText textBigStatement text="We're organizers, not vendors."/>
        <FeaturedText textWithMotifLeft text="We are a team of  designers, engineers, data scientists, and organizers with deep experience in both high-tech startups and high-stakes campaigns. We're working to democratize innovation so that more campaigns and organizations have the tools they need to win, at the moment they need them most." dominantColor="darkBlue" ctaLabel="Learn More About Us"/>

        <Grid container className="page-section products-section">
          <Grid container className="section-head">
            { /* <Grid item md={6}><p>We identify gaps between the tech you use and the results you need, and build efficient solutions that help you win.</p></Grid> */ }
            <Grid item md={4}><p>You're fighting the good fight. We want to help.</p></Grid>
          </Grid>
          <Grid container className="section-body">
            <Grid item md={4} xs={12}><ProductFeatured className="sentiment-analysis" productName="Political Campaigns" productDescription="We work with campaigns in the heat of the battle to help you win."/></Grid>
            <Grid item md={4} xs={12}><ProductFeatured className="data-tracking" productName="Nonprofit / Advocacy" productDescription="We help bring technology to your organization."/></Grid>
            <Grid item md={4} xs={12}><ProductFeatured className="messaging-infrastructure" productName="Progressive Tech" productDescription="We help scale your technology for wider impact."/></Grid>
          </Grid>
        </Grid>

        <FeaturedText textWithMotifRight text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible- they need custom solutions that don’t break the bank." dominantColor="lightBlue" ctaLabel="Learn About Our Approach"/>

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
