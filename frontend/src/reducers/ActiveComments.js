import {
  REQUEST_COMMENTS_FOR_POST,
  SET_ACTIVE_COMMENTS,
  CAST_VOTE_ON_COMMENT,
  OPEN_NEW_COMMENT_DIALOG,
  CLOSE_NEW_COMMENT_DIALOG,
  OPEN_EDIT_COMMENT_DIALOG,
  CLOSE_EDIT_COMMENT_DIALOG,
  EDIT_COMMENT,
  CREATE_COMMENT
} from '../actions'
import {voteIncrements} from '../actions/voting'

const initialState = {
  comments: {},
  isLoading: false,
  editCommentId: null,
  newCommentDialogIsOpen:false,
  editCommentDialogIsOpen:false
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
    case CAST_VOTE_ON_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.id]: {
            ...state.comments[action.id],
            voteScore: state.comments[action.id]['voteScore'] + voteIncrements[action.vote]
          }
        }
      }
    case OPEN_NEW_COMMENT_DIALOG:
      return {
        ...state,
        newCommentDialogIsOpen:true
      }
    case CLOSE_NEW_COMMENT_DIALOG:
      return {
        ...state,
        newCommentDialogIsOpen: false
      }
    case OPEN_EDIT_COMMENT_DIALOG:
      return {
        ...state,
        editCommentId: action.editCommentId,
        editCommentDialogIsOpen:true
      }
    case CLOSE_EDIT_COMMENT_DIALOG:
      return {
        ...state,
        editCommentDialogIsOpen: false,
        editCommentId: null
      }
    case EDIT_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.commentDetails.id]: {
            ...state.comments[action.commentDetails.id],
            ...action.commentDetails
          }
        }
      }
    case CREATE_COMMENT:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.commentDetails.id]: action.commentDetails
        }
      }
    default:
      return state
  }
}
