import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Logo from '../../components/Logo';
import Hero from '../../components/Hero';
import MotifAnimation from '../../components/MotifAnimation';
import FeaturedText from '../../components/FeaturedText';
import WorkFeatured from '../../components/WorkFeatured';
import Button from '../../components/ui/Button';
import Fade from 'react-reveal/Fade';
import Grid from '@material-ui/core/Grid';


class Homepage extends Component {


  render() {

    return (
      <>
        <Hero
          heroText
          featuredWorks
          className="homepage-hero"
          headline={<>We're doing impact <span className="headline-emphasis">differently</span></>}
          subhead="Little Universe is a digital product design and development agency located in Brooklyn, NY."
        />
        <Grid container className="movement-section page-section">
          <Grid item md={5} className="overlap-right">
            <MotifAnimation gravityAnimation/>
          </Grid>
          <Grid item md={7} className="section-right movement-statement"><p>Movements need fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible—they need custom solutions that don't break the bank.</p></Grid>
          <Grid container className="overlap-bottom">
            <Grid item md={5}></Grid>
            <Grid item md={7}><Button callToAction className="movements" actionText="Meet Our Team"/></Grid>
          </Grid>
        </Grid>
        <Grid container className="statement-section page-section">
          <Grid item md={8} className="partners-not-vendor">We're Partners Not Vendors</Grid>
        </Grid>
        <Grid container className="movement-section page-section">
          <Grid item md={7} className="section-left movement-statement"><p>We don’t believe impact is achieved by raising tons of money to build and scale products. While vendors are trying to optimize for profitability and expand into other markets to keep up with their burn rate and appease investors, we are already building 5 other things that progressive orgs need.</p></Grid>
          <Grid item md={5} className="overlap-left">
            <MotifAnimation orbitAnimation/>
          </Grid>
          <Grid container className="overlap-bottom">
            <Grid item md={5}></Grid>
            <Grid item md={7}><Button callToAction className="movements" actionText="See What We've Built"/></Grid>
          </Grid>
        </Grid>
        <Grid container className="text-section page-section">
          <Grid item md={11} className="text-statement">The most useful products are usually the ones you didn't know you needed, and that didn't exist when you started.</Grid>
        </Grid>
        <WorkFeatured
          projectName="Strive Digital"
          projectCategory="Digital Product"
          projectIndustry="Advocacy Tech"
        />


        <Grid container className="callout-statement" alignItems="center">
          <Grid item xs={12} md={8}>
            <div className="callout-text">
              Movements needs fast, responsive, deeply knowledgeable technologists who can build world class products that connect the dots, meet real, immediate needs, and deliver impact as efficiently as possible. They need custom solutions that don't break the bank.
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="callout-cta">
              <button>Meet Our Team</button>
            </div>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default Homepage;
