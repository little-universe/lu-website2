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
            <Grid item md={4}><p>We build products and integrations progressive organizations need whether they ask us to or not.</p></Grid>
          </Grid>
          <Grid container className="section-body">
            <Grid item md={4} xs={12}><ProductFeatured className="sentiment-analysis" productName="Sentiment Analysis" productDescription="Built on the Strive Platform to track sentiment of sent messages."/></Grid>
            <Grid item md={4} xs={12}><ProductFeatured className="data-tracking" productName="Data Tracking" productDescription="Built on the Strive Platform to track sentiment of sent messages."/></Grid>
            <Grid item md={4} xs={12}><ProductFeatured className="messaging-infrastructure" productName="Messaging Infrastructure" productDescription="Built on the Strive Platform to track sentiment of sent messages."/></Grid>
          </Grid>
        </Grid>
        <FeaturedText textWithMotifRight text="Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible—they need custom solutions that don't break the bank." dominantColor="pink" ctaLabel="Meet Our Team"/>
        <FeaturedText textBigStatement text="We are partners, not vendors."/>
        <FeaturedText textWithMotifLeft text="We don’t believe impact is achieved by raising tons of money to build and scale products. While vendors are trying to optimize for profitability and expand into other markets to keep up with their burn rate and appease investors, we are already building 5 other things that progressive orgs need." dominantColor="darkBlue" ctaLabel="See What We've Built"/>
        <FeaturedText textBigStatement text="Consider us your front lines."/>
        <FeaturedText textWithMotifRight text="For highly skilled technologists, the kinds of tech that most orgs need are relatively easy and fast to build. We are building a suite of internal tools that will enable us and our partners to spin up new, innovative products in response to needs and events." dominantColor="lightBlue" ctaLabel="Learn About Our Approach"/>
        <FeaturedText textBigStatement text="There is no recipe for change."/>
          <Grid container className="page-section what-we-do">
          <Grid container className="section-body">
            <Grid item md={4} className="service-card">
              <div className="card-header">Digital</div>
              <div className="card-expanded">We do it all: Design, Development, Data, and everything in between. Build the tools you need to succeed.</div>
            </Grid>
            <Grid item md={4} className="service-card">
              <div className="card-header">Strategy</div>
              <div className="card-expanded">Getting you from A to B, means thinking about Z. We're your technical advocate so you know where to make the call.</div>
            </Grid>
            <Grid item md={4} className="service-card">
              <div className="card-header">Impact</div>
              <div className="card-expanded">We define metrics for success and execute towards them. We balance foresight with opportunism to create impact.</div>
            </Grid>
          </Grid>
        </Grid>
        <WorkTogether headline="Lets Work Together"/>
        <Footer/>
      </>
    )
  }
}

export default Homepage;
