import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class WorkTextOpener extends Component {
    render() {
        const { className, list, paragraph, style } = this.props
        return (
            <div className="content-container" style={style}>
                {list &&
                    <div classname="container">
                        <Grid className={`work-opener ${className}`} container justify="center" alignItems="center">
                          <Grid container justify="center" alignItems="flex-start">
                            <Grid item md={2} xs={12} className="opener-list">
                              <ul>
                                { list.map((listItem) =>
                                  <li>{listItem}</li>
                                )}
                              </ul>
                            </Grid>
                            <Grid item md={5} xs={12} className="opener-paragraph">{paragraph}</Grid>
                          </Grid>
                        </Grid>
                    </div>
                }
            </div>
        )
    }
}
