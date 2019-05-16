import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Logo from '../../components/Logo';

import Work from '../work';
import Betterfin from '../betterfin';

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
        return <Work navigate={this.updateRoute}/>
      case 'betterfin':
        return <Betterfin />
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


      </>
    )
  }
}

export default Homepage;
