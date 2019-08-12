import React, { Component } from 'react'
import Reveal from 'react-reveal/Reveal';
import Grid from '@material-ui/core/Grid'
import {Link} from "react-router-dom";

export default class SimpleList extends Component {
    render() {
        const { listData, style } = this.props

        return (
            <div className="nomargin-container" style={style}>
              <div className="container simple-list-container">
                { listData.map(listItem =>
                  <Grid container className="list-section">
                    <Grid item md={4} xs={12} className="section-header">
                      {listItem.fields.Name}
                    </Grid>
                    <Grid item md={8} xs={12} className="section-list">
                      <ul>
                        { listItem.fields.Details.map(detail =>
                          <li>{detail}</li>
                        )}
                      </ul>
                    </Grid>
                  </Grid>
                )}
              </div>
            </div>
        )
    }
}
