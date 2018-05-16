import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPost, getComments, votePost,  deletePost } from '../actions'
import { voteComment, addComment, deleteComment } from '../actions'
import PostListItem from './PostListItem'
import Comment from './Comment'
import NewComment from './NewComment'

class Post extends Component {
  componentDidMount() {
    this.props.getComments(this.props.postId)
    this.props.getPost(this.props.postId)
  }
  render(){
    const { post, comments, votePost, voteComment, deletePost, addComment, deleteComment } = this.props
    return post ? (
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
            addComment={addComment}
          />
        )}
        <ul className="comments">
          {comments && comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onVote={voteComment}
              onDelete={deleteComment}
            />
          ))}
        </ul>
      </div>
    ) : <div />
  }
}

function mapStateToProps(state, ownProps){
  return {
    post: state.posts.filter((post) => post.id === ownProps.postId).shift(),
    comments: state.comments
  }
}
function mapDispatchToProps( dispatch ){
  return {
    getPost: (id) => dispatch(getPost(id)),
    deletePost: (id) => dispatch(deletePost(id)),
    getComments: (id) => dispatch(getComments(id)),
    votePost: (id, option) => dispatch(votePost({id, option})),
    voteComment: (id, option) => dispatch(voteComment({id, option})),
    addComment: (parentId, body, author) => dispatch(addComment({parentId, body, author})),
    deleteComment: (id) => dispatch(deleteComment(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
