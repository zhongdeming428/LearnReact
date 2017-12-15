import React, { Component } from 'react';
import logo from './logo.svg';
import Links from './Links/Links';
import Introduce from './Introduce/Introduce';
import Home from './Home/Home';
import './App.css';
import NotFound from './NotFound';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">React Router V4.0 Example</h1>
        </div>
        <BrowserRouter>
          <div>
            <Links/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/introduce" exact component={Introduce}/>

              <Route path="/404" component={NotFound}/>
              <Route render={()=>(<Redirect to="/404"/>)}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
