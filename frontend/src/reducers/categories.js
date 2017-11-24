import { REQUEST_CATEGORIES, UPDATE_CATEGORIES } from '../actions'

const initialState = {
  list: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch(action.type){
    case REQUEST_CATEGORIES:
      return {
        ...state,
        isLoading: true
      }
    case UPDATE_CATEGORIES:
      return {
        ...state,
        isLoading: false,
        list: action.categories
      }
    default:
      return state
  }
}
