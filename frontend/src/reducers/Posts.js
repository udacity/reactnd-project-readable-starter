import { REQUEST_POSTS, UPDATE_POSTS } from '../actions'

const initialState = {
  list: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch(action.type){
    case REQUEST_POSTS:
      return {
        ...state,
        isLoading: true
      }
    case UPDATE_POSTS:
      return {
        ...state,
        isLoading: false,
        list: action.posts
      }
    default:
      return state
  }
}
