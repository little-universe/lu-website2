import React, { Component } from 'react';
import { Transporter } from '../orbit';
import Nav from './Nav';
import Peek from './Peek';
import WorkPage from './WorkPage';

class Homepage extends Component {
  state = {
    hovered: undefined
  }

  updateHovered = (hovered) => {
    this.setState({
      hovered: hovered
    })
    console.log(hovered)
  }

  render() {
    const { hovered } = this.state;

    return (
      <>
        <Nav onHovered={this.updateHovered}/>

        <Peek peekPage={hovered} />

        <WorkPage />
      </>
    )
  }
}

export default Homepage;
