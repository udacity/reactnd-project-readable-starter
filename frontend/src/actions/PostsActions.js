import { FETCH_POSTS, FETCH_CATEGORIES_POSTS, ADD_NEW_POST, SORT_POSTS } from "./Constants";

import { getPostsApi, getPostsByCategoryApi, addNewPostApi } from '../utils/APIhelper'

export const fetchPosts = () => {
  return (dispatch) => {
    getPostsApi().then(posts => {
      dispatch({
        type: FETCH_POSTS,
        posts
      })
    })
  }
}

export const getPostsByCategory = (category) => {
  return (dispatch) => {
    getPostsByCategoryApi(category).then(posts => {
      dispatch({
        type: FETCH_CATEGORIES_POSTS,
        posts
      })
    })
  }
}


export const addNewPost = (post, callback) => {
  return (dispatch) => {
    addNewPostApi(post).then(() => callback())
    dispatch({
      type: ADD_NEW_POST,
      post
    })
  }
}

export const sortPosts = (value) => {
  return dispatch => {
    dispatch({
      type: SORT_POSTS,
      value
    })
  }
}
