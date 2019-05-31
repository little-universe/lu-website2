import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import classnames from "classnames";


export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      scrolledUp: false
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    const scrolledUp = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
      scrolledUp
    });
  };


  render() {
    const { onHovered, onRouteChange, location } = this.props;

    return (
      <Fade top distance="10px" duration={1000} delay={250}>
      <div className={classnames("nav", {
          "is-collapsed": !this.state.visible
        }, {"is-uncollapsed" : this.state.scrolledUp})}>
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
      </Fade>
    )
  }
}
