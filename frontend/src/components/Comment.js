import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Comment = props => {
  const {author, timestamp, body} = props
  return (
    <div>
      {author} at {timestamp} <br/>
      {body}
    </div>
  )
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired
}

export default Comment
