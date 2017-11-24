import {
  REQUEST_POST,
  SET_ACTIVE_POST,
  INCREMENT_VOTE,
  DECREMENT_VOTE,
  REQUEST_COMMENTS_FOR_POST,
  SET_COMMENTS_FOR_POST
 } from './index'
import {
  getPost,
  incrementVoteScore as incrementVoteScoreInDB,
  decrementVoteScore as decrementVoteScoreInDB,
  getComments
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

export const requestCommentsForPost = postId => ({
  type: REQUEST_COMMENTS_FOR_POST,
  postId: postId
})

export const setCommentsForPost = comments => ({
  type: SET_COMMENTS_FOR_POST,
  comments: comments
})

export const fetchCommentsForPost = postId => {
  return dispatch => {
    dispatch(requestCommentsForPost(postId))

    getComments(postId).then(
      res => {
        dispatch(setCommentsForPost(res))
      }
    )
  }
}
