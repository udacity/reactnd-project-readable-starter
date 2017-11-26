import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import categories from './Categories'
import posts from './Posts'
import activePost from './ActivePost'
import activeComments from './ActiveComments'
import sortBy from './SortBy'

export default combineReducers({
  routing: routerReducer,
  categories: categories,
  posts: posts,
  activePost: activePost,
  activeComments: activeComments,
  sortBy: sortBy
})
