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

const castVote = (postId, vote) => fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option: vote})
  }).then(res =>res.json())
export const decrementVoteScore = postId => castVote(postId, 'downVote')
export const incrementVoteScore = postId => castVote(postId, 'upVote')

// Comment Methods
export const getComments = (postId) => fetch(`${api}/posts/${postId}/comments`, {
    method: 'GET',
    headers: {
      ...headers
    }
  }).then(
    res => res.json()
  )
