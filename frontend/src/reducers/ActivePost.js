import {REQUEST_POST, SET_ACTIVE_POST} from '../actions'

const initialState = {
  isLoading: false,
  post: {}
}

export default (state=initialState, action) => {
  switch(action.type) {
    case REQUEST_POST:
      return {
        ...state,
        isLoading:true
      }
    case SET_ACTIVE_POST:
      return {
        ...state,
        post: action.post
      }
    default:
      return state
  }
}
