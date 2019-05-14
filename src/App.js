import React, { Component } from 'react';
import './styles/styles.scss';
import Homepage from './pages/homepage';
import Work from './pages/work';
import Logo from './components/Logo';

let styles = {}

class App extends Component {
  state = {
    first: true,
    list: false,
    imageSelected: undefined
  }

  render() {
    return (
      <div className="App">
        <Work />
      </div>
    );
  }
}

export default App;
