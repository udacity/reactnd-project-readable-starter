import {
  REQUEST_COMMENTS_FOR_POST,
  SET_ACTIVE_COMMENTS
} from '../actions'

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
    default:
      return state
  }
}
