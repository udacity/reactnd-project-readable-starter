import { FETCH_CATEGORIES } from '../actions/Constants'

const categories = (state = [], action) => {
  switch(action.type) {
    case FETCH_CATEGORIES:
      return action.categories
    default:
      return state
  }
}

export default categories
