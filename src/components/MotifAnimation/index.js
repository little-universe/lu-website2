import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Transporter } from '../../orbit'
import {Link} from "react-router-dom";

export default class MotifAnimation extends Component {
  render() {
    const { className, orbitAnimation, gravityAnimation } = this.props
    return (
    <div className="margin-container">
      { gravityAnimation &&
        <div className="container">
          <div className={`motif-animation ${className}`}>
            <div className="motif-layer gravity-1"></div>
            <div className="motif-layer gravity-2"></div>
            <div className="motif-layer gravity-3"></div>
          </div>
        </div>
      }
    </div>
    )
  }
}
