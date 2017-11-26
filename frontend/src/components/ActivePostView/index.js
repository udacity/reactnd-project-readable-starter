import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CommentDialog from '../CommentDialog'
import EditPost from '../EditPost'
import {
  fetchActivePost,
  beginPostEdit,
  submitEdit
  } from '../../actions/activePost'
import {
  fetchCommentsForPost,
  openNewCommentDialog,
  closeNewCommentDialog,
  openEditCommentDialog,
  closeEditCommentDialog,
  editComment,
  newComment
} from '../../actions/activeComments.js'
import Post from '../Post'
import Comment from '../Comment'
import {genComparer} from '../../utils'

class ActivePostView extends Component{

  static propTypes = {
    // from URL
    match: PropTypes.object.isRequired,
    // from mapStateToProps
    post: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
    isInEditMode: PropTypes.bool.isRequired,
    categories: PropTypes.array.isRequired,
    newCommentDialogIsOpen: PropTypes.bool.isRequired,
    editCommentDialogIsOpen: PropTypes.bool.isRequired,
    closeNewCommentDialog: PropTypes.func.isRequired,
    openNewCommentDialog: PropTypes.func.isRequired,
    closeEditCommentDialog: PropTypes.func.isRequired,
    openEditCommentDialog: PropTypes.func.isRequired,
    newComment: PropTypes.func.isRequired,
    editComment: PropTypes.func.isRequired,
    editCommentId: PropTypes.string,
    // from mapDispatchToProps
    fetchActivePost: PropTypes.func.isRequired,
    fetchCommentsForPost: PropTypes.func.isRequired,
    beginPostEdit: PropTypes.func.isRequired,
    submitEdit: PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.fetchActivePost(this.props.match.params.postId)
    this.props.fetchCommentsForPost(this.props.match.params.postId)
  }

  render(){
    const {post, categories, comments, isInEditMode} = this.props
    const comparer = genComparer('voteScore')

    return (
      <div>
        {isInEditMode ?
          <div>
            <EditPost
              categories={categories}
              initialTitle={post.title}
              initialBody={post.body}
              initialAuthor={post.author}
              initialCategory={post.category}
              onSubmitForm={postDetails => this.props.submitEdit(postDetails, post.id)}
            />
          </div>
          :
            <div>
              <Post post={post}/>
              <button onClick={this.props.beginPostEdit}>
                Edit Post
              </button>
            </div>
        }
        <button onClick={this.props.openNewCommentDialog}>
          New Comment
        </button>
        <ul>
          {Object.values(comments).sort(comparer).map( c => (
            <li key={c.id}>
              <Comment
                id={c.id}
                voteScore={c.voteScore}
                author={c.author}
                body={c.body}
                timestamp={c.timestamp}
              />
              <button onClick={()=>this.props.openEditCommentDialog(c.id)}>
                Edit Comment
              </button>
            </li>
          ))}
        </ul>
        <CommentDialog
          open={this.props.newCommentDialogIsOpen}
          handleRequestClose={this.props.closeNewCommentDialog}
          onSubmitForm={this.props.newComment}
          parentId={this.props.match.params.postId}
        />
        { this.props.editCommentId &&
          <CommentDialog
            open={this.props.editCommentDialogIsOpen}
            handleRequestClose={this.props.closeEditCommentDialog}
            onSubmitForm={details => this.props.editComment(details, this.props.editCommentId)}
            parentId={this.props.match.params.postId}
            initialBody={this.props.comments[this.props.editCommentId]['body']}
            initialAuthor={this.props.comments[this.props.editCommentId]['author']}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.activePost.post,
  isInEditMode: state.activePost.isInEditMode,
  categories:state.categories.list,
  // for the component, it's nicer to have an array of comment objects
  comments: state.activeComments.comments,
  newCommentDialogIsOpen: state.activeComments.newCommentDialogIsOpen,
  editCommentDialogIsOpen: state.activeComments.editCommentDialogIsOpen,
  editCommentId: state.activeComments.editCommentId
})

const mapDispatchToProps = {
  fetchActivePost: fetchActivePost,
  fetchCommentsForPost: fetchCommentsForPost,
  beginPostEdit: beginPostEdit,
  submitEdit: submitEdit,
  openNewCommentDialog: openNewCommentDialog,
  closeNewCommentDialog: closeNewCommentDialog,
  openEditCommentDialog: openEditCommentDialog,
  closeEditCommentDialog: closeEditCommentDialog,
  editComment: editComment,
  newComment: newComment
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivePostView)
