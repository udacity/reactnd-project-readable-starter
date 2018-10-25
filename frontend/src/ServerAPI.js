
const api = "http://localhost:3001"

let authorizationToken = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': authorizationToken
}

export const getAll = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)