import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade';

export default class Hero extends Component {
    render() {
        const { className, headline, subhead, explaination, bgImage, style } = this.props
        return (
            <div style={style}>
                {headline, subhead &&
                    <div classname="container">
                        <Grid className={`hero ${className}`} container justify="center" alignItems="center">
                            <Grid item md={12} xs={12}>
                                <div className="container">
                                    <Fade bottom distance="10px" duration={500}>
                                        <h1 className="headline">{headline}</h1>
                                        <p className="subhead">{subhead}</p>
                                    </Fade>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                }
                {bgImage &&
                    <div classname="container">
                        <Grid className={`hero ${className}`} container justify="center" alignItems="center">
                            <Grid item md={12} xs={12}>
                                <div className="container">
                                <img className="hero-image" src={bgImage}/>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                }
            </div>
        )
    }
}
