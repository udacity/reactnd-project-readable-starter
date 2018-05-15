import uuidv4 from 'uuid/v4'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const ADD_POST = 'ADD_POST'
export const VOTE_POST = 'VOTE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

function uniqueId(){
  return uuidv4()
}

function timestamp(){
  return Date.now()
}

export function addPost ({ category, title, body, author }) {
  return {
    type: ADD_POST,
    id: uniqueId(),
    timestamp: timestamp(),
    title: title,
    body: body,
    author: author,
    category: category
  }
}

export function votePost({ id, option }){
  return {
    type: VOTE_POST,
    id: id,
    option: option
  }
}

export function editPost({ id, title, body }){
  return {
    type: EDIT_POST,
    id: id,
    timestamp: timestamp(),
    title: title,
    body: body
  }
}

export function deletePost({ id }){
  return {
    type: DELETE_POST,
    id: id
  }
}

export function addComment({ parentId, body, author }){
  return {
    type: ADD_COMMENT,
    id: uniqueId(),
    timestamp: timestamp(),
    body: body,
    author: author,
    parentId: parentId
  }
}

export function voteComment({ id, option }){
  return {
    type: VOTE_COMMENT,
    id: id,
    option: option
  }
}

export function editComment({ id, body }){
  return {
    type: EDIT_COMMENT,
    id: id,
    timestamp: timestamp(),
    body: body
  }
}
