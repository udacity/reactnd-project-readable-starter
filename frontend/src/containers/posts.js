import { getAllPosts } from '../utils/contentAPI'
import { REQUEST_POSTS, UPDATE_POSTS } from './index'

export const fetchPosts = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_POSTS
    })

    getAllPosts().then(
      res => dispatch({
        type: UPDATE_POSTS,
        posts: res
      })
    )

  }
}
