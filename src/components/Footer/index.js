import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Transporter } from '../../orbit'
import {Link} from "react-router-dom";

export default class Footer extends Component {
  render() {
    const { featuredFull, featuredFullProject, featuredFullMatte, featuredCenter, featuredLeft, featuredRight, className, projectName, projectCategory, projectIndustry, caption, destination, caseStudyName, style, anim} = this.props
    return (
    <div className="nomargin-container" style={style}>
      {
        <div className="container">
          <Grid className={`footer-area ${className}`} container>
            <Grid item className="footer-col footer-about" md={3} xs={12}>
              <p>Little Universe</p>
              <p>260 Ainslie Street, 3rd Floor <br/> Brooklyn NY, 11211 <br /></p>
            </Grid>

            <Grid item className="footer-col footer-contact" md={3} xs={12}>
            <p>agency@littleuniverse.com <br/>@littleuniverseagency</p>
            </Grid>
            <Grid item className="footer-col footer-links" md={3} xs={12}>
            <p>
              <ul>
                <Link to="/work"><li>Our Work</li></Link>
                <Link to="/about"><li>About Us</li></Link>
                <Link to="/work-with-us"><li>Work With Us</li></Link>
                <Link to="/capabilities"><li>What We Do</li></Link>
              </ul>
            </p>
            </Grid>
          </Grid>
        </div>
      }
    </div>
    )
  }
}
