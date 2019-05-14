import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class WorkNextProject extends Component {
    render() {
        const { className, projectName, projectType, projectIndustry, image } = this.props
        return (
            <>
                {image, className &&
                    <Grid className={`work-next-project ${className}`} container justify="center" alignItems="center">
                      <Grid item md={5} xs={12} className="image-container">
                        <div className="next-project-label">Next Project</div>
                        <div className="next-project-image" />
                        <p className="project-details">
                          <span className="project-name">{projectName}</span><br/>
                          <span className="project-type">{projectType} • {projectIndustry}</span>
                        </p>
                      </Grid>
                    </Grid>
                }
            </>
        )
    }
}
