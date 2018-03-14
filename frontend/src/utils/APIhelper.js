const URL = 'http://localhost:3001'

let token = localStorage.token;
if (!token) {
  localStorage.token = Math.random().toString(36).substr(-8);
  token = localStorage.token;
}

const headers = {
  'Authorization': token,
  'Accept': 'application/json',
  "Content-Type": "application/json"
}

//GET /categories
export const getCategoriesApi = () => {
  return fetch(`${URL}/categories`, { headers })
    .then(response => response.json())
    .then(data => data.categories);
}

//GET /:category/posts
export const getPostsByCategoryApi = (category) => {
  return fetch(`${URL}/${category}/posts`, { headers })
    .then(response => response.json())
    .then(data => data)
}

//GET /posts
export const getPostsApi = () => {
  return fetch(`${URL}/posts`, { headers })
    .then(response => response.json())
}

// POST /posts
export const addNewPostApi = (newPost) => {
  return fetch(`${URL}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
  .then(data => data.json())
}

// GET /posts/:id
export const getPostApi = (id) => {
  return fetch(`${URL}/posts/${id}`, { headers })
    .then(response => response.json())
}

// PUT /posts/:id
export const editPostApi = (id, post) => {
  return fetch(`${URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(data => data.json())
}

// POST /posts/:id
export const votePostApi = (id, option) => {
  return fetch(`${URL}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: option
    })
  })
  .then(data => data.json())
}

// DELETE /posts/:id
export const deletePostApi = (id) => {
  return fetch(`${URL}/posts/${id}`, {
    method: 'DELETE',
    headers
  })
}

// POST /comments
export const addCommentApi = (newComment) => {
  return fetch(`${URL}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  })
  .then(data => data.json())
}

// GET /posts/:id/comments
export const getCommentsApi = (parentId) => {
  return fetch(`${URL}/posts/${parentId}/comments`, { headers })
    .then(response => response.json())
}

// PUT /comments/:id
export const editCommentApi = (commentId, comment) => {
  return fetch(`${URL}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  .then(data => data.json())
}

// POST /comments/:id
export const voteCommentApi = (commentId, option) => {
  return fetch(`${URL}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: option
    })
  })
  .then(data => data.json())
}

// DELETE /comments/:id
export const deleteCommentApi = (commentId) => {
  return fetch(`${URL}/comments/${commentId}`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json())
}
