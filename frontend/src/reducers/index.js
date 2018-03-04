import { combineReducers } from 'redux';


import categories from './category';

import posts from './post';


export default combineReducers({
  categories,
  posts,
});
