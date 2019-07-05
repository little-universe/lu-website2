import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Transporter } from '../../orbit'
import {Link} from "react-router-dom";

export default class MotifAnimation extends Component {
  render() {
    const { className, orbitAnimation, gravityAnimation, motifWithCTA } = this.props
    return (
      <>
      { gravityAnimation &&
        <div className="container">
          <div className={`motif-animation gravity-animation ${className}`}>
            <div className="motif-layer gravity-1"></div>
            <div className="motif-layer gravity-2"></div>
            <div className="motif-layer gravity-3"></div>
          </div>
        </div>
      }
      { orbitAnimation &&
        <div className="container">
          <div className={`motif-animation orbit-animation ${className}`}>
            <div className="motif-layer orbit-1"></div>
            <div className="motif-layer orbit-2"></div>
            <div className="motif-layer orbit-3"></div>
          </div>
        </div>
      }
      { motifWithCTA &&

          <div className={`motif-animation motif-with-cta ${className}`}>1</div>

      }
    </>
    )
  }
}
