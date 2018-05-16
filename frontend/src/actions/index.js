import uuidv4 from 'uuid/v4'

export const type = {
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_POSTS: 'GET_POSTS',
  GET_POST: 'GET_POST',
  ADD_POST: 'ADD_POST',
  VOTE_POST: 'VOTE_POST',
  EDIT_POST: 'EDIT_POST',
  DELETE_POST: 'DELETE_POST',
  GET_COMMENTS: 'GET_COMMENTS',
  ADD_COMMENT: 'ADD_COMMENT',
  VOTE_COMMENT: 'VOTE_COMMENT',
  EDIT_COMMENT: 'EDIT_COMMENT',
  DELETE_COMMENT: 'DELETE_COMMENT'
}

function uniqueId(){
  return uuidv4()
}

function timestamp(){
  return Date.now()
}

export function getCategories(){
  return {
    type: type.GET_CATEGORIES,
    meta: {
      type: 'api',
      method: 'GET',
      path: 'categories',
    }
  }
}

export function getPosts(category){
  let path = "posts"
  if(category){
    path = `${category}/posts`
  }
  return {
    type: type.GET_POSTS,
    meta: {
      type: 'api',
      method: 'GET',
      path: path
    }
  }
}

export function getPost(id){
  return {
    type: type.GET_POST,
    meta: {
      type: 'api',
      method: 'GET',
      path: `posts/${id}`
    }
  }
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

export function addPost ({ category, title, body, author }) {
  return {
    type: type.ADD_POST,
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
    type: type.VOTE_POST,
    id: id,
    option: option,
    meta: {
      type: 'api',
      method: 'POST',
      path: `posts/${id}`,
      body: {
        option: option
      }
    }
  }
}

export function editPost({ id, title, body }){
  return {
    type: type.EDIT_POST,
    id: id,
    timestamp: timestamp(),
    title: title,
    body: body
  }
}

export function deletePost(id){
  return {
    type: type.DELETE_POST,
    id: id,
    meta: {
      type: 'api',
      method: 'DELETE',
      path: `posts/${id}`
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
  return {
    type: type.EDIT_COMMENT,
    id: id,
    timestamp: timestamp(),
    body: body
  }
}
