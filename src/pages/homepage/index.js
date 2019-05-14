import React, { Component } from 'react';
import Nav from '../../components/Nav';

class Homepage extends Component {
  state = {
    hovered: undefined,
    route: 'home'

  }

  render() {
    const { hovered, route } = this.state;

    return (
        <Nav/>
    )
  }
}

export default Homepage;
