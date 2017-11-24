import {getCategories} from '../utils/contentAPI'
import { REQUEST_CATEGORIES, SET_CATEGORIES } from './index'

export const fetchCategories = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_CATEGORIES
    })

    getCategories().then(
      res => dispatch({
        type: SET_CATEGORIES,
        categories: res.categories
      })
    )

  }
}
