const api = "http://localhost:3001";

export const getCategories = () => fetch(`${api}/categories`, {
    method: 'GET',
    headers: {
      'Authorization': 'authorized'
    }
  }).then(
    res => res.json()
  )

export const getAllPosts = () => fetch(`${api}/posts`, {
    method: 'GET',
    headers: {
      'Authorization': 'authorized'
    }
  }).then(
    res => res.json()
  )

export const getPost = (postId) => fetch(`${api}/posts/${postId}`, {
    method: 'GET',
    headers: {
      'Authorization': 'authorized'
    }
  }).then(
    res => res.json()
  )
