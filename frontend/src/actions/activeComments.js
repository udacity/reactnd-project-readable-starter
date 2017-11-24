import {
  REQUEST_COMMENTS_FOR_POST,
  SET_ACTIVE_COMMENTS
 } from './index'

import {getComments} from '../utils/contentAPI'

export const requestCommentsForPost = postId => ({
  type: REQUEST_COMMENTS_FOR_POST,
  postId: postId
})

export const setActiveComments = comments => ({
  type: SET_ACTIVE_COMMENTS,
  comments: comments
})

export const fetchCommentsForPost = postId => {
  return dispatch => {
    dispatch(requestCommentsForPost(postId))

    getComments(postId).then(
      res => {
        dispatch(setActiveComments(res))
      }
    )
  }
}
