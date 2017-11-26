import {
  getAllPosts
} from '../utils/contentAPI'
import {
  REQUEST_POSTS,
  SET_POSTS,
} from './index'

export const fetchPosts = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_POSTS
    })

    getAllPosts().then(
      res => dispatch({
        type: SET_POSTS,
        posts: res
      })
    )

  }
}
