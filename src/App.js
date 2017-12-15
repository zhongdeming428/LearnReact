import React, { Component } from 'react';
import logo from './logo.svg';
import Links from './Links/Links';
import Home from './Home/Home';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">React Router V4.0 Example</h1>
        </div>
        <Links/>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/introduce" component={Introduce}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
