import React, { Component } from 'react';
import { Transporter } from '../orbit';
import Nav from './Nav';
import Peek from './Peek';
import WorkPage from './WorkPage';
import StrivePage from './StrivePage';

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
        return <WorkPage navigate={this.updateRoute}/>
      case 'strive':
        return <StrivePage />
      default:
        return (
          <div>
            <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>homepage</h1>
          </div>
        )
    }
  }

  render() {
    const { hovered, route } = this.state;

    return (
      <>
        <Nav onHovered={this.updateHovered} onRouteChange={this.updateRoute} />

        <Peek peekPage={hovered} route={route} />

        {this.renderRoute()}
      </>
    )
  }
}

export default Homepage;
