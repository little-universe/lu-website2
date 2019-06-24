import React, { Component } from 'react';
import { ArrowRight } from "react-feather";
import Grid from '@material-ui/core/Grid';
import { Transporter } from '../../orbit'
import {Link} from "react-router-dom";

export default class WorksCarousel extends Component {
  render() {
    const { className, projectName, projectCategory, projectIndustry, destination, caseStudyName, style, anim} = this.props
    return (
    <>
      { projectName && projectCategory && projectIndustry &&
        <Grid className={`works-carousel-wrapper ${className}`} container>
        <Grid item md={12} className="image-background"></Grid>
        <Grid className={`carousel-indicators`} container>
          <Grid item md={12}>indicators</Grid>
        </Grid>
          <Grid className={`carousel-label`} container>
            <Grid item className="label-row" md={12}>
              <div className="label-details">{projectName} <span>• {projectCategory}</span></div>
              <div className="label-arrow"><ArrowRight size={20}/></div>
            </Grid>
          </Grid>
        </Grid>
      }
    </>
    )
  }
}
