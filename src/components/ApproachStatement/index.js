import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class ApproachStatement extends Component {
    render() {
        const { className, title, paragraph, style } = this.props
        return (
            <div className="content-container" style={style}>
                {title &&
                    <Grid className={`approach-statement ${className}`} container justify="center" alignItems="center">
                      <Grid item md={12} xs={12} className="approach-card">
                        <Grid container justify="center" alignItems="center">
                            <Grid item md={12} xs={12} className="approach-statement-title">{title}</Grid>
                            <Grid item md={6} xs={12} className="approach-statement-paragraph">{paragraph}</Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                }
            </div>
        )
    }
}
