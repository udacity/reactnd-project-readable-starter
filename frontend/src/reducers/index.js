import { type } from '../actions'

const initialState = {
  categories: []
}

function reducer (state = initialState, action) {
  switch(action.type){
    case type.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories
      }
    case type.GET_POSTS:
      return {
        ...state,
        post: undefined,
        posts: action.payload
      }
    case type.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    case type.ADD_POST:
      return {
        ...state
      }
    case type.GET_POST:
      return {
        ...state,
        post: action.payload
      }
    case type.VOTE_POST:
      return {
        ...state,
        post: action.payload,
        posts: state.posts ? state.posts.map((post) => {
          return post.id === action.payload.id ? action.payload : post
        }) : [ action.payload ]
      }
    case type.VOTE_COMMENT:
      return {
        ...state,
        comments: state.comments ? state.comments.map((comment) => {
          return comment.id === action.payload.id ? action.payload : comment
        }) : [ action.payload ]
      }
    case type.DELETE_POST:
    case type.ADD_COMMENT:
    case type.VOTE_COMMENT:
    case type.DELETE_COMMENT:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducer
