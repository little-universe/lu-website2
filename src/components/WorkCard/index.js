import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

export default class WorkCard extends Component {
    render() {
        const { className, projectName, projectType, projectIndustry, bgImage, style, anim } = this.props
        return (
            <div className="content-container" style={style}>
                {bgImage, projectName &&
                    <div classname="container">
                        <Grid className={`work-card ${className}`} container alignItems="flex-end">
                            <Grid item md={12} xs={12}>
                                {anim !== "showing" &&
                                <div className="container">
                                        <p className="project-details">
                                          <span className="project-name">{projectName}</span><br/>
                                          <span className="project-type">{projectType} • {projectIndustry}</span>
                                        </p>
                                </div>}
                                <img className="work-card-image" src={bgImage} />
                            </Grid>
                        </Grid>
                    </div>
                }
            </div>
        )
    }
}
