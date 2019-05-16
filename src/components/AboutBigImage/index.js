import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class AboutBigImage extends Component {
    render() {
        const { className, bgImage, style } = this.props
        return (
            <div className="content-container" style={style}>
                {bgImage, className &&
                    <Grid className={`about-image ${className}`} container justify="center" alignItems="center">
                        <div className="container">
                            <img className="about-big-image" src={bgImage} />
                        </div>
                    </Grid>
                }
                </div>
        )
    }
}
