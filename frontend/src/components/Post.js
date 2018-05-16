import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPost, getComments, votePost,  deletePost } from '../actions'
import PostListItem from './PostListItem'
import Comment from './Comment'
import NewComment from './NewComment'

class Post extends Component {
  componentDidMount() {
    this.props.getComments(this.props.postId)
    this.props.getPost(this.props.postId)
  }
  render(){
    const { post, comments, votePost, deletePost } = this.props
    if(post){
      if(this.props.error || post.deleted ){
        return (
          <div className="error">
            Post not found / 404<br />
            <em>{this.props.error}</em>
          </div>
        )
      }
      return (
        <div>
          <h1>{post.category}</h1>
          <ul className="posts">
            <PostListItem
              post={post}
              vote={votePost}
              category={post.category}
              onDelete={deletePost}
            />
          </ul>
          <div className="post-body"><p>{post.body}</p></div>
          <h4>Comments</h4>
          {! post.deleted && post.title && (
            <NewComment
              postId={post.id}
            />
          )}
          <ul className="comments">
            {comments && comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
              />
            ))}
          </ul>
        </div>
      )
    } else {
      return <div />
    }
  }
}

function mapStateToProps(state, ownProps){
  return {
    post: state.posts.filter((post) => post.id === ownProps.postId).shift(),
    comments: state.comments,
    error: state.error
  }
}
function mapDispatchToProps( dispatch ){
  return {
    getPost: (id) => dispatch(getPost(id)),
    votePost: (id, option) => dispatch(votePost({id, option})),
    deletePost: (id) => dispatch(deletePost(id)),
    getComments: (id) => dispatch(getComments(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
