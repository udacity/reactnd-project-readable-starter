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

export const getCategoriesApi = () => {
  return fetch(`${URL}/categories`, { headers })
    .then(response => response.json())
    .then(data => data.categories);
}
