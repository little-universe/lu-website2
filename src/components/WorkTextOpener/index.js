import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class WorkTextOpener extends Component {
    render() {
        const { className, list, paragraph } = this.props
        return (
            <>
                {list &&
                    <div classname="container">
                        <Grid className={`work-opener ${className}`} container justify="center" alignItems="center">
                          <Grid container justify="center" alignItems="flex-start">
                            <Grid item md={2} xs={12} className="opener-list">{list}</Grid>
                            <Grid item md={5} xs={12} className="opener-paragraph">{paragraph}</Grid>
                          </Grid>
                        </Grid>
                    </div>
                }
            </>
        )
    }
}
