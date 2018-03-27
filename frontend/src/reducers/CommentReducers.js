import { FETCH_COMMENTS, ADD_COMMENT, EDIT_COMMENT, VOTE_COMMENT, DELETE_COMMENT } from '../actions/Constants'

  const comment = (state = {}, action) => {
  const { comments, commentId, parentId, updatedComment} = action
  switch(action.type) {
    case FETCH_COMMENTS:
      return Object.assign({}, state, {[parentId]: comments})

    case EDIT_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if(comment.id === commentId) {
            comment = updatedComment
          }
          return comment
        })
      }

    case VOTE_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if(comment.id === commentId) {
            comment = updatedComment
          }
          return comment
        })
      }

    case ADD_COMMENT:
      return Object.assign({}, state, {[parentId]: comments})

    case DELETE_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].filter(comment =>
          comment.id !== commentId
        )
      }

    default:
      return state
  }
}

export default comment
