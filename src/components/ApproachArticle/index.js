import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class ApproachArticle extends Component {
    render() {
        const { className, title, paragraph, style } = this.props
        return (
            <div className="content-container" style={style}>
                {title &&
                        <Grid className={`approach-article ${className}`} container alignItems="center">
                          <Grid container justify="center" alignItems="flex-start">
                            <Grid item md={1} xs={12} className="article-title">{title}</Grid>
                            <Grid item md={1} xs={12}/>
                            <Grid item md={5} xs={12} className="article-summary">{paragraph}</Grid>
                          </Grid>
                        </Grid>

                }
            </div>
        )
    }
}
