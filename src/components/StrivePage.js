import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Hero from './Hero'
import Fade from 'react-reveal/Fade';
import { Transporter } from '../orbit'

export default class StrivePage extends Component {
    state = {}
    render() {
        return (
            <div style={{width: '100%'}}>
                <Transporter name="caseStudyStrive" show={true} overrides={{marginTop: '80px'}}>
                    <div style={{ width: '100%', minHeight: '1vh' }}>
                        <Hero
                            className="hero-strive project-hero"
                        />


                        <div className="container">
                            <Fade bottom distance="20px" duration={700} cascade>
                                <Grid container className="projectAbout" spacing={40}>
                                    <Grid item md={8} xs={12} className="aboutItem">
                                        <h2>Strive Digital is multi-channel messaging platform used by nonprofits and campaigns across the country to recruit and activate their supporters.</h2>
                                    </Grid>
                                </Grid>
                            </Fade>
                        </div>
                    </div>
                </Transporter>
            </div>
        )
    }
}
