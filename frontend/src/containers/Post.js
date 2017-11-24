import React from 'react'
import PropTypes from 'prop-types'

const Post = (props) => {
  const {post} = props

  return (
    <div>
      <h1>{post.title}</h1>
      <h3>By {post.author}</h3>
      <p>{post.body}</p>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
