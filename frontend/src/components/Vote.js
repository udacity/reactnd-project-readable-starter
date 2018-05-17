import React, { Component } from 'react';

class Vote extends Component {
  render(){
    const { onClick, score, objectId } = this.props
    return (
      <div className="vote">
        <button onClick={() => onClick(objectId, "downVote")}>
          <span role="img" aria-label="Vote Down">👎</span>
        </button>
        <div className="score">{score}</div>
        <button onClick={() => onClick(objectId, "upVote")}>
          <span role="img" aria-label="Vote Up">👍</span>
        </button>
      </div>
    )
  }
}

export default Vote
