import React, { Component } from 'react';
import { Transporter } from '../orbit';
import Nav from './Nav';
import Peek from './Peek';
import WorkPage from './WorkPage';

class Homepage extends Component {
  state = {
    hovered: undefined,
    route: 'home'
  }

  updateHovered = (hovered) => {
    this.setState({
      hovered: hovered
    })
    console.log(hovered)
  }
  updateRoute = (route) => this.setState({ route })
  renderRoute = () => {
    const { route } = this.state
    switch (route) {
      case 'work':
        return <WorkPage />
      default:
        return <div><h1>homepage</h1></div>
    }
  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Nav onHovered={this.updateHovered} onRouteChange={this.updateRoute}/>

        <Peek peekPage={hovered} route={route} />

        {this.renderRoute()}
      </>
    )
  }
}

export default Homepage;
