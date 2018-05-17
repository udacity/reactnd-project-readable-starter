const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

export const apiCall = ({type, method, path, payload, body}) => {
  let params = {
    method: method,
    headers: headers,
  }
  if(body){
    params.body = JSON.stringify(body)
  }
  return fetch(`${api}/${path}`, params).then(res => res.json())
}

export const apiMiddleware = store => next => action => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }

  return apiCall(action.meta).then((payload) => {
    let newAction = Object.assign({}, action, {
      payload: payload
    })
    delete newAction.meta
    store.dispatch(newAction)
  })
}

export default apiMiddleware
