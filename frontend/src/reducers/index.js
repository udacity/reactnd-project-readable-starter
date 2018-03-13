import { combineReducers } from 'redux'
import { FETCH_CATEGORIES } from '../actions/Constants'

const categories = (state = { categories: [] }, action) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state
  }
}

export default combineReducers({
  categories,
})
