import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Vote from './Vote'

class PostListItem extends Component {
  render(){
    const { post, vote, category } = this.props
    return (
      <li>
        <Vote
          onClick={vote}
          objectId={post.id}
          score={post.voteScore}
        />
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
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </li>
    )
  }
}

export default PostListItem
