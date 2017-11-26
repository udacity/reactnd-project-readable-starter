const api = "http://localhost:3001";

const token = "authorized!"
const headers = {
  Authorization: token
}

// Category Methods
export const getCategories = () => fetch(`${api}/categories`, {
    method: 'GET',
    headers: {
      ...headers
    }
  }).then(
    res => res.json()
  )

// Post Methods
export const getAllPosts = () => fetch(`${api}/posts`, {
    method: 'GET',
    headers: {
      ...headers
    }
  }).then(
    res => res.json()
  )

export const getPost = (postId) => fetch(`${api}/posts/${postId}`, {
    method: 'GET',
    headers: {
      ...headers
    }
  }).then(
    res => res.json()
  )

export const newPost = (post) => fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res =>res.json())

// type should be 'comments' or 'posts'
// vote should be 'upVote' or 'downVote'
export const castVote = (type, id, vote) => fetch(`${api}/${type}/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option: vote})
  }).then(res =>res.json())

// Comment Methods
export const getComments = (postId) => fetch(`${api}/posts/${postId}/comments`, {
    method: 'GET',
    headers: {
      ...headers
    }
  }).then(
    res => res.json()
  )
