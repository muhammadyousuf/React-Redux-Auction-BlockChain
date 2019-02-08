import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import AddProduct from './Components/AddProduct/Screen';
import List from './Components/List/Screen';
import { Provider } from 'react-redux';
import store from './Store/store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        {/* <BrowserRouter>
          <Switch>
            <Route exact component={List} path="/" />
            <Route exact component={AddProduct} path="/AddProduct" />
          </Switch>
        </BrowserRouter> */}
        <div>
          <AddProduct />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
