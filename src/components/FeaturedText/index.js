import React, { Component } from 'react'
import MotifAnimation from '../MotifAnimation';
import Grid from '@material-ui/core/Grid'
import {Link} from "react-router-dom";

export default class FeaturedText extends Component {
    render() {
        const { textWithList, textWithHeader, textWithCaption, textWithMotif, list, header, caption, text, status, linkTo, linkName, className, style, anim, dominantColor } = this.props
        return (
            <div className="nomargin-container" style={style}>
                {textWithList && list && text &&
                  <div classname="container">
                    <Grid container className={`featured-text text-with-list text-with-list-desktop ${className}`} justify="center" alignItems="center">
                      <Grid item className="text-body" md={8} xs={12} justify="center" alignItems="center">
                        <Grid container justify="center" alignItems="flex-start">
                          <Grid item className="text-list" md={2} xs={12}>
                            <ul>
                              { list.map((listItem) =>
                                <li>{listItem}</li>
                              )}
                            </ul>
                          </Grid>
                          <Grid item md={2} xs={0}></Grid>
                          <Grid item className="text-statement" md={8} xs={12}>{text}</Grid>
                        </Grid>
                      </Grid>
                      <Grid container className="text-additional" md={8} xs={12} justify="center">
                        <Grid item className="additional-text-1" md={4} xs={12}>{status}</Grid>
                        <Grid item className="additional-text-2" md={8} xs={12}><a className="linkTo" href={`${linkTo}`}>{linkName}</a></Grid>
                      </Grid>
                    </Grid>
                    <Grid container className={`featured-text text-with-list text-with-list-mobile ${className}`} justify="center" alignItems="center">
                      <Grid item className="text-body" md={8} xs={12} justify="center" alignItems="center">
                        <Grid container justify="center" alignItems="flex-start">
                          <Grid item className="text-statement" md={8} xs={12}>{text}</Grid>
                          <Grid item className="text-list" md={2} xs={12}>
                            <ul>
                              { list.map((listItem) =>
                                <li>{listItem}</li>
                              )}
                            </ul>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid container className="text-additional" md={8} xs={12} justify="center">
                        <Grid item className="additional-text-1" md={4} xs={12}>{status}</Grid>
                        <Grid item className="additional-text-2" md={8} xs={12}><a className="linkTo" href={`${linkTo}`}>{linkName}</a></Grid>
                      </Grid>
                    </Grid>
                  </div>
                }
                {textWithHeader && header && text &&
                  <div classname="container">
                    <Grid container className={`featured-text text-with-list ${className}`} justify="center" alignItems="center">
                      <Grid item className="text-body" md={8} xs={12} justify="center" alignItems="center">
                        <Grid container justify="center" alignItems="flex-start">
                          <Grid item className="text-header" md={2} xs={12}>
                            {header}
                          </Grid>
                          <Grid item md={2} xs={0}></Grid>
                          <Grid item className="text-statement" md={8} xs={12}>{text}</Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                }
                { textWithMotif && text && dominantColor &&
                  <div classname="nomargin-container">
                    <Grid container className={`featured-text color-text ${className} ${dominantColor}`} alignItems="center">
                      <Grid item className="text-body" md={6} justify="center">
                        <Grid item className="text-statement" md={10} xs={12}>{text}</Grid>
                      </Grid>
                      <Grid item md={1}/>
                      <Grid item className="text-motif" md={5} justify="center">
                        <MotifAnimation motifWithCTA/>
                      </Grid>
                    </Grid>
                  </div>
                }
            </div>
        )
    }
}
