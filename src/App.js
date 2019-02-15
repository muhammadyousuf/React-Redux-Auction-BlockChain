import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Signup from './Components/Signup/Screen';
import Login from './Components/Login/Screen';
import { Provider } from 'react-redux';
import store from './Store/store';
import './App.css';
import MainPage from './Components/Main/Main';
import MyAuction from './Components/AddAuction/Add';
import ChangePassword from './Components/ChangePassword/ChangePassword';


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        
        <BrowserRouter>
          <Switch>
            <Route exact component={MainPage} path="/" />
            <Route exact component={Login} path="/Login" />
            <Route exact component={Signup} path="/Signup" />
            <Route exact component={ChangePassword} path="/ChangePassword" />
            <Route exact component={MyAuction} path="/MyAuction" />
          </Switch>
        </BrowserRouter>
        {/* <div>
          <AddProduct />
          <List />
        </div> */}
        
      </Provider>
    );
  }
}

export default App;
