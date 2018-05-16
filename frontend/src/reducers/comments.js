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
      let comments = []
      if( state.comments ){
        state.comments.map((comment) => {
          comments.push(comment)
          return comment
        })
      }
      comments.push(action.payload)
      return comments
    case type.DELETE_COMMENT:
      return state
    default:
      return state
  }
}
