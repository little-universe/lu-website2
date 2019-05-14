import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class WorkTextMetric extends Component {
    render() {
        const { className, metricNumber, metricName } = this.props
        return (
            <>
                {metricNumber, metricName &&
                    <div classname="container">
                        <Grid className={`work-text-metric ${className}`} container alignItems="center">
                          <Grid container justify="center">
                            <Grid item md={6} xs={12}>
                              <h1 className="work-metric-number">{metricNumber}</h1>
                              <p className="work-metric-name">{metricName}</p>
                            </Grid>
                          </Grid>
                        </Grid>
                    </div>
                }
            </>
        )
    }
}
