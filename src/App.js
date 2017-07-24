import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppLogin from './component/AppLoginComponent';
import AppHeader from './component/AppHeaderComponent';
import AppMain from './component/AppMainComponent';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader></AppHeader>
        <div className="page-content">
          <Router >
            <div className="row">
              <Route exact path="/" component={AppLogin} />
              <Route path="/login" component={AppLogin} />
              <Route path="/main" component={AppMain} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
