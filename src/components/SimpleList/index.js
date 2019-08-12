import React, { Component } from 'react'
import Reveal from 'react-reveal/Reveal';
import Grid from '@material-ui/core/Grid'
import {Link} from "react-router-dom";

export default class SimpleList extends Component {
    render() {
        const { header, list, style } = this.props
        return (
            <div className="nomargin-container" style={style}>
                {header && list &&
                  <div className="container simple-list-container">
                    <Grid container className="list-section">
                      <Grid item md={4} xs={12} className="section-header">{header}</Grid>
                      <Grid item md={8} xs={12} className="section-list">
                        <ul>
                          { list.map((listItem) =>
                            <li>{listItem}</li>
                          )}
                        </ul>
                      </Grid>
                    </Grid>
                  </div>
                }
            </div>
        )
    }
}
