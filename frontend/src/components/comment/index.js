import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';
import { CommentAction } from '../../actions/comment';


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

class Comment extends React.Component {
  state = {
    body: '',
    edit: false,
  }
  onEdit = (e) => {
    e.preventDefault();
    const postEdit = {
      body: this.state.body,
    };
    this.props.editCommentDips(this.props.parentId, this.props.id, postEdit);
    this.setState({ edit: false });
  }
  setEdit = () => {
    const {
      body,
    } = this.props;
    this.setState({ body, edit: true });
  }

  cancelEdit = () => {
    this.setState({ edit: false });
  }


  render() {
    const {
      parentId,
      timestamp,
      body,
      author,
      deleteCommentDisp, id,
      voteScore, downVoteCommentDips, upVoteCommentDips,
    } = this.props;

    const dateComment = new Date(timestamp).toLocaleString();


    return (
      <div className="card border-secondary mb-3" >

        <div className="card-body text-secondary">
          {this.state.edit ? (
            <form className="form-horizontal">
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
              <p className="card-text">{body}</p>

              <H6>Commented by: {author} on {dateComment}</H6>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-secondary" onClick={this.setEdit}>Edit  <EditIcon /></button>
                <button type="button" className="btn btn-secondary" onClick={() => deleteCommentDisp(parentId, id)}>Delete <DeleteIcon /></button>
                <button type="button" className="btn btn-secondary" onClick={() => upVoteCommentDips(parentId, id)}>  <AddIcon /> Votes: {voteScore}</button>
                <button type="button" className="btn btn-secondary" onClick={() => downVoteCommentDips(parentId, id)}> <RemoveIcon /></button>
              </div>
            </div>
            )}

        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  deleteCommentDisp: PropTypes.func.isRequired,
  parentId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  upVoteCommentDips: PropTypes.func.isRequired,
  downVoteCommentDips: PropTypes.func.isRequired,
  editCommentDips: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    deleteCommentDisp: (parentId, id) => dispatch(CommentAction.deleteComment(parentId, id)),
    upVoteCommentDips: (parentId, id) => dispatch(CommentAction.upVoteComment(parentId, id)),
    downVoteCommentDips: (parentId, id) => dispatch(CommentAction.downVoteComment(parentId, id)),
    editCommentDips: (parentId, id, comment) =>
      dispatch(CommentAction.editComment(parentId, id, comment)),
  };
}

export default connect(undefined, mapDispatchToProps)(Comment);
