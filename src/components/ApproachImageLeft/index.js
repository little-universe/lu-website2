import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class ApproachImageLeft extends Component {
    render() {
        const { className, image, headline, description, style } = this.props
        return (
            <div className="content-container" style={style}>
                {image, headline, description &&
                    <div classname="container">
                        <Grid className={`approach-image-left ${className}`} container justify="center" alignItems="center">
                          <Grid container justify="center" alignItems="flex-start">
                            <Grid item md={6} xs={12} className="approach-image"><img src={image} /></Grid>
                            <Grid item md={6} xs={12} className="approach-image-text" justify="center" alignItems="center">
                              <Grid container justify="center">
                                <Grid item md={7} xs={12} className="image-text">
                                  <p className="approach-image-headline">{headline}</p>
                                  <p className="approach-image-description">{description}</p>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                    </div>
                }
            </div>
        )
    }
}
