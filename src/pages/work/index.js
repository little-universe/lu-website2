import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Nav from '../../components/HeroText';

class Work extends Component {
  state = {
    hovered: undefined,
    route: 'work'

  }

  render() {
    const { hovered, route } = this.state;

    return (
        <Nav/>
        <HeroText/>
    )
  }
}

export default Work;
