import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade';

export default class Hero extends Component {
    render() {
        const { className, headline, subhead, explaination, bgImage } = this.props
        return (
            <>
                {bgImage &&
                    <Grid className={`hero ${className}`} container justify="center" alignItems="center">
                        <div className="container">
                            <img className="hero-image" src={bgImage} />
                        </div>
                    </Grid>
                }
                {headline &&
                    <div classname="container">
                        <Grid className={`hero ${className}`} container justify="center" alignItems="center">
                            <Grid item md={12} xs={12}>
                                <div className="container">
                                    <Fade bottom distance="5px" duration={250}>
                                        <h1 className="headline">{headline}</h1>
                                        <p className="subhead">{subhead}</p>

                                    </Fade>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                }
            </>
        )
    }
}
