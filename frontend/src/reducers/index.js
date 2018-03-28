import { combineReducers } from 'redux'

import categories from './CategoryReducers'
import posts from './PostsReducers'
import comment from './CommentReducers'

export default combineReducers({
  categories,
  posts,
  comment,

})
