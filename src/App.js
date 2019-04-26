import React, { Component } from 'react';
import './styles/styles.css';
import Homepage from './components/Homepage';

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
