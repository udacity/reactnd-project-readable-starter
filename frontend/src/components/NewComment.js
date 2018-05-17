import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from '../actions/comments'

class NewComment extends Component {
  submitComment = (event) => {
    const { postId, addComment } = this.props
    let author = document.getElementById("author")
    let body = document.getElementById("comment-body")
    if(author.value.length * body.value.length === 0){
      return false
    }
    addComment( postId, body.value, author.value)
    body.value = ""
    author.value = ""
  }
  render(){
    return (
      <div className="add-comment">
        <textarea id="comment-body" placeholder="Type a new comment here"></textarea>
        <br />
        <input type="text" id="author" placeholder="Author" />
        <button onClick={this.submitComment}>
          Submit
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({})
const mapDispatchToProps = (dispatch) => ({
  addComment: (parentId, body, author) => dispatch(addComment({parentId, body, author})),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewComment)
