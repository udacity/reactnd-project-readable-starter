import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getPosts, votePost } from '../actions'
import PostListItem from './PostListItem'

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
    const { category, posts, vote } = this.props
    return (
      <div>
        <h1>
          {category ? category.name : "All Posts"}
        </h1>
        <ul className="posts">
          {posts && posts.map((post) => (
            <PostListItem
              key={post.id}
              post={post}
              vote={vote}
              category={category}
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
  const filteredCats = state.categories.filter((cat) => cat.path === ownProps.path)
  return {
    category: filteredCats[0],
    posts: state.posts
  }
}
function mapDispatchToProps( dispatch ){
  return {
    getPosts: (category) => dispatch(getPosts(category)),
    vote: (id, option) => dispatch(votePost({id, option}))
  }
}

//export default Category
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList))
