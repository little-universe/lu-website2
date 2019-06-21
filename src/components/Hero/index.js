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
                    <Grid className={`hero text-hero ${className}`} container alignItems="center">
                      <Grid item md={6} xs={12}  className="headline-text-container">
                        <Fade top distance="30px" duration={500} delay={300}>
                          <p className="headline">{headline}</p>
                        </Fade>
                        <Fade top distance="30px" duration={500} delay={400}>
                          <Grid container xs={7}>
                            <p className="subhead">{subhead}</p>
                          </Grid>
                        </Fade>
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
