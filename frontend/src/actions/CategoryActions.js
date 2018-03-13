import { FETCH_CATEGORIES, FETCH_CATEGORIES_POSTS } from "./Constants";

import { getCategoriesApi } from '../utils/APIhelper'

const fetchCategories = (categories) => ({
  type: FETCH_CATEGORIES,
  categories
})

export const getCategories = () => dispatch => (
  getCategoriesApi()
    .then(categories => {
      dispatch(fetchCategories(categories))
    })
    .catch(err => console.error(err))
)
