import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

const CommentsList = (props) => {
  const {comments} = props
  return (
    <ul>
      {comments.map( c => (
        <li key={c.id}>
          <Comment
            author={c.author}
            body={c.body}
            timestamp={c.timestamp}
          />
        </li>
      ))}
    </ul>
  )
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentsList
