import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Signup from './Components/Signup/Screen';
import Login from './Components/Login/Screen';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact component={Login} path="/"  />
                        <Route exact component={Signup} path="/Signup"  />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
    );
  }
}

export default App;
