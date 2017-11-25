import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {castVoteOnComment} from '../actions/voting'
import VotingBooth from './VotingBooth'

const Comment = props => {
  const {id, voteScore, author, timestamp, body, castVoteOnComment} = props
  return (
    <div>
      <h4>{author} at {timestamp} <br/></h4>
      <p>{body}</p>
      <VotingBooth
        votes={voteScore}
        upAction={() => castVoteOnComment(id, 'upVote')}
        downAction={() => castVoteOnComment(id, 'downVote')}
      />
    </div>
  )
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  voteScore:PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  castVoteOnComment: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  castVoteOnComment: castVoteOnComment
}

export default connect(null, mapDispatchToProps)(Comment)
