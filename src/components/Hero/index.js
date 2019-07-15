import React, { Component } from 'react'
import WorksCarousel from '../WorksCarousel'
import Grid from '@material-ui/core/Grid'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Reveal from 'react-reveal/Reveal';

export default class Hero extends Component {

    render() {
        const { heroText, heroImage, className, headline, subhead, projectName, projectCategory, projectIndustry, featuredWorks, secondaryHero, style, anim, destination } = this.props
        return (
            <div className="nomargin-container" style={style}>
                {heroText && headline && subhead && featuredWorks && destination &&
                  <div classname="container">
                    <Grid className={`hero text-hero ${className}`} container alignItems="center">
                      <Grid item md={7} xs={12}  className="headline-text-container">
                        <Reveal effect="hero-headline-fade">
                            <p className="headline">{headline}</p>
                          <Grid container className="subhead-text-container">
                            <Grid item lg={6} md={8} xs={8}>
                              <p className="subhead">{subhead}</p>
                            </Grid>
                          </Grid>
                        </Reveal>
                      </Grid>
                      <Grid item md={5} xs={12} className="works-carousel-container right">
                        <Reveal effect="works-carousel-container-slide">
                          <WorksCarousel
                            projectName="Motivote"
                            projectCategory="Digital Product"
                            projectStatement="Engaging young voters with behavioral design"
                            projectIndustry="Advocacy Tech"
                            destination={destination}
                          />
                        </Reveal>
                      </Grid>
                    </Grid>
                  </div>
                }
                {heroText && headline && subhead && secondaryHero &&
                  <div classname="container">
                    <Grid className={`hero text-hero secondary-hero ${className}`} container alignItems="center">
                      <Grid item md={7} xs={12}  className="headline-text-container">
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
                          <Grid item className="image-background" md={12}></Grid>
                      </Grid>
                  </div>
                }
            </div>
        )
    }
}
