import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import logo from './logo.svg';

import Sessions from './Sessions';
import Home from './Home';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sessions/:id' component={Sessions} />
        </Switch>
       </Router>
    );
  }
}

export default App;
