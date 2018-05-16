import { type } from '../actions'

export default function comments(state = [], action) {
  switch(action.type){
    case type.GET_COMMENTS:
      return action.payload
    case type.VOTE_COMMENT:
      return state.map((comment) => {
        return comment.id === action.payload.id ? action.payload : comment
      })
    case type.ADD_COMMENT:
      let added = state.slice()
      added.push(action.payload)
      return added
    case type.DELETE_COMMENT:
      return state.filter((comment) => comment.id !== action.payload.id).slice()
    default:
      return state
  }
}
