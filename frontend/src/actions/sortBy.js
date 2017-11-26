import {SET_SORT_BY} from './index'

export const setSortBy = (sortBy) => {
  return {
    type: SET_SORT_BY,
    sortBy: sortBy
  }
}
