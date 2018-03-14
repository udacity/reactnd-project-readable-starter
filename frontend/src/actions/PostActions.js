import { FETCH_POST, EDIT_POST, VOTE_POST, DELETE_POST } from "./Constants";

import { getPostApi, editPostApi, votePostApi, deletePostApi } from '../utils/APIhelper'

export const fetchPost = (id) => {
  return (dispatch) => {
    getPostApi(id).then(post =>{
      dispatch({
        type: FETCH_POST,
        post
      })
    })
  }
}

export const editPost = (id, post, callback) => {
  return (dispatch) => {
    editPostApi(id, post).then(updatedPost => {
      dispatch({
        type: EDIT_POST,
        updatedPost,
        id
      })
    }).then(() => callback())
  }
}

export const votePost = (id, option) => {
  return (dispatch) => {
    votePostApi(id, option).then(post => {
      dispatch({
        type: VOTE_POST,
        id,
        option
      })
    })
  }
}

export const deletePost = (id, callback) => {
  return dispatch => {
    deletePostApi(id).then(() => callback())
    dispatch({
      type: DELETE_POST,
      id })
  }
}
