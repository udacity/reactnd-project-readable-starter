import React from 'react';
import PropTypes from 'prop-types'

const PostsList = (props) => {
  const {posts} = props

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          {post.title}<br/>
          Category: {post.category}<br/>
          Votes: {post.voteScore} <br/>
          Author: {post.author} <br/>
          Time: {post.timestamp}
        </li>
      ))}
    </ul>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostsList
