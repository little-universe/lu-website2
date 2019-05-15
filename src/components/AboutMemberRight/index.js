import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class AboutMemberLeft extends Component {
    render() {
        const { className, image, name, title, description, interests } = this.props
        return (
            <>
                {image, name, title, description &&
                    <div classname="container">
                        <Grid className={`member-image-right ${className}`} container justify="center" alignItems="center">
                          <Grid container justify="center" alignItems="flex-start">
                            <Grid item md={7} xs={12} className="member-image-text" justify="center" alignItems="center">
                              <Grid container justify="center">
                                <Grid item md={6} xs={12} className="image-text">
                                  <p className="member-image-name">{name} • {title}</p>
                                  <p className="member-image-description">{description}</p>
                                  <p className="member-image-interests">{interests}</p>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item md={5} xs={12} className="member-image"><img src={image} /></Grid>
                          </Grid>
                        </Grid>
                    </div>
                }
            </>
        )
    }
}