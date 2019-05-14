import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Logo extends Component {
  state = {
  }

  render() {
    const { onHovered, onRouteChange } = this.props;

    return (
      <div className="logo">
        <div className="universe"></div>
        <div className="agency-name">Little Universe</div>
      </div>
    )
  }
}

export default Logo;
