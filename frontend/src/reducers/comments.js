import { type } from '../actions/comments'
import { slicePush, mapUpdate, sliceFilter } from './helpers'

export default function comments(state = [], action) {
  switch(action.type){
    case type.GET_COMMENTS:
      return action.payload

    case type.VOTE_COMMENT:
    case type.EDIT_COMMENT:
      return mapUpdate(state, action.payload)

    case type.ADD_COMMENT:
      return slicePush(state, action.payload)

    case type.DELETE_COMMENT:
      return sliceFilter(state, action.payload)

    default:
      return state
  }
}
