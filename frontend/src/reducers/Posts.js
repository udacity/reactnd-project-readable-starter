import { REQUEST_POSTS, SET_POSTS } from '../actions'

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
    case SET_POSTS:
      return {
        ...state,
        isLoading: false,
        list: action.posts
      }
    default:
      return state
  }
}
