import React, { Component } from 'react';
import './styles/styles.scss';
import Homepage from './pages/homepage';

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
        <Homepage />
      </div>
    );
  }
}

export default App;
