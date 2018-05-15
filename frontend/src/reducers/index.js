import {
  GET_CATEGORIES,
  ADD_POST,
  VOTE_POST,
  DELETE_POST,
  ADD_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT
} from '../actions'

const initialState = {
  categories: []
}

function reducer (state = initialState, action) {
  switch(action.type){
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case ADD_POST:
    case VOTE_POST:
    case DELETE_POST:
    case ADD_COMMENT:
    case VOTE_COMMENT:
    case DELETE_COMMENT:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducer
