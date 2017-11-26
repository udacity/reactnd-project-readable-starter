import {
  getAllPosts,
  createPost as createPostAPI
} from '../utils/contentAPI'
import {
  REQUEST_POSTS,
  SET_POSTS,
  CREATE_POST
} from './index'
import uuidv4 from 'uuid/v4'

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


export const createPost =  ({body, title, author, category}) => {
  return dispatch => {
    dispatch({
      type: CREATE_POST
    })
    return createPostAPI({
      body,
      title,
      author,
      category,
      voteScore:1,
      deleted:false,
      id: uuidv4(),
      timestamp: Date.now()
    })
  }
}
