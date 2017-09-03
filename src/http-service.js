const api = 'http://localhost:5001';
const defaultParameters = { headers: { Authorization: 'granted' } };

export const getAllCategories = () => fetch(`${api}/categories`,
  defaultParameters)
  .then(response => response.json());

export const getCategoryPosts = category => fetch(`${api}/${category}/posts`,
  defaultParameters)
  .then(response => response.json());

export const getAllPosts = () => fetch(`${api}/posts`,
  defaultParameters)
  .then(response => response.json());

export const addNewPost = postData => fetch(`${api}/posts`,
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'granted',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
  .then(response => response.json());

export const getPost = postId => fetch(`${api}/posts/${postId}`,
  defaultParameters)
  .then(response => response.json());
