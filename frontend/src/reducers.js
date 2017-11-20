import { combineReducers } from 'redux'

//Import component reducers here
import { postReducer } from './Post/reducer'
import { postsList } from './PostsList/reducer'

export default combineReducers({
    postReducer, postsList
});