import { FETCH_CATEGORIES } from "./Constants";

import { getCategoriesApi } from '../utils/APIhelper'

export const getCategories = () => {
  return (dispatch) => {
    getCategoriesApi().then(categories => {
      dispatch({
        type: FETCH_CATEGORIES,
        categories
      })
    })
  }
}
