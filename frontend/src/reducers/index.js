import { combineReducers } from 'redux';


import categories from './category';
import posts from './post';
// import comments from './comment';


export default combineReducers({
  categories,
  posts,
  // comments,
});
