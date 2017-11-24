import {
  REQUEST_POST,
  SET_ACTIVE_POST,
  INCREMENT_VOTE,
  DECREMENT_VOTE
 } from './index'
import {
  getPost,
  incrementVoteScore as incrementVoteScoreInDB,
  decrementVoteScore as decrementVoteScoreInDB,
} from '../utils/contentAPI'

export const setActivePost = post => ({
  type: SET_ACTIVE_POST,
  post: post
})

export const requestPost = postId => ({
  type: REQUEST_POST,
  postId: postId
})

export const fetchActivePost = postId => {
  return dispatch => {
    dispatch(requestPost(postId))

    getPost(postId).then(
      res => {
        dispatch(setActivePost(res))
      }
    )
  }
}

export const incrementVoteScoreAndUpdateDB = (postId) => {
  return dispatch => {
    dispatch({
      type: INCREMENT_VOTE,
    })

    incrementVoteScoreInDB(postId)
  }
}

export const decrementVoteScoreAndUpdateDB = (postId) => {
  return dispatch => {
    dispatch({
      type: DECREMENT_VOTE,
    })

    decrementVoteScoreInDB(postId)
  }
}
