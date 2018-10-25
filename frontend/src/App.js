import React, { Component } from 'react';
import './App.css';
import NavDropdownMenu from './components/NavDropdownMenu';
import { Home } from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ServerAPI from './ServerAPI'

class App extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    this.getAllCategories()
  } 

  getAllCategories() {
    console.log( "getAllCategories")
    ServerAPI.getAll().then((categories) => {
      console.log( categories)
      this.setState({
        categories
      })
    })
  }

  render() {
    return (
      <Router>
        <div>
          <NavDropdownMenu categories={this.state.categories} />
            {this.state.categories.map((category) => (
               <Route key={category.name} path={`${category.path}`} />
            ))}
          <Route exact path="/" component={Home}/>
         
        </div>
      </Router>
    );
  }
}

export default App;
