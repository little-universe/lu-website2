import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
class Logo extends Component {
  state = {
  }

  render() {
    const { onHovered, onRouteChange } = this.props;

    return (
      <a href="/">
      <Reveal effect="nav-animation">
      <div className="logo">
        <div className="universe"></div>
        <div className="agency-name">Little Universe</div>
      </div>
      </Reveal>
      </a>
    )
  }
}

export default Logo;
