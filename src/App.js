import React from 'react';
import { Provider } from 'react-redux'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import store from './store'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import Navbar from './components/Navbar'


import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
      <Navbar />
        <Switch>
            <Route exact path="/React-Food-Storm" component={Dashboard} />
            <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
