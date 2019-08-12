import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hero from '../../components/Hero';
import WorkTogether from '../../components/WorkTogether';
import SimpleList from '../../components/SimpleList';
import Footer from '../../components/Footer';
import { preloadImage } from '../../preload'

import { Transporter } from '../../orbit';
import Fade from 'react-reveal/Fade';

class Factsheet extends Component {
  state = {
    hovered: undefined,
    route: 'factsheet'
  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Hero
          heroText
          secondaryHero
          className="factsheet-hero"
          headline={<>Need help building a new product?<span className="headline-emphasis"></span></>}
          subhead="We're here for you. Check out our capabilities below."
        />
        <div className="factsheet-description">
          <Grid container className="description-text">
            <Grid item md={4} className="text-header">Overview</Grid>
            <Grid item md={8} className="text-body">We're a small digital agency with a big focus on impact. We want to work with you in order to build stronger movements, more impactful products, with leaner product strategies and thinking. Heres what we do and what we use to do it.</Grid>
          </Grid>
          <Grid container className="description-list">
            <Grid item md={4}></Grid>
            <Grid item md={8} className="list-text">
              <ul>
                <li>Product Strategy</li>
                <li>MVP Development</li>
                <li>Customer Development</li>
                <li>Scaling Your Product</li>
                <li>Scaling Your Team</li>
              </ul>
            </Grid>
          </Grid>
        </div>
        <SimpleList header="Data Visualizations" list={["Interactive Data Visualizations"]}/>
        <SimpleList header="Data Engineering" list={["Apache Spark", "Databricks", "Airflow", "ETL", "Feature Engineering", "Model productionization", "web scraping", "data standardization and normalization", "data automation", "productionization"]}/>
        <SimpleList header="SQL Analytics" list={["High performance data analytics SQL", "Column store databases", "Microsoft SQL Server", "Redshift", "spark SQL"]}/>
        <WorkTogether headline="Let's Work Together"/>
        <Footer/>
      </>
    )
  }
}

export default Factsheet;
