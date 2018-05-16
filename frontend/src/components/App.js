import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../App.css';
import { connect } from 'react-redux'
import CategoryList from './CategoryList'
import PostList from './PostList'
import Post from './Post'
import PostEdit from './PostEdit'
import { getCategories, addPost } from '../actions'

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
          <Route path='/:category/:post_id/edit' render={({match}) => (
            <div>
              <CategoryList />
              <h1>Edit Post</h1>
              <PostEdit postId={match.params.post_id} />
            </div>
          )}/>
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
              <h4>New Post</h4>
              <PostEdit
                post={{title:""}}
                category={match.params.category}
                onSubmit={this.props.addPost}
              />
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
    getCategories: () => dispatch(getCategories()),
    addPost: (category, title, body, author) => dispatch(addPost({category, title, body, author})),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

