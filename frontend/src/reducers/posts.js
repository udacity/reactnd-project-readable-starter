import { type } from '../actions/posts'
import { slicePush, mapUpdate } from './helpers'

export default function posts(state = [], action) {
  switch(action.type){
    case type.GET_POSTS:
      return action.payload

    case type.ADD_POST:
      return slicePush(state, action.payload)

    case type.EDIT_POST:
    case type.VOTE_POST:
    case type.DELETE_POST:
      return mapUpdate(state, action.payload)

    case type.GET_POST:
      let post = action.payload.id ? action.payload : { id: action.id, deleted: true }
      return mapUpdate(state, post)

    case type.SORT_POSTS:
      let sorted = state.slice()
      sorted.sort(action.sortFunc)
      if( action.reverse )
        sorted.reverse()
      return sorted

    default:
      return state
  }
}
