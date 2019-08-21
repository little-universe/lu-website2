import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import './styles/styles.scss';

import Homepage from './pages/homepage';
import Work from './pages/work';
import Betterfin from './pages/betterfin';
import Strive from './pages/strive';
import Motivote from './pages/motivote';
import VoteCrew from './pages/votecrew';
import Farmigo from './pages/farmigo';
import Instructrr from './pages/instructrr';
import About from './pages/about';
import Approach from './pages/approach';
import WorkWithUs from './pages/work-with-us';
import Capabilities from './pages/capabilities';
import Logo from './components/Logo';
import Nav from './components/Nav';
import { freezeAnimation } from './orbit'

let styles = {}

const RouterNav = withRouter(props => <Nav {...props}/>);



class Lens extends Component {
  render() {
    const { hovered, location, children } = this.props
    let blur = !!hovered
    if (location.pathname === '/work' && hovered === 'work') blur = false
    if (location.pathname === '/about' && hovered === 'about') blur = false
    if (location.pathname === '/approach' && hovered === 'approach') blur = false
    return (
      <div style={blur ? { opacity: 0.5, transition: "ease .5s all" } : {}}>
        {children}
      </div>
    )
  }
}

class ScrollToTop extends Component {
  constructor(props) {
    super(props)
    const { history } = props
     this.unlisten = history.listen((location, action) => {
       // Scroll window to top
       window.scrollTo(0, 0)
       // setTimeout(() => window.scrollTo(0, 0), 10)
     })
  }
   componentWillUnmount() {
     this.unlisten()
   }

  render() {
    return this.props.children || null;
  }
}

const RouterLens = withRouter(props => <Lens {...props} />)
const RouterScroll = withRouter(props => <ScrollToTop {...props} />)

class BackListener extends Component {
  constructor(props) {
    super(props)
    window.addEventListener('popstate', this.freezeBack)
  }
  freezeBack = () => {
    console.warn('FREEZING BACK BUTTON in backlistener')
    freezeAnimation(300)
  }
  componentWillUnmount() {
    window.removeEventListener('popstate', this.freezeBack)
  }
  render() {
    return <span></span>
  }
}

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
      <div className="App" >
      <BackListener />
        <Router>
          <RouterScroll />
          <Route exact path="/" component={Homepage}/>
          <Route path="/work" component={Work}/>
          <Route path="/about" component={About}/>
          <Route path="/approach" component={Approach}/>
          <Route path="/work-with-us" component={WorkWithUs}/>
          <Route path="/betterfin" component={Betterfin}/>
          <Route path="/strive" component={Strive}/>
          <Route path="/motivote" component={Motivote}/>
          <Route path="/votecrew" component={VoteCrew}/>
          <Route path="/farmigo" component={Farmigo}/>
          <Route path="/instructrr" component={Instructrr}/>
          <Route path="/capabilities" component={Capabilities}/>

          <RouterNav
            onHovered={this.updateHovered}
          />

        </Router>
      </div>
    );
  }
}

export default App;
