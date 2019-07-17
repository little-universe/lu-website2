import React, { Component } from 'react';
import { ArrowRight } from "react-feather";
import Grid from '@material-ui/core/Grid';
import { Transporter } from '../../orbit'
import {Link} from "react-router-dom";
import Reveal from 'react-reveal/Reveal';

export default class WorksCarousel extends Component {
  render() {
    const { className, projectName, projectCategory, ctaBox, projectStatement, projectIndustry, destination, caseStudyName, caseStudy, ctaLabel, style, anim} = this.props
    return (
    <>
      { projectName && projectCategory && projectIndustry &&
        <Grid className={`works-carousel-wrapper ${className}`} container>
        <Grid item md={12} className="image-background"></Grid>
        <Reveal effect="carousel-label-slideUp">
          <Grid className={`carousel-indicators`} container>
            <Grid item md={12}></Grid>
          </Grid>
        </Reveal>
        <Reveal effect="carousel-label-slideUp">
          <Link to={destination} className="carousel-label-link">
            <Grid className={`carousel-label label-featured-additional`} container>
                <Grid item className="label-row" md={12}>
                  <div className="label-details">Client Spotlight</div>
                </Grid>
            </Grid>
            <Grid className={`carousel-label`} container>
                <Grid item className="label-row" md={12}>
                  <div className="label-details">{projectName} <span>• {projectStatement}</span></div>
                  <div className="label-arrow"><ArrowRight size={20}/></div>
                </Grid>
            </Grid>
          </Link>
          </Reveal>
        </Grid>
      }
      { className && ctaLabel && ctaBox &&
        <Grid className={`works-carousel-wrapper ${className}`} container>
          <Grid item md={12} className="image-background"></Grid>
          <Reveal effect="carousel-label-slideUp" >
            <Link to={destination} className="carousel-label-link">
              <Grid className={`carousel-label`} container>
                  <Grid item className="label-row" md={12}>
                    <div className="label-details">{ctaLabel}</div>
                    <div className="label-arrow"><ArrowRight size={20}/></div>
                  </Grid>
              </Grid>
            </Link>
          </Reveal>
        </Grid>
      }
      { className && ctaLabel && caseStudy &&
        <Grid className={`works-carousel-wrapper ${className}`} container>
          <Grid item md={12} className="image-background"></Grid>
          <Reveal effect="carousel-label-slideUp" >
            <Link to={destination} className="carousel-label-link">
            <Grid className={`carousel-label label-featured-additional`} container>
                <Grid item className="label-row" md={12}>
                  <div className="label-details">View The Case Study</div>
                </Grid>
            </Grid>
              <Grid className={`carousel-label`} container>
                  <Grid item className="label-row" md={12}>
                    <div className="label-details">{ctaLabel}</div>
                    <div className="label-arrow"><ArrowRight size={20}/></div>
                  </Grid>
              </Grid>
            </Link>
          </Reveal>
        </Grid>
      }
    </>
    )
  }
}
