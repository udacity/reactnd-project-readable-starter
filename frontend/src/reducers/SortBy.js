import {SET_SORT_BY} from '../actions'

const sortByPossibilities = ['voteScore', 'timestamp', 'author']

const initialState = 'voteScore'

export default (state=initialState, action) => {
  switch(action.type) {
    case SET_SORT_BY:
      if (sortByPossibilities.includes(action.sortBy)){
        return action.sortBy
      } else {
        throw Error(`Invalid sorting method: ${action.sortBy}.`)
      }
    default:
      return state
  }
}
