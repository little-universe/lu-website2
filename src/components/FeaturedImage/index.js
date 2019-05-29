import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class FeaturedImage extends Component {
    render() {
      const { featuredFull, featuredFullProject, featuredCenter, featuredLeft, featuredRight, className, projectName, projectCategory, projectIndustry, anim} = this.props
      return (
      <div className="margin-container">
        { featuredFullProject, projectName, projectCategory, projectIndustry &&
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
        }
        { featuredFull &&
          <Grid className={`featured-image featured-full ${className}`} container>
            <Grid item className={`image-background`}md={12}></Grid>
          </Grid>
        }
        { featuredCenter &&
            <Grid className={`featured-image featured-center ${className}`} container justify="center" alignItems="center">
              <Grid item className={`image-background`} md={8}></Grid>
            </Grid>
        }
      </div>
      )
    }
}
