import {
  REQUEST_POST,
  UPDATE_ACTIVE_POST,
  CAST_VOTE_ON_POST,
  BEGIN_POST_EDIT,
  END_POST_EDIT
} from '../actions'
import {LOCATION_CHANGE} from 'react-router-redux'
import {voteIncrements} from '../actions/voting'

const initialState = {
  isLoading: false,
  isInEditMode: false,
  post: {},
}

export default (state=initialState, action) => {
  switch(action.type) {
    case REQUEST_POST:
      return {
        ...state,
        isLoading: true
      }
    case UPDATE_ACTIVE_POST:
      return {
        ...state,
        isLoading: false,
        post: {
          ...action.postDetails
        }
      }
    case CAST_VOTE_ON_POST:
      return {
        ...state,
        post: {
          ...state.post,
          voteScore: state.post.voteScore + voteIncrements[action.vote]
        }
      }
    case BEGIN_POST_EDIT:
      return {
        ...state,
        isInEditMode: true
      }
    case END_POST_EDIT:
      return {
        ...state,
        isInEditMode: false
      }
    case LOCATION_CHANGE:
      return {
        ...state,
        isInEditMode: false
      }
    default:
      return state
  }
}
