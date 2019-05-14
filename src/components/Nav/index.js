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
          <a
            onClick={() => onRouteChange('work')}
            // onMouseEnter={() => onHovered('work')}
            // onMouseLeave={() => onHovered('')}
            className="nav-link" href="">
              <li className="nav-item">Our Work</li>
          </a>
          <a
            onClick={() => onRouteChange('about')}
            // onMouseEnter={() => onHovered('about')}
            // onMouseLeave={() => onHovered('')}
            className="nav-link" href="">
              <li className="nav-item">About Us</li>
          </a>
          <a
            onClick={() => onRouteChange('approach')}
            // onMouseEnter={() => onHovered('approach')}
            // onMouseLeave={() => onHovered('')}
            className="nav-link" href="">
              <li className="nav-item">Approach</li>
          </a>
        </ul>
      </div>
    )
  }
}

export default Nav;
