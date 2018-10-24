import React, { Component } from 'react';
import './App.css';
import NavDropdownMenu from './components/NavDropdownMenu';
import { Home } from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavDropdownMenu/>
          <Route exact path="/" component={Home}/>
          <Route path="/post" />
        </div>
      </Router>
    );
  }
}

export default App;
