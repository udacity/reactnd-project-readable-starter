import {
  REQUEST_POST,
  SET_ACTIVE_POST,
  CAST_VOTE_ON_POST
} from '../actions'
import {voteIncrements} from '../actions/voting'

const initialState = {
  isLoading:false,
  post: {}
}

export default (state=initialState, action) => {
  switch(action.type) {
    case REQUEST_POST:
      return {
        ...state,
        isLoading: true
      }
    case SET_ACTIVE_POST:
      return {
        ...state,
        isLoading: false,
        post: action.post
      }
    case CAST_VOTE_ON_POST:
      return {
        ...state,
        post: {
          ...state.post,
          voteScore: state.post.voteScore + voteIncrements[action.vote]
        }
      }
    default:
      return state
  }
}
