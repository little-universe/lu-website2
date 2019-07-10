import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade';
import Button from '../ui/Button';
import { Mail } from "react-feather";

export default class WorkTogether extends Component {
    render() {
        const { className, headline, fullHeight } = this.props
        return (
            <>
                {headline &&
                    <div classname="container">
                        <Grid className={`work-together ${className}`} container justify="center" alignItems="center">
                            <Grid item md={12} xs={12}>
                                <div className="container">
                                        <p className="headline">{headline}</p>
                                        <Button mailUs className="mailUs">Send Us Mail</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                }
            </>
        )
    }
}
