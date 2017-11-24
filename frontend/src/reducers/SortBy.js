export const SET_SORT_BY = 'SET_SORT_BY'

const sortByPossibilities = ['voteScore', 'timestamp']

const initialState = 'voteScore'

export default (state=initialState, action) => {
  switch(action.type) {
    case SET_SORT_BY:
      if (sortByPossibilities.includes(action.sortBy)){
        return action.sortBy
      } else {
        throw `Invalid sorting method: ${action.sortBy}.`
      }
    default:
      return state
  }
}

export const setSortBy = (sortBy) => {
  return sortBy
}
