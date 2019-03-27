import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./Message";


const initialState = {
  name: 'Joe',
  message: 'TypeScipt bro'
}

type State = Readonly<typeof initialState>
class App extends Component<any, State> {

  readonly state: State = initialState;

  render() {
    let firstValue: number = 100;
    let secValue: boolean = true;
    let thirdVal: number[] = [2,4,6];
    let arrOpt: Array<string> = ["HEY", "Hello", "World"];
    // tuple
    let aTuple: [string, number] = ["Roger", 100]; 
    // enum
    enum Codes {first = 1, second = 2};
    // any 
    let firstName: any = "Mario";
    // void 
    const warning = (): void => {
      console.log('Warning');
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name='Broseph' message='Simple message'/>
          <p>
           The value {firstValue} is of {typeof firstValue} type! <br/>
           The value {aTuple[0]} is of {typeof aTuple[0]} type! <br/>
           The value {aTuple[1]} is of {typeof aTuple[1]} type!
          </p>
         
        </header>
      </div>
    );
  }
}

export default App;
