import {
  REQUEST_COMMENTS_FOR_POST,
  SET_ACTIVE_COMMENTS,
  EDIT_COMMENT,
  CREATE_COMMENT,
  OPEN_NEW_COMMENT_DIALOG,
  CLOSE_NEW_COMMENT_DIALOG,
  OPEN_EDIT_COMMENT_DIALOG,
  CLOSE_EDIT_COMMENT_DIALOG,
 } from './index'
 import uuidv4 from 'uuid/v4'

import {
  getComments,
  createComment as createCommentAPI,
  editComment as editCommentAPI
} from '../utils/contentAPI'

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
        // res is an array, let's convert it to an object indexed by ids
        const comments = res.reduce( (obj, item) => {
          obj[item.id] = item
          return obj
        }, {})
        dispatch(setActiveComments(comments))
      }
    )
  }
}

export const openNewCommentDialog = () => ({
  type: OPEN_NEW_COMMENT_DIALOG,
})
export const closeNewCommentDialog = () => ({
  type: CLOSE_NEW_COMMENT_DIALOG,
})
export const openEditCommentDialog = (id) => ({
  type: OPEN_EDIT_COMMENT_DIALOG,
  editCommentId:id
})
export const closeEditCommentDialog = () => ({
  type: CLOSE_EDIT_COMMENT_DIALOG,
})
export const newComment = (commentDetails) => {
  const {body, author, parentId} = commentDetails
  commentDetails = {
    body,
    author,
    parentId,
    timestamp: Date.now(),
    id: uuidv4(),
    parentDeleted: false,
    deleted: false,
    voteScore:1,
  }
  createCommentAPI
  return dispatch => {
    dispatch({
      type: CREATE_COMMENT,
      commentDetails: commentDetails
    })
    createCommentAPI(commentDetails)
  }
}

export const editComment = (commentDetails, id) => {
  const {body, author, parentId} = commentDetails
  return dispatch => {
    dispatch({
      type: EDIT_COMMENT,
      commentDetails: {
        body,
        author,
        parentId,
        id
      }
    })
    editCommentAPI(commentDetails, id)
  }
}
