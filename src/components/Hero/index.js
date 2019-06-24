import React, { Component } from 'react'
import WorksCarousel from '../WorksCarousel'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade';



export default class Hero extends Component {

    render() {
        const { heroText, heroImage, className, headline, subhead, projectName, projectCategory, projectIndustry, featuredWorks, style, anim } = this.props
        return (
            <div className="nomargin-container" style={style}>
                {heroText && headline && subhead && featuredWorks &&
                  <div classname="container">
                    <Grid className={`hero text-hero ${className}`} container alignItems="center">
                      <Grid item md={7} xs={12}  className="headline-text-container">
                          <p className="headline">{headline}</p>
                          <Grid container className="subhead-text-container">
                          <Grid item lg={4} md={8} xs={8}>
                            <p className="subhead">{subhead}</p>
                          </Grid>
                          </Grid>
                      </Grid>
                      <Grid item md={5} xs={12} className="works-carousel-container">
                        <WorksCarousel
                          projectName="Motivote"
                          projectCategory="Digital Product"
                          projectIndustry="Advocacy Tech"
                        />
                      </Grid>
                    </Grid>
                  </div>
                }
                {heroImage &&
                  <div classname="container">
                      <Grid className={`hero image-hero ${className}`} container justify="center" alignItems="center">
                          <Grid item className="image-background" md={12}>
                          {anim === "shown" &&
                          <Fade bottom distance="10px" duration={1000} delay={250}>
                            <div className="project-details">
                              <span className="project-name">{projectName}</span><br/>
                              <span className="project-type">{projectCategory} • {projectIndustry}</span>
                            </div>
                            </Fade>
                          }
                          </Grid>
                      </Grid>
                  </div>
                }
            </div>
        )
    }
}
