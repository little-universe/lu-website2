import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade';

export default class Hero extends Component {
    render() {
        const { heroText, heroImage, className, headline, subhead, projectName, projectCategory, projectIndustry, style, anim } = this.props
        return (
            <div className="nomargin-container" style={style}>
                {heroText && headline && subhead &&
                  <div classname="container">
                    <Fade bottom distance="10px" duration={1000}>
                      <Grid className={`hero text-hero ${className}`} container justify="center" alignItems="center">
                          <Grid item md={12} xs={12}>
                            <p className="headline">{headline}</p>
                            <p className="subhead">{subhead}</p>
                          </Grid>
                      </Grid>
                    </Fade>
                  </div>
                }
                {heroImage &&
                  <div classname="container">
                      <Grid className={`hero image-hero ${className}`} container justify="center" alignItems="center">
                          <Grid item className="image-background" md={12}>
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
            </div>
        )
    }
}
