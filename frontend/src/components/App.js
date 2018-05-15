import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import '../App.css';
import { connect } from 'react-redux'
import CategoryList from './CategoryList'
import Category from './Category'

class App extends Component {
  state = {
    categories: []
  }
  componentDidMount() {
    this.props.getCategories()
  }
  render() {
    return (
      <div className="App">
        <Route exact path='/:category' render={({match}) => (
          <Category path={match.params.category} />
        )}/>
        <Route exact path='/' render={() => (
          <CategoryList />
        )}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    categories: state.categories
  }
}
function mapDispatchToProps( dispatch ){
  return {
    getCategories: () => dispatch({
      type: 'GET_CATEGORIES',
      meta: {
        type: 'api'
      }
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

