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
        <Router>
          <Route exact path="/" component={Homepage}/>
          <Route path="/work" component={Work}/>
          <Route path="/betterfin" component={Betterfin}/>
          <Route path="/about" component={About}/>
          <Route path="/approach" component={Approach}/>
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
