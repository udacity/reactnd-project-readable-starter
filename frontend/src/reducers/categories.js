import { REQUEST_CATEGORIES, SET_CATEGORIES } from '../actions'

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
    case SET_CATEGORIES:
      return {
        ...state,
        isLoading: false,
        list: action.categories
      }
    default:
      return state
  }
}
