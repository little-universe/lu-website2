import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Logo from '../../components/Logo';
import Hero from '../../components/Hero';
import MotifAnimation from '../../components/MotifAnimation';
import FeaturedText from '../../components/FeaturedText';
import WorkFeatured from '../../components/WorkFeatured';
import ProductFeatured from '../../components/ProductFeatured';
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
          headline={<>We're doing impact <span className="headline-emphasis">differently</span></>}
          subhead="Little Universe is a digital product design and development agency located in Brooklyn, NY."
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
      </>
    )
  }
}

export default Homepage;
