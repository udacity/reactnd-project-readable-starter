import { timestamp, uniqueId, sortFunc } from './helpers'

export const type = {
  GET_POSTS: 'GET_POSTS',
  GET_POST: 'GET_POST',
  ADD_POST: 'ADD_POST',
  VOTE_POST: 'VOTE_POST',
  EDIT_POST: 'EDIT_POST',
  DELETE_POST: 'DELETE_POST',
  SORT_POSTS: 'SORT_POSTS',
}

export function sortPosts(key, reverse){
  return {
    type: type.SORT_POSTS,
    sortFunc: sortFunc(key),
    reverse: reverse,
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
    id: id,
    meta: {
      type: 'api',
      method: 'GET',
      path: `posts/${id}`
    }
  }
}

export function addPost ({ category, title, body, author }) {
  let data = {
    id: uniqueId(),
    timestamp: timestamp(),
    title: title,
    body: body,
    author: author,
    category: category
  }
  return {
    type: type.ADD_POST,
    meta: {
      type: 'api',
      method: 'POST',
      path: 'posts',
      body: data
    },
    ...data
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
  let data = {
    title: title,
    body: body,
  }
  return {
    type: type.EDIT_POST,
    id: id,
    meta: {
      type: 'api',
      method: 'PUT',
      path: `posts/${id}`,
      body: data,
    },
    ...data
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
