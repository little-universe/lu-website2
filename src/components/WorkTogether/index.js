import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade';
import Button from '../ui/Button';
import { Mail } from "react-feather";

export default class WorkTogether extends Component {
    render() {
        const { className, headline } = this.props
        return (
            <>
                {headline &&
                    <div classname="container">
                        <Grid className={`work-together ${className}`} container justify="center" alignItems="center">
                            <Grid item md={12} xs={12}>
                                <div className="container">
                                        <h1 className="headline">{headline}</h1>
                                        <Button className="mailUs"><Mail size={24}/></Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                }
            </>
        )
    }
}
