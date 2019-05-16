import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class WorkBigImage extends Component {
    render() {
        const { className, bgImage, style } = this.props
        return (
            <div className="content-container" style={style}>
                {bgImage, className &&
                    <Grid className={`work-card ${className}`} container justify="center" alignItems="center">
                        <div className="container">
                            <img className="work-big-image" src={bgImage} />
                        </div>
                    </Grid>
                }
                </div>
        )
    }
}
