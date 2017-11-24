import React from 'react'
import PropTypes from 'prop-types'

const NoMatch = (props) => {
  const {message, render} = props
  if (render) {
    return (
      <div>
          <h1>No match</h1>
          <p>{message}</p>
        </div>
    )
  }
  return <div />
}

NoMatch.defaultProps = {
  render: true
}

NoMatch.propTypes = {
  message: PropTypes.string,
  render: PropTypes.bool.isRequired
}

export default NoMatch
