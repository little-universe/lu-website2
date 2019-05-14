import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Nav extends Component {
  state = {
  }

  render() {
    const { onHovered, onRouteChange } = this.props;

    return (
      <div className="nav">
        <ul className="nav-list">
          <a className="nav-link" href=""><li className="nav-item">Our Work</li></a>
          <a className="nav-link" href=""><li className="nav-item">About Us</li></a>
          <a className="nav-link" href=""><li className="nav-item">Approach</li></a>
        </ul>
      </div>
    )
  }
}

export default Nav;
