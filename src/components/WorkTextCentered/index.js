import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class WorkTextCentered extends Component {
    render() {
        const { className, title, paragraph, style } = this.props
        return (
            <div className="content-container" style={style}>
                {title, paragraph &&
                    <div classname="container">
                        <Grid className={`work-text-centered ${className}`} container alignItems="center">
                          <Grid container justify="center">
                            <Grid item md={12} xs={12} className="work-text-title">{title}</Grid>
                            <Grid item md={6} xs={12} className="work-text-paragraph">{paragraph}</Grid>
                          </Grid>
                        </Grid>
                    </div>
                }
            </div>
        )
    }
}
