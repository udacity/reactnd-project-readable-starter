import { FETCH_COMMENTS, ADD_COMMENT, EDIT_COMMENT, VOTE_COMMENT, DELETE_COMMENT } from "./Constants";

import { getCommentsApi, addCommentApi, editCommentApi, voteCommentApi, deleteCommentApi } from '../utils/APIhelper'


export const getComments = (parentId) => {
  return (dispatch) => {
    getCommentsApi(parentId).then(comments => {
      dispatch({
        type: FETCH_COMMENTS,
        parentId,
        comments
      })
    })
  }
}

export const addComment = (comment, parentId, callback) => {
  return (dispatch) => {
    addCommentApi(comment).then(comment => {
      dispatch({
        type: ADD_COMMENT,
        parentId,
        comment
      })
    }).then(() => callback())
  }
}

export const editComment = (commentId, parentId, comment, callback) => {
  return (dispatch) => {
    editCommentApi(commentId, comment)
      .then(updatedComment => {
        dispatch({
          type: EDIT_COMMENT,
          updatedComment,
          commentId,
          parentId
        })
      }).then(() => callback())
  }
}

export const voteComment = (commentId, parentId, option) => {
  return (dispatch) => {
    voteCommentApi(commentId, option).then(updatedComment => {
      dispatch({
        type: VOTE_COMMENT,
        updatedComment,
        commentId,
        parentId
      })
    })
  }
}

export const deleteComment = (commentId, callback) => {
  return (dispatch) => {
    deleteCommentApi(commentId).then(() => callback())
    dispatch({
      type: DELETE_COMMENT,
      commentId
    })
  }
}
