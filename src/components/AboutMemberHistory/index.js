import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class AboutMemberHistory extends Component {
    render() {
        const { className, bgImage, description, style} = this.props
        return (
            <div className="content-container" style={style}>
                {bgImage, className &&
                    <Grid className={`about-member-history ${className}`} container justify="center" alignItems="center">
                        <div className="container">
                        <Grid item md={12} xs={12} justify="center" alignItems="center">
                          <div className="member-history-container">
                            <img className="member-history-image" src={bgImage} />
                          </div>
                          <Grid container>
                            <Grid item md={12} xs={12}>
                            <p className="description">{description}</p>
                            </Grid>
                          </Grid>
                        </Grid>
                        </div>
                    </Grid>
                }
            </div>
        )
    }
}
