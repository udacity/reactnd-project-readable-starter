import {
  GET_ALL_COMMENTS_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_SUCCESS,
} from '../actions/constants';

const comments = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_COMMENTS_SUCCESS:
      return [
        ...state,
        ...action.comments,
      ];
    case CREATE_COMMENT_SUCCESS:
      return [
        ...state,
        action.comment,
      ];
    case EDIT_COMMENT_SUCCESS:
      return state.map(c => comment(c, action));
    case DELETE_COMMENT_SUCCESS:
      return [
        ...state.filter(comment => comment.id !== action.id),
      ];
    case UPVOTE_COMMENT_SUCCESS:
    case DOWNVOTE_COMMENT_SUCCESS:
      return state.map(c => comment(c, action));
    default:
      return state;
  }
};

const comment = (state = {}, action) => {
  switch (action.type) {
    case EDIT_COMMENT_SUCCESS:
      if (state.id !== action.comment.id) {
        return state;
      }
      return {
        ...action.comment,
      };
    case UPVOTE_COMMENT_SUCCESS:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore + 1,
      };
    case DOWNVOTE_COMMENT_SUCCESS:
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

export default comments;
