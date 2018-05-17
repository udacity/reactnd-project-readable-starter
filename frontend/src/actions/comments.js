import { timestamp, uniqueId } from './helpers'

export const type = {
  GET_COMMENTS: 'GET_COMMENTS',
  ADD_COMMENT: 'ADD_COMMENT',
  VOTE_COMMENT: 'VOTE_COMMENT',
  EDIT_COMMENT: 'EDIT_COMMENT',
  DELETE_COMMENT: 'DELETE_COMMENT'
}

export function getComments(post_id){
  return {
    type: type.GET_COMMENTS,
    meta: {
      type: 'api',
      method: 'GET',
      path: `posts/${post_id}/comments`
    }
  }
}

export function addComment({ parentId, body, author }){
  let data = {
    id: uniqueId(),
    timestamp: timestamp(),
    body: body,
    author: author,
    parentId: parentId,
  }
  return {
    type: type.ADD_COMMENT,
    meta: {
      type: 'api',
      method: 'POST',
      path: 'comments',
      body: data
    },
    ...data
  }
}

export function voteComment({ id, option }){
  return {
    type: type.VOTE_COMMENT,
    id: id,
    option: option,
    meta: {
      type: 'api',
      method: 'POST',
      path: `comments/${id}`,
      body: {
        option: option
      }
    }
  }
}

export function editComment({ id, body }){
  let data = {
    timestamp: timestamp(),
    body: body
  }
  return {
    type: type.EDIT_COMMENT,
    id: id,
    meta: {
      type: 'api',
      method: 'PUT',
      path: `comments/${id}`,
      body: data
    },
    ...data
  }
}

export function deleteComment(id){
  return {
    type: type.DELETE_COMMENT,
    id: id,
    meta: {
      type: 'api',
      method: 'DELETE',
      path: `comments/${id}`
    }
  }
}
