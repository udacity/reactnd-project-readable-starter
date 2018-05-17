import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Vote from './Vote'

function formatTimestamp(timestamp){
  let date = new Date(timestamp)
  return date.toLocaleString()
}

class PostListItem extends Component {
  render(){
    const { post, vote, category, onDelete } = this.props
    if(post.deleted || ! post.title){
      return (
        <li>
          [deleted]
        </li>
      )
    }
    return (
      <li className='clearfix'>
        <Vote
          onClick={vote}
          objectId={post.id}
          score={post.voteScore}
        />
        <div className="redact">
          <Link to={`/${post.category}/${post.id}/edit`}>
            <span role="img" aria-label="Delete">✏️</span>
          </Link>
          <button onClick={() => onDelete(post.id)}>
            <span role="img" aria-label="Delete">🗑</span>
          </button>
        </div>
        <div className="post">
          <Link to={`/${post.category}/${post.id}`}>
            {post.title}
          </Link>
          {! category && (
            <span className="category-tag">{post.category}</span>
          )}
           &mdash; 
          <span className="stat"><em>{post.author}</em></span>
          <br />
          <span className="stat">{post.commentCount} comments</span>
          <span className="stat">posted at {formatTimestamp(post.timestamp)}</span>
        </div>
      </li>
    )
  }
}

export default PostListItem
