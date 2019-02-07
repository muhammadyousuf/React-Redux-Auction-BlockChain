import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Signup from './Components/Signup/Screen';
import Login from './Components/Login/Screen';
import { Provider } from 'react-redux';
import store from './Store/store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <Switch>
            <Route exact component={Login} path="/" />
            <Route exact component={Signup} path="/Signup" />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
