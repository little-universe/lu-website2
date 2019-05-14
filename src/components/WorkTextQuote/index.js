import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class WorkTextQuote extends Component {
    render() {
        const { className, author, paragraph } = this.props
        return (
            <>
                {author, paragraph &&
                    <div classname="container">
                        <Grid className={`work-text-quote ${className}`} container alignItems="center">
                          <Grid container justify="center">
                            <Grid item md={6} xs={12} className="work-text-paragraph">{paragraph}</Grid>
                            <Grid item md={12} xs={12} className="work-text-author">{author}</Grid>
                          </Grid>
                        </Grid>
                    </div>
                }
            </>
        )
    }
}
