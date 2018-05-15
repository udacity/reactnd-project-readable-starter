
const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const apiCall = ({type, method, path, payload}) =>
  fetch(`${api}/${path}`, {
    method: method,
    headers: headers
  })
  .then(res => res.json())

    /*
export const getCategories = () =>
  fetch(`${api}/categories`, {
    method: 'GET',
    headers: headers
  })
  .then(res => res.json())
  .then(data => data.categories)
  */


export const apiMiddleware = store => next => action => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }

  apiCall(action.meta).then((payload) => {
    let newAction = Object.assign({}, action, {
      payload: payload
    })
    delete newAction.meta
    store.dispatch(newAction)
  })
}

export default apiMiddleware

/*
export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
*/
