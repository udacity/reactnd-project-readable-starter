import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPost, getComments, votePost, voteComment, addComment, deletePost } from '../actions'
import PostListItem from './PostListItem'
import Vote from './Vote'

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.postId)
    this.props.getComments(this.props.postId)
  }
  render(){
    const { post, comments, votePost, voteComment, addComment, deletePost } = this.props
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
        <div className="add-comment">
          <textarea id="comment-body"></textarea>
          <br />
          <input type="text" id="author" placeholder="Author" />
          <button onClick={() => {
            let author = document.getElementById("author").value
            let body = document.getElementById("comment-body").value
            addComment( post.id, body, author)
          }}>Submit</button>
        </div>
        )}
        <ul className="comments">
          {comments && comments.map((comment) => (
            <li key={comment.id}>
              <Vote
                objectId={comment.id}
                onClick={voteComment}
                score={comment.voteScore}
              />
              <div className="comment">
                <div className="body">{comment.body}
                  <em> &mdash;{comment.author}</em>
                </div>
              </div>
            </li>
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
    addComment: (parentId, body, author) => dispatch(addComment({parentId, body, author}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
