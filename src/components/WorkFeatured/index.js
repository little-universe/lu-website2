import React, { Component } from 'react';
import { ArrowRight } from "react-feather";
import Grid from '@material-ui/core/Grid';
import { Transporter } from '../../orbit'
import {Link} from "react-router-dom";

export default class WorkFeatured extends Component {
  render() {
    const { className, projectName, projectCategory, projectIndustry, destination, caseStudyName, style, anim} = this.props
    return (
    <>
      { projectName && projectCategory && projectIndustry &&
        <Grid className={`work-featured-project ${className}`} container>
          <Grid item md={8} className="featured-card">
            <Grid container className="featured-image">
              <Grid item md={12} className="image-background"></Grid>
            </Grid>
            <Grid container className={`featured-project-label`}>
              <div className="label-details">{projectName} <span>• {projectCategory}</span></div>
              <div className="label-arrow"><ArrowRight size={20}/></div>
            </Grid>
          </Grid>
          <Grid container className="featured-card-caption">
            <Grid item md={2} className="caption-filing">Digital Product</Grid>
            <Grid item md={1}></Grid>
            <Grid item md={5} className="caption-text">Strive Digital offers the best of broadcast and peer-to-peer texting for movements that put people first.</Grid>
          </Grid>
        </Grid>
      }
    </>
    )
  }
}
