import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';

class Nav extends Component {
  state = {
  }

  render() {
    console.warn(this.props);

    const { onHovered, onRouteChange, location } = this.props;

    return (
      <div className="nav is-visible">
        <ul className="nav-list">
          <Link
            // onClick={() => onRouteChange('work')}
            onMouseEnter={() => onHovered('work')}
            onMouseLeave={() => onHovered('')}
            to="/work"
            className={`nav-link ${location.pathname === "/work" && "active"}`} href="">
            <li className="nav-item">Our Work</li>
          </Link>
          <Link
            // onClick={() => onRouteChange('about')}
            onMouseEnter={() => onHovered('about')}
            onMouseLeave={() => onHovered('')}
            to="/about"
            className={`nav-link ${location.pathname === "/about" && "active"}`} href="">
              <li className="nav-item">About Us</li>
          </Link>
          <Link
            // onClick={() => onRouteChange('approach')}
            onMouseEnter={() => onHovered('approach')}
            onMouseLeave={() => onHovered('')}
            to="/approach"
            className={`nav-link ${location.pathname === "/approach" && "active"}`} href="">
              <li className="nav-item">Approach</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Nav;
