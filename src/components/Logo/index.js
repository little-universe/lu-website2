import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

class Logo extends Component {
  state = {
  }

  render() {
    const { onHovered, onRouteChange } = this.props;

    return (
      <a href="/">
      <Fade top distance="10px" duration={1000}>
      <div className="logo">
        <div className="universe"></div>
        <div className="agency-name">Little Universe</div>
      </div>
      </Fade>
      </a>
    )
  }
}

export default Logo;
