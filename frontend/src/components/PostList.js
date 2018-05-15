import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getPosts } from '../actions'
import { Link } from 'react-router-dom'

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
    const { category, posts } = this.props
    return (
      <div>
        <h1>
          {category ? category.name : "All Posts"}
        </h1>
        <ul className="posts">
          {posts && posts.map((post) => (
            <li key={post.id}>
              <div className="vote">
                <button><span role="img" aria-label="Vote Down">⬇️</span></button>
                <div className="score">{post.voteScore}</div>
                <button><span role="img" aria-label="Vote Up">⬆️</span></button>
              </div>
              <div className="post">
                <Link to="/posts/{post.id}">
                  {post.title}
                </Link>
                {! category && (
                  <span className="category-tag">{post.category}</span>
                )}
                 &mdash; 
                <span className="stat"><em>{post.author}</em></span>
                <br />
                <span className="stat">{post.commentCount} comments</span>
              </div>
            </li>
          ))}
        </ul>
        {posts && posts.length === 0 && (
          <span>The opportunity to first-post in a category doesn't come around often!</span>
        )}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  //console.log(state)
  const filteredCats = state.categories.filter((cat) => cat.path === ownProps.path)
  return {
    category: filteredCats[0],
    posts: state.posts
  }
}
function mapDispatchToProps( dispatch ){
  return {
    getPosts: (category) => dispatch(getPosts(category))
  }
}

//export default Category
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList))
