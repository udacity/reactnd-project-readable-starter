import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../App.css';
import { connect } from 'react-redux'
import CategoryList from './CategoryList'
import PostList from './PostList'
import { getCategories } from '../actions'

class App extends Component {
  state = {
    categories: []
  }
  componentDidMount() {
    this.props.getCategories()
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => (
            <div>
              <CategoryList />
              <PostList />
            </div>
          )}/>
          <Route path='/category/:category' render={({match}) => (
            <div>
              <CategoryList />
              <PostList path={match.params.category} />
            </div>
          )}/>
        </Switch>
      </Router>
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
    getCategories: () => dispatch(getCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

