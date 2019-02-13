import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Signup from './Components/Signup/Screen';
import List from './Components/List/Screen';
import { Provider } from 'react-redux';
import store from './Store/store';
import './App.css';
import MainPage from './Components/Main/Main';
import MyAuction from './Components/AddAuction/Add';


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        
        <BrowserRouter>
          <Switch>
            <Route exact component={MainPage} path="/" />
            <Route exact component={List} path="/List" />
            <Route exact component={Signup} path="/Signup" />
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
