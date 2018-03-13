import React, { Component } from 'react';
import Header from './Header/Header'
import { Route, Switch } from 'react-router-dom'

import SideNav from './CategoryList/SideNav'
// import Posts from './Posts/'

// import { getCategories } from '../actions/CategoryActions'



import './App.css'

class App extends Component {
  state = {
    barClicked: false
  }

  onBarClick = () => {
    this.setState({
      barClicked: !this.state.barClicked
    })
  }

  render() {
    let sideNavClass = ['Side-Nav', 'Side-Nav-Hide']
    let postsClass = ['Post-Container']
    if (this.state.barClicked) {
      sideNavClass = ['Side-Nav', 'Side-Nav-Show']
      postsClass = ['Post-Container-Show']
    }

  return(
    <div className="App">
    <Header
        onBarClick={this.onBarClick}
        barClicked={this.state.barClicked} />

        <div className="Container">
          <SideNav
            sideNavClass={sideNavClass} />
          <div className={postsClass.join(' ')}>


          </div>

        </div>
      </div>

    );
  }
}

export default App
