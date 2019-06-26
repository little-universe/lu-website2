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
      <Fade top distance="10px" duration={500}>
      <div className="logo">
      </div>
      </Fade>
      </a>
    )
  }
}

export default Logo;
