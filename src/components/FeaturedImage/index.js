import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

export default class FeaturedImage extends Component {
  render() {
    const { featuredFull, featuredFullProject, featuredFullMatte, featuredCenter, featuredLeft, featuredRight, className, projectName, projectCategory, projectIndustry, caption, style, anim} = this.props
    return (
    <div className="margin-container" style={style}>
      { featuredFullProject, projectName, projectCategory, projectIndustry &&
        <div className="container">
          <Grid className={`featured-image featured-full ${className}`} container>
            <Grid item className={`image-background`}md={12}>
              {anim !== "showing" &&
                <div className="project-details">
                  <span className="project-name">{projectName}</span><br/>
                  <span className="project-type">{projectCategory} • {projectIndustry}</span>
                </div>
              }
            </Grid>
          </Grid>
        </div>
      }
      { featuredFull &&
        <div className="container">
          <Grid className={`featured-image featured-full ${className}`} container>
            <Grid item className={`image-background`}md={12}></Grid>
          </Grid>
        </div>
      }
      { featuredFullMatte &&
        <div className="container">
          <Grid className={`featured-image featured-full featured-full-matte ${className}`} container>
            <Grid item className={`image-background`}md={12}></Grid>
          </Grid>
        </div>
      }
      { featuredCenter, caption &&
        <div className="container">
          <Grid className={`featured-image featured-center ${className}`} container justify="center" alignItems="center">
            <Grid item className={`image-background`} md={8}></Grid>
          </Grid>
          <Grid className={`featured-caption`} container justify="center" alignItems="center">
            <Grid item className={`image-caption`} md={8}>{caption}</Grid>
          </Grid>
        </div>
      }
    </div>
    )
  }
}
