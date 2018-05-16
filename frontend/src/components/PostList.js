import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getPosts, votePost, deletePost, sortPosts } from '../actions'
import PostListItem from './PostListItem'
import Sort from './Sort'

class PostList extends Component {
  componentDidMount(){
    this.props.getPosts(this.props.path)
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.path !== nextProps.path){
      this.props.getPosts(nextProps.path)
    }
  }
  render(){
    const { category, posts, vote, deletePost } = this.props
    return (
      <div>
        <h1>
          {category ? category.name : "All Posts"}
        </h1>
        <Sort
          onSort={this.props.sortPosts}
          options={[
            ['timestamp', 'Date'],
            ['commentCount', 'Comments'],
            ['voteScore', 'Score'],
          ]}
        />
        <ul className="posts">
          {posts && posts.map((post) => (
            <PostListItem
              key={post.id}
              post={post}
              vote={vote}
              category={category}
              onDelete={deletePost}
            />
          ))}
        </ul>
        {posts && posts.length === 0 && (
          <div className="no-posts">The opportunity to first-post in a category doesn't come around often!</div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  const filteredCats = state.categories ? state.categories.filter((cat) => cat.path === ownProps.path) : {}
  const posts = ownProps.path ? state.posts.filter((post) => post.category === ownProps.path) : state.posts
  return {
    category: filteredCats[0],
    posts: posts
  }
}
function mapDispatchToProps( dispatch ){
  return {
    sortPosts: (key, reverse) => dispatch(sortPosts(key, reverse)),
    deletePost: (id) => dispatch(deletePost(id)),
    getPosts: (category) => dispatch(getPosts(category)),
    vote: (id, option) => dispatch(votePost({id, option}))
  }
}

//export default Category
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList))
