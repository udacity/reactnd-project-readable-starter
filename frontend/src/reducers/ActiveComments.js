import {
  REQUEST_COMMENTS_FOR_POST,
  SET_ACTIVE_COMMENTS,
  CAST_VOTE_ON_COMMENT
} from '../actions'
import {voteIncrements} from '../actions/voting'

const initialState = {
  comments: [],
  isLoading: false
}

export default (state=initialState, action) => {
  switch(action.type) {
    case REQUEST_COMMENTS_FOR_POST:
      return {
        ...state,
        areLoading:true
      }
    case SET_ACTIVE_COMMENTS:
      return {
        ...state,
        areLoading: false,
        comments: action.comments
      }
    case CAST_VOTE_ON_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.id]: {
            ...state.comments[action.id],
            voteScore: state.comments[action.id]['voteScore'] + voteIncrements[action.vote]
          }
        }
      }
    default:
      return state
  }
}
