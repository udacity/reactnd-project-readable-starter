import {
  REQUEST_POST,
  UPDATE_ACTIVE_POST,
  CREATE_POST,
  BEGIN_POST_EDIT,
  END_POST_EDIT
 } from './index'
import {
  getPost,
  createPost as createPostAPI,
  editPost as editPostAPI
} from '../utils/contentAPI'
import uuidv4 from 'uuid/v4'

export const updateActivePost = post => ({
  type: UPDATE_ACTIVE_POST,
  postDetails: post
})

export const requestPost = postId => ({
  type: REQUEST_POST,
  postId: postId
})

export const beginPostEdit = () => ({
  type: BEGIN_POST_EDIT
})
export const endPostEdit = () => ({
  type: END_POST_EDIT
})

export const fetchActivePost = postId => {
  return dispatch => {
    dispatch(requestPost(postId))

    getPost(postId).then(
      res => {
        dispatch(updateActivePost (res))
      }
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

export const submitEdit =  (postDetails, id) => {
  return dispatch => {
    dispatch({
      type: END_POST_EDIT
    })
    dispatch({
      type: UPDATE_ACTIVE_POST,
      postDetails: postDetails
    })
    editPostAPI(postDetails, id)
  }
}
