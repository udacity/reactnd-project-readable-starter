import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import error from './error'

export default combineReducers({
  error,
  categories,
  posts,
  comments
})
