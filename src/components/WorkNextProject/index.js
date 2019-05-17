import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import {Link} from "react-router-dom";

export default class WorkNextProject extends Component {
    render() {
        const { className, projectName, projectType, projectIndustry, image, style, destination } = this.props
        return ( className ? (
            <Grid item md={5} xs={12} className="image-container" style={style}>
              <Link to={destination} className="work-next-link">
                <div className="next-project-label">Next Project</div>
                <div className="next-project-image" />
                <p className="project-details">
                  <span className="project-name">{projectName}</span><br/>
                  <span className="project-type">{projectType} • {projectIndustry}</span>
                </p>
              </Link>
            </Grid>
          ) : null
        )
    }
}
