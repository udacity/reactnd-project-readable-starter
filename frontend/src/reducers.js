import { combineReducers } from 'redux'

//Import component reducers here
import { postReducer } from './Post/reducer'
import { postsList } from './PostsList/reducer'
import { searchBar } from './SearchBar/reducer'
import { categoriesList } from './CategoriesList/reducer'
import { sortMenu } from './SortMenu/reducer'

export default combineReducers({
    postReducer, postsList, searchBar, categoriesList, sortMenu
});