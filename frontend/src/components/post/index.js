import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatIcon from 'material-ui-icons/Chat';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';
import { PostAction } from '../../actions/post';
import { CommentAction } from '../../actions/comment';
import CommentList from '../commentList';


const H6 = styled.h6`
  color: #707172;
`;


const Input = styled.input`
  position: relative;
  font-size: 14px;
  height: auto;
  padding: 7px;
  margin-top: 0px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

const DivButtons = styled.div`
  position: relative;
  right: 20px;
  bottom: 0;
  margin: 10px;
  float: right;
`;

class Post extends React.Component {
  state = {
    title: '',
    body: '',
    edit: false,
    commentsShow: false,
  }

  componentWillMount() {
    this.props.fetchAllCommentsByPost(this.props.post.id);
  }

  onEdit = (e) => {
    e.preventDefault();
    const postEdit = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.editPostDips(this.props.post.id, postEdit);
    this.setState({ edit: false });
  }

  setCommentsShow = () => {
    this.setState({ commentsShow: true });
  }

  setEdit = () => {
    const {
      title, body,
    } = this.props.post;
    this.setState({ title, body, edit: true });
  }

  closeCommentsShow = () => {
    this.setState({ commentsShow: false });
  }

  cancelEdit = () => {
    this.setState({ edit: false });
  }


  render() {
    const {
      comments,
      timestamp,
      title, body,
      author, category,
      id, commentCount,
      voteScore,
    } = this.props.post;
    const {
      deletePostDisp,
      downVotePostDips, upVotePostDips,
    } = this.props;

    const datePost = new Date(timestamp).toLocaleString();
    const text = `Category: ${category}`;

    return (
      <div className="card border-secondary mb-3" >
        <div className="card-header">{text}</div>
        <div className="card-body text-secondary">
          {this.state.edit ? (
            <form className="form-horizontal">
              <div className="form-group">
                <label htmlFor="inputTitle">
                  Title
                </label>
                <Input
                  value={this.state.title}
                  onChange={e =>
                    this.setState({
                      title: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  id="inputTitle"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputBody">
                  Body
                </label>
                <Input
                  value={this.state.body}
                  onChange={e =>
                    this.setState({
                      body: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  id="inputBody"
                />
              </div>
              <div className="form-group">
                <DivButtons>
                  <button
                    className="btn btn-secondary"
                    style={{ marginLeft: '20px' }}
                    onClick={this.cancelEdit}
                  >
                    Cancel
                  </button>

                  <button className="btn btn-primary" onClick={this.onEdit}>
                    Save
                  </button>
                </DivButtons>
              </div>
            </form>
          ) : (
            <div>
              <div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <H6>Posted by: {author} on {datePost}</H6>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-secondary" onClick={this.setEdit}>Edit  <EditIcon /></button>
                  <button type="button" className="btn btn-secondary" onClick={this.setCommentsShow}>Comments ({commentCount}) <ChatIcon /></button>
                  <button type="button" className="btn btn-secondary" onClick={() => deletePostDisp(id)}>Delete <DeleteIcon /></button>
                  <button type="button" className="btn btn-secondary" onClick={() => upVotePostDips(id)}>  <AddIcon /> Votes: {voteScore}</button>
                  <button type="button" className="btn btn-secondary" onClick={() => downVotePostDips(id)}> <RemoveIcon /></button>
                </div>

              </div>
              {this.state.commentsShow ?
              (<CommentList
                parentId={id}
                comments={comments}
                onClose={this.closeCommentsShow}
              />) : (null)}

            </div>
            )}

        </div>
      </div>
    );
  }
}

Post.propTypes = {

  deletePostDisp: PropTypes.func.isRequired,


  upVotePostDips: PropTypes.func.isRequired,
  downVotePostDips: PropTypes.func.isRequired,
  editPostDips: PropTypes.func.isRequired,
  fetchAllCommentsByPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

function mapStateToProps({ posts }) {
  return {
    posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllCommentsByPost: data => dispatch(CommentAction.getAllComments(data)),
    deletePostDisp: data => dispatch(PostAction.deletePost(data)),
    upVotePostDips: data => dispatch(PostAction.upVotePost(data)),
    downVotePostDips: data => dispatch(PostAction.downVotePost(data)),
    editPostDips: (id, data) => dispatch(PostAction.editPost(id, data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
