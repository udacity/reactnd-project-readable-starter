import {getCategories} from '../utils/contentAPI'

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'

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
    case UPDATE_CATEGORIES:
      return {
        ...state,
        isLoading: false,
        list: action.categories
      }
    default:
      return state
  }
}

export const requestCategories = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_CATEGORIES
    })

    getCategories().then(
      res => dispatch({
        type: UPDATE_CATEGORIES,
        categories: res.categories
      })
    )

  }
}
