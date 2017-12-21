import React from 'react';
import Links from './Links/Links';
import Introduce from './Introduce/Introduce';
import Home from './Home/Home';
import Detail from './Detail/Detail';
import './App.css';
import NotFound from './NotFound';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Contact from './Contact/Contact';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">React Router V4.0 Demo</h1>
        </div>
        <BrowserRouter basename='/react-router-demo'>
          <div>
            <Links/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/introduce" exact component={Introduce}/>
              <Route path="/detail"  component={Detail}/>
              <Route path="/contact" component={Contact}/>
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
