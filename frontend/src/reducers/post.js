import {
  GET_ALL_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_SUCCESS,
} from './../actions/constants';

const posts = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_POSTS_SUCCESS:
      return action.posts;
    case CREATE_POST_SUCCESS:
      return [
        ...state,
        action.post,
      ];
    case EDIT_POST_SUCCESS:
      return state.map(p => post(p, action));
    case DELETE_POST_SUCCESS:
      return [
        ...state.filter(post => post.id !== action.id),
      ];
    case UPVOTE_POST_SUCCESS:
    case DOWNVOTE_POST_SUCCESS:
      return state.map(p => post(p, action));
    default:
      return state;
  }
};

const post = (state = {}, action) => {
  switch (action.type) {
    case EDIT_POST_SUCCESS:
      if (state.id !== action.post.id) {
        return state;
      }
      return {
        ...action.post,
      };
    case UPVOTE_POST_SUCCESS:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore + 1,
      };
    case DOWNVOTE_POST_SUCCESS:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore - 1,
      };
    default:
      return state;
  }
};

export default posts;
