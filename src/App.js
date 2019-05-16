import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import './styles/styles.scss';
import Peek from './components/Peek';
import Homepage from './pages/homepage';
import Work from './pages/work';
import Betterfin from './pages/betterfin';
import About from './pages/about';
import Approach from './pages/approach';
import Logo from './components/Logo';
import Nav from './components/Nav';

let styles = {}

const RouterNav = withRouter(props => <Nav {...props}/>);
const RouterPeek = withRouter(props => <Peek {...props}/>);

class Lens extends Component {
  render() {
    const { hovered, location, children } = this.props
    let blur = !!hovered
    if (location.pathname === '/work' && hovered === 'work') blur = false
    if (location.pathname === '/about' && hovered === 'about') blur = false
    if (location.pathname === '/approach' && hovered === 'approach') blur = false
    return (
      <div style={blur ? { opacity: 0.5} : {}}>
        {children}
      </div>
    )
  }
}

const RouterLens = withRouter(props => <Lens {...props} />)

class App extends Component {
  state = {
    first: true,
    list: false,
    imageSelected: undefined,
    hovered: undefined
  }

  updateHovered = (hovered) => {
    this.setState({hovered})
  }

  render() {
    const {hovered} = this.state
    return (
      <div className="App">
      <Logo/>
        <Router>
          <RouterLens hovered={hovered}>
          <Route exact path="/" component={Homepage}/>
          <Route path="/work" component={Work}/>
          <Route path="/betterfin" component={Betterfin}/>
          <Route path="/about" component={About}/>
          <Route path="/approach" component={Approach}/>
          </RouterLens>
          <RouterNav
            onHovered={this.updateHovered}
          />
          <RouterPeek
            peekPage={hovered}
          />
        </Router>
      </div>
    );
  }
}

export default App;
