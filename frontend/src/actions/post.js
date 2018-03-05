import { PostAPI } from '../api/PostAPI';
import {
  GET_ALL_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_SUCCESS,
  UPDATE_POST_COMMENTS,
} from './constants';


const getAllPostsSuccess = posts => ({
  type: GET_ALL_POSTS_SUCCESS,
  posts,
});


const deletePostSuccess = id => ({
  type: DELETE_POST_SUCCESS,
  id,
});


const upVotePostSuccess = id => ({
  type: UPVOTE_POST_SUCCESS,
  id,
});


const downVotePostSuccess = id => ({
  type: DOWNVOTE_POST_SUCCESS,
  id,
});


const editPostSuccess = post => ({
  type: EDIT_POST_SUCCESS,
  post,
});


const createPostSuccess = post => ({
  type: CREATE_POST_SUCCESS,
  post,
});

export class PostAction {
  static updatePostComments = (parentId, commments) => (dispatch) => {
    dispatch({
      type: UPDATE_POST_COMMENTS,
      id: parentId,
      commments,
    });
  }
  static getAllPosts = () => (dispatch) => {
    PostAPI.loadPosts().then(({ data }) => {
      dispatch(getAllPostsSuccess(data));
    }).catch(err => err);
  };
  static getAllPostsByCategory = category => (dispatch) => {
    PostAPI.loadPostsByCategory(category).then(({ data }) => {
      dispatch(getAllPostsSuccess(data));
    }).catch(err => err);
  };
  static deletePost = id => (dispatch) => {
    PostAPI.deletePost(id).then(({ data }) => {
      dispatch(deletePostSuccess(id));
    }).catch(err => err);
  };
  static upVotePost = id => (dispatch) => {
    PostAPI.upVotePost(id).then(({ data }) => {
      dispatch(upVotePostSuccess(id));
    }).catch(err => err);
  };
  static downVotePost = id => (dispatch) => {
    PostAPI.downVotePost(id).then(({ data }) => {
      dispatch(downVotePostSuccess(id));
    }).catch(err => err);
  };
  static editPost = (id, post) => (dispatch) => {
    PostAPI.editPost(id, post).then(({ data }) => {
      dispatch(editPostSuccess(data));
    }).catch(err => err);
  };
  static savePost = post => (dispatch) => {
    PostAPI.savePost(post).then(({ data }) => {
      dispatch(createPostSuccess(data));
    }).catch(err => err);
  };
}

export default PostAction;

