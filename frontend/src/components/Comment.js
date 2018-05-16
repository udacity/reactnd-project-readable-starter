import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editComment, voteComment, deleteComment } from '../actions'
import Vote from './Vote'

class Comment extends Component {
  constructor(props){
    super(props)
    this.bodyInput = React.createRef()
  }
  state = {
    editing: false
  }
  onEdit = () => {
    this.setState({editing: true})
  }
  onCancel = () => {
    this.setState({editing: false})
  }
  onSave = () => {
    const { comment, editComment } = this.props
    let body = this.bodyInput.current
    editComment(comment.id, body.value).then(() => {
      this.setState({editing: false})
    })
  }
  render(){
    const { comment, voteComment, deleteComment } = this.props
    return (
      <li>
        <Vote
          objectId={comment.id}
          onClick={voteComment}
          score={comment.voteScore}
        />
        {this.state.editing ? (
          <div className="comment">
            <div className="redact">
              &nbsp;<br />
              <button onClick={this.onSave}><span role="img" aria-label="Save">✅</span></button>
              <button onClick={this.onCancel}><span role="img" aria-label="Cancel">❌</span></button>
            </div>
            <div className="body">
              <textarea ref={this.bodyInput} defaultValue={comment.body} />
              <em> &mdash;{comment.author}</em>
              <br />
            </div>
          </div>
        ) : (
          <div className="comment">
            <div className="redact">
              <button onClick={this.onEdit}><span role="img" aria-label="Delete">✏️</span></button>
              <button onClick={() => deleteComment(comment.id)}><span role="img" aria-label="Delete">🗑</span></button>
            </div>
            <div id={`comment-${comment.id}`} className="body">
              {comment.body}
              <em> &mdash;{comment.author}</em>
              <br />
            </div>
          </div>
        )}
      </li>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {}
}
function mapDispatchToProps( dispatch ){
  return {
    editComment: (id, body) => dispatch(editComment({id, body})),
    voteComment: (id, option) => dispatch(voteComment({id, option})),
    deleteComment: (id) => dispatch(deleteComment(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
