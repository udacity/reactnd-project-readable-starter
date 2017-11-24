import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  incrementVoteScoreAndUpdateDB,
  decrementVoteScoreAndUpdateDB
} from '../actions/activePost'
import VotingBooth from './VotingBooth'

const VotingBoothContainer = (props) => (
  <VotingBooth
    votes={props.votes}
    upAction={()=>props.incrementVoteScoreAndUpdateDB(props.postId)}
    downAction={()=>props.decrementVoteScoreAndUpdateDB(props.postId)}
  />
)

VotingBoothContainer.propTypes = {
  incrementVoteScoreAndUpdateDB: PropTypes.func.isRequired,
  decrementVoteScoreAndUpdateDB: PropTypes.func.isRequired,
  votes: PropTypes.number,
  postId: PropTypes.string,
}

const mapStateToProps = state => ({
  votes: state.activePost.post.voteScore,
  postId: state.activePost.post.id
})

const mapDispatchToProps = {
  incrementVoteScoreAndUpdateDB:incrementVoteScoreAndUpdateDB,
  decrementVoteScoreAndUpdateDB:decrementVoteScoreAndUpdateDB
}

export default connect(mapStateToProps, mapDispatchToProps)(VotingBoothContainer)
