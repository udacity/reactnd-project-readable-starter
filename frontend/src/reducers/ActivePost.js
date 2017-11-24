import {
  REQUEST_POST,
  SET_ACTIVE_POST,
  INCREMENT_VOTE,
  DECREMENT_VOTE,
  REQUEST_COMMENTS_FOR_POST,
  SET_COMMENTS_FOR_POST
} from '../actions'

const initialState = {
  postIsLoading: false,
  commentsAreLoading:false,
  comments:[],
  post: {}
}

export default (state=initialState, action) => {
  switch(action.type) {
    case REQUEST_POST:
      return {
        ...state,
        postIsLoading: true
      }
    case SET_ACTIVE_POST:
      return {
        ...state,
        postIsLoading: false,
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
    case REQUEST_COMMENTS_FOR_POST:
      return {
        ...state,
        commentsAreLoading:true
      }
    case SET_COMMENTS_FOR_POST:
      return {
        ...state,
        commentsAreLoading: false,
        comments: action.comments
      }
    default:
      return state
  }
}
