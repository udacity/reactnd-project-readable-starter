import {
  GET_ALL_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_SUCCESS,
  GET_ALL_COMMENTS_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_SUCCESS,
} from './../actions/constants';
import comments from './comment';

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
    case DELETE_COMMENT_SUCCESS:
    case CREATE_COMMENT_SUCCESS:
    case GET_ALL_COMMENTS_SUCCESS:
    case EDIT_COMMENT_SUCCESS:
    case UPVOTE_COMMENT_SUCCESS:
    case DOWNVOTE_COMMENT_SUCCESS:
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
    case GET_ALL_COMMENTS_SUCCESS:
      if (state.id !== action.parentId) {
        return state;
      }
      return {
        ...state,
        comments: action.comments,
      };
    case CREATE_COMMENT_SUCCESS:
      if (state.id !== action.parentId) {
        return state;
      }
      state.comments.push(action.comment);
      return {
        ...state,
        commentCount: state.commentCount + 1,
        comments: state.comments,
      };
    case DELETE_COMMENT_SUCCESS:
      if (state.id !== action.parentId) {
        return state;
      }
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.id),
        commentCount: state.commentCount - 1,
      };
    case EDIT_COMMENT_SUCCESS:
    case UPVOTE_COMMENT_SUCCESS:
    case DOWNVOTE_COMMENT_SUCCESS:
      if (state.id !== action.parentId) {
        return state;
      }
      return {
        ...state,
        comments: comments(state.comments, action),
      };
    default:
      return state;
  }
};

export default posts;
