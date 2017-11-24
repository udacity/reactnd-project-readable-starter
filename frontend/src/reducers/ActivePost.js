import {
  REQUEST_POST,
  SET_ACTIVE_POST,
  INCREMENT_VOTE,
  DECREMENT_VOTE
} from '../actions'

const initialState = {
  isLoading: false,
  post: {}
}

export default (state=initialState, action) => {
  switch(action.type) {
    case REQUEST_POST:
      return {
        ...state,
        isLoading:true
      }
    case SET_ACTIVE_POST:
      return {
        ...state,
        post: action.post
      }
    case INCREMENT_VOTE:
      return {
        ...state,
        post: {
          ...state.post,
          voteScore: state.post.voteScore + 1
        }
      }
    case DECREMENT_VOTE:
      return {
        ...state,
        post: {
          ...state.post,
          voteScore: state.post.voteScore - 1
        }
      }
    default:
      return state
  }
}
