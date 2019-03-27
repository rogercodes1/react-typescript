import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let firstValue: number = 100;
    let secValue: boolean = true;
    let thirdVal: number[] = [2,4,6];
    let arrOpt: Array<string> = ["HEY", "Hello", "World"];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           The value {firstValue} is of {typeof firstValue} type!
          </p>
         
        </header>
      </div>
    );
  }
}

export default App;
