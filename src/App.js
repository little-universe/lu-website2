import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ImageList } from './ImageList';
import Homepage from './Homepage';
import { ImageFocus } from './ImageFocus';
import { StyleContext } from './style-context';
import { FirstList, SecondList } from './List';
import { First, Second } from './First';

let styles = {}

class App extends Component {
  state = {
    first: true,
    list: false,
    imageSelected: undefined
  }

  render() {
    const { imageSelected } = this.state
    let c
    if(this.state.list) {
      c = this.state.first ? <FirstList /> : <SecondList />
    } else {
      c = this.state.first ? <First /> : <Second />
    }
    return (
      <div className="App">
        {/* <Homepage /> */}
        { imageSelected && <ImageFocus imageSelected={imageSelected} onClick={() => this.setState({imageSelected: undefined})} />}
        { !imageSelected && <ImageList imageSelected={imageSelected} selectImage={(i) => this.setState({imageSelected: `image${i}`})} />}

        { /*
          {c}
          <button onClick={() => { this.setState({ first: !this.state.first }) }}>animate</button>
          <button onClick={() => { this.setState({ list: !this.state.list }) }}>switch to list</button>
        */ }
      </div>
    );
  }
}

export default App;
