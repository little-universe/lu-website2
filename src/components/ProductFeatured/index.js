import React, { Component } from 'react';
import { ArrowRight } from "react-feather";
import Grid from '@material-ui/core/Grid';
import { Transporter } from '../../orbit'
import {Link} from "react-router-dom";
import Reveal from 'react-reveal/Reveal';

export default class ProductFeatured extends Component {
  render() {
    const { className, productName, productDescription, style, anim} = this.props
    return (
    <>
      { className && productName && productDescription &&
        <Grid className={`work-featured-product ${className}`} container>
            <Grid item md={12} className="featured-product-card">
            <Reveal effect="product-card-swipe">
              <Grid container className="product-card-image">
                  <Grid item md={12} className="image-cover"></Grid>
                <Grid item md={12} className="image-background"></Grid>
              </Grid>
              </Reveal>
              <Grid container className="product-card-caption">
                <Grid item md={12} className="product-caption-name">
                  <p className="caption-name-header">{productName}</p>
                </Grid>
                <Grid item md={12} className="product-caption-description">
                  <p className="caption-description-body">{productDescription}</p>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      }
    </>
    )
  }
}
