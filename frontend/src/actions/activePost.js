import {REQUEST_POST, SET_ACTIVE_POST} from './index'
import {getPost} from '../utils/contentAPI'

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
        console.log(res)
        dispatch(setActivePost(res))
      }
    )
  }
}
