import {castVote} from '../utils/contentAPI'
import {
  CAST_VOTE_ON_POST,
  CAST_VOTE_ON_COMMENT
} from './index'

export const voteIncrements = {
  upVote: 1,
  downVote: -1
}

export const castVoteOnPost = (id, vote) => {
  return dispatch => {
    dispatch({
      type: CAST_VOTE_ON_POST,
      id: id,
      vote: vote
    })

    castVote('posts', id, vote)
  }
}

export const castVoteOnComment = (id, vote) => {
  return dispatch => {
    dispatch({
      type: CAST_VOTE_ON_COMMENT,
      id: id,
      vote: vote
    })

    castVote('comments', id, vote)
  }
}
