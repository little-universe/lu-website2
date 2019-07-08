import React, { Component } from 'react'
import WorksCarousel from '../WorksCarousel'
import Grid from '@material-ui/core/Grid'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Reveal from 'react-reveal/Reveal';

export default class Hero extends Component {

    render() {
        const { heroText, heroImage, className, headline, subhead, projectName, projectCategory, projectIndustry, featuredWorks, secondaryHero, style, anim } = this.props
        return (
            <div className="nomargin-container" style={style}>
                {heroText && headline && subhead && featuredWorks &&
                  <div classname="container">
                    <Grid className={`hero text-hero ${className}`} container alignItems="center">
                      <Grid item md={7} xs={6}  className="headline-text-container">
                        <Reveal effect="hero-headline-fade">
                            <p className="headline">{headline}</p>
                          <Grid container className="subhead-text-container">
                            <Grid item lg={5} md={8} xs={8}>
                              <p className="subhead">{subhead}</p>
                            </Grid>
                          </Grid>
                        </Reveal>
                      </Grid>
                      <Grid item md={5} xs={6} className="works-carousel-container right">
                        <Reveal effect="works-carousel-container-slide">
                          <WorksCarousel
                            projectName="Motivote"
                            projectCategory="Digital Product"
                            projectIndustry="Advocacy Tech"
                          />
                        </Reveal>
                      </Grid>
                    </Grid>
                  </div>
                }
                {heroText && headline && subhead && secondaryHero &&
                  <div classname="container">
                    <Grid className={`hero text-hero secondary-hero ${className}`} container alignItems="center">
                      <Grid item md={7} xs={6}  className="headline-text-container">
                        <Reveal effect="hero-headline-fade">
                            <p className="headline">{headline}</p>
                          <Grid container className="subhead-text-container">
                            <Grid item lg={5} md={8} xs={8}>
                              <p className="subhead">{subhead}</p>
                            </Grid>
                          </Grid>
                        </Reveal>
                      </Grid>
                    </Grid>
                  </div>
                }
                {heroImage &&
                  <div classname="container">
                      <Grid className={`hero image-hero ${className}`} container justify="center" alignItems="center">
                          <Grid item className="image-background" md={12}>
                          {anim === "shown" &&
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
