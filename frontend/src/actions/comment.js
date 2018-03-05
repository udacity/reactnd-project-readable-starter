import { CommentAPI } from '../api/CommentAPI';
import {
  GET_ALL_COMMENTS_SUCCESS,
  CREATE_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_SUCCESS,
} from './constants';


const getAllCommentsSuccess = (parentId, comments) => ({
  type: GET_ALL_COMMENTS_SUCCESS,
  comments,
  parentId,
});


const createCommentSuccess = (parentId, comment) => ({
  type: CREATE_COMMENT_SUCCESS,
  comment,
  parentId,
});


const editCommentSuccess = (parentId, comment) => ({
  type: EDIT_COMMENT_SUCCESS,
  comment,
  parentId,
});


const deleteCommentSuccess = (parentId, id) => ({
  type: DELETE_COMMENT_SUCCESS,
  id,
  parentId,
});

const upVoteCommentSuccess = (parentId, id) => ({
  type: UPVOTE_COMMENT_SUCCESS,
  id,
  parentId,
});

const downVoteCommentSuccess = (parentId, id) => ({
  type: DOWNVOTE_COMMENT_SUCCESS,
  id,
  parentId,
});

export class CommentAction {
  static getAllComments = parentId => (dispatch) => {
    CommentAPI.loadCommentsByPos(parentId).then(({ data }) => {
      dispatch(getAllCommentsSuccess(parentId, data));
    }).catch(err => err);
  };

  static deleteComment = (parentId, id) => (dispatch) => {
    CommentAPI.deleteComment(id).then(({ data }) => {
      dispatch(deleteCommentSuccess(parentId, id));
    }).catch(err => err);
  };
  static upVoteComment = (parentId, id) => (dispatch) => {
    CommentAPI.upVoteComment(id).then(({ data }) => {
      dispatch(upVoteCommentSuccess(parentId, id));
    }).catch(err => err);
  };
  static downVoteComment = (parentId, id) => (dispatch) => {
    CommentAPI.downVoteComment(id).then(({ data }) => {
      dispatch(downVoteCommentSuccess(parentId, id));
    }).catch(err => err);
  };
  static editComment = (parentId, id, comment) => (dispatch) => {
    CommentAPI.editComment(id, comment).then(({ data }) => {
      dispatch(editCommentSuccess(parentId, data));
    }).catch(err => err);
  };
  static saveComment = (parentId, comment) => (dispatch) => {
    CommentAPI.saveComment(comment).then(({ data }) => {
      dispatch(createCommentSuccess(parentId, data));
    }).catch(err => err);
  };
}

export default CommentAction;
