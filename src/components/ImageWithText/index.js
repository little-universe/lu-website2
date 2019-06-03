import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";

export default class ImageWithText extends Component {
  render() {
    const { imageLeft, imageRight, imageFull, imageMatte, headline, description, memberName, memberTitle, className, style, anim} = this.props
    return (
    <div className="margin-container" style={style}>
      { imageLeft && imageFull && headline && description &&
        <div className="container">
          <Grid className={`iwt-container iwt-left ${className}`} container alignItems="center">
            <Grid item className="image-image-wrapper" md={5} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item className="image-background image-background-full" md={12}></Grid>
              </Grid>
            </Grid>
            <Grid item className="image-text-wrapper" md={7} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item md={6} xs={12} className="image-text">
                  <p className="text-headline">{headline}</p>
                  <p className="text-description">{description}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      }
      { imageLeft && imageMatte && headline && description &&
        <div className="container">
          <Grid className={`iwt-container iwt-left ${className}`} container alignItems="center">
            <Grid item className="image-image-wrapper" md={5} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item className="image-background image-background-matte" md={12}></Grid>
              </Grid>
            </Grid>
            <Grid item className="image-text-wrapper" md={7} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item md={6} xs={12} className="image-text">
                  <p className="text-headline">{headline}</p>
                  <p className="text-description">{description}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      }
      { imageRight && imageFull && headline && description &&
        <div className="container">
          <Grid className={`iwt-container iwt-right-desktop ${className}`} container alignItems="center">
            <Grid item className="image-text-wrapper" md={7} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item md={6} xs={12} className="image-text">
                  <p className="text-headline">{headline}</p>
                  <p className="text-description">{description}</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="image-image-wrapper" md={5} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item className="image-background image-background-full" md={12}></Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={`iwt-container iwt-right-mobile ${className}`} container alignItems="center">
            <Grid item className="image-image-wrapper" md={5} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item className="image-background image-background-full" md={12}></Grid>
              </Grid>
            </Grid>
            <Grid item className="image-text-wrapper" md={7} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item md={6} xs={12} className="image-text">
                  <p className="text-headline">{headline}</p>
                  <p className="text-description">{description}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      }
      { imageRight && imageMatte && headline && description &&
        <div className="container">
          <Grid className={`iwt-container iwt-right iwt-right-desktop ${className}`} container alignItems="center">
            <Grid item className="image-text-wrapper" md={7} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item md={6} xs={12} className="image-text">
                  <p className="text-headline">{headline}</p>
                  <p className="text-description">{description}</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="image-image-wrapper" md={5} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item className="image-background image-background-matte" md={12}></Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={`iwt-container iwt-right iwt-right-mobile ${className}`} container alignItems="center">
            <Grid item className="image-image-wrapper" md={5} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item className="image-background image-background-matte" md={12}></Grid>
              </Grid>
            </Grid>
            <Grid item className="image-text-wrapper" md={7} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item md={6} xs={12} className="image-text">
                  <p className="text-headline">{headline}</p>
                  <p className="text-description">{description}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      }
      { imageLeft && imageFull && memberName && memberTitle && description &&
        <div className="container">
          <Grid className={`iwt-container iwt-left ${className}`} container alignItems="center">
            <Grid item className="image-image-wrapper" md={5} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item className="image-background image-background-full" md={12}></Grid>
              </Grid>
            </Grid>
            <Grid item className="image-text-wrapper" md={7} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item md={6} xs={12} className="image-text">
                  <p className="member-name">{memberName} • {memberTitle}</p>
                  <p className="text-description">{description}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      }
      { imageRight && imageFull && memberName && memberTitle && description &&
        <div className="container">
          <Grid className={`iwt-container iwt-right iwt-right-desktop ${className}`} container alignItems="center">
            <Grid item className="image-text-wrapper" md={7} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item md={6} xs={12} className="image-text">
                  <p className="member-name">{memberName} • {memberTitle}</p>
                  <p className="text-description">{description}</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="image-image-wrapper" md={5} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item className="image-background image-background-full" md={12}></Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={`iwt-container iwt-right iwt-right-mobile ${className}`} container alignItems="center">
            <Grid item className="image-image-wrapper" md={5} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item className="image-background image-background-full" md={12}></Grid>
              </Grid>
            </Grid>
            <Grid item className="image-text-wrapper" md={7} justify="center" alignItems="center">
              <Grid container justify="center" alignItems="center">
                <Grid item md={6} xs={12} className="image-text">
                  <p className="member-name">{memberName} • {memberTitle}</p>
                  <p className="text-description">{description}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      }

    </div>
    )
  }
}
