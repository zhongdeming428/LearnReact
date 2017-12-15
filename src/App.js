import React, { Component } from 'react';
import logo from './logo.svg';
import Links from './Links/Links'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">React Router V4.0 Example</h1>
        </div>
        <Links/>
      </div>
    );
  }
}

export default App;
