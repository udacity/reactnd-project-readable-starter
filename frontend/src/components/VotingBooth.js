import React from 'react'
import PropTypes from 'prop-types'

const VotingBooth = props => {
  const {votes, upAction, downAction} = props
  return (
    <div>
      Votes: {votes}
      <button onClick={upAction}>Up</button>
      <button onClick={downAction}>Down</button>
    </div>
  )
}

VotingBooth.propTypes = {
  votes: PropTypes.number,
  upAction: PropTypes.func.isRequired,
  downAction: PropTypes.func.isRequired
}

export default VotingBooth
