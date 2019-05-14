import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class WorkImageLeft extends Component {
    render() {
        const { className, image, headline, description } = this.props
        return (
            <>
                {image, headline, description &&
                    <div classname="container">
                        <Grid className={`work-image-left ${className}`} container justify="center" alignItems="center">
                          <Grid container justify="center" alignItems="flex-start">
                            <Grid item md={6} xs={12} className="work-image"><img src={image} /></Grid>
                            <Grid item md={6} xs={12} className="work-image-text" justify="center" alignItems="center">
                              <Grid container justify="center" alignItems="center">
                                <Grid item md={6} xs={12} className="image-text">
                                  <p className="work-image-headline">{headline}</p>
                                  <p className="work-image-description">{description}</p>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                    </div>
                }
            </>
        )
    }
}
