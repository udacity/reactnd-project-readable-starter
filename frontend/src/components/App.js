import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../App.css';
import { connect } from 'react-redux'
import CategoryList from './CategoryList'
import PostList from './PostList'
import Post from './Post'
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
          <Route path='/:category/:post_id' render={({match}) => (
            <div>
              <CategoryList />
              <Post postId={match.params.post_id} />
            </div>
          )}/>
          <Route path='/:category' render={({match}) => (
            <div>
              <CategoryList />
              <PostList path={match.params.category} />
            </div>
          )}/>
          <Route exact path='/' render={() => (
            <div>
              <CategoryList />
              <PostList />
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

