import React, { Component } from 'react';
import Vote from './Vote'

class Comment extends Component {
  onEdit = () => {
  }
  render(){
    const { comment, onVote, onDelete } = this.props
    return (
      <li key={comment.id}>
        <Vote
          objectId={comment.id}
          onClick={onVote}
          score={comment.voteScore}
        />
        <div className="comment">
          <div style={{float:"right"}}>
            <button onClick={this.onEdit}>Edit</button>
            <button onClick={() => onDelete(comment.id)}>Delete</button>
          </div>
          <div className="body">{comment.body}
            <em> &mdash;{comment.author}</em>
            <br />
          </div>
        </div>
      </li>
    )
  }
}

export default Comment
