import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'uuid-v4';
import { connect } from 'react-redux';
import { CommentAction } from '../../actions/comment';


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

class CreateComment extends React.Component {
  state = {
    body: '',
    author: '',
  }
  onSave = (e) => {
    e.preventDefault();
    const commentSave = {
      parentId: this.props.parentId,
      body: this.state.body,
      id: uuid(),
      timestamp: Date.now(),
      author: this.state.author,

    };
    this.props.saveCommentDisp(this.props.parentId, commentSave);
    this.props.onCancel();
  }


  cancelSave = () => {
    this.props.onCancel();
  }


  render() {
    const {
      body,
      author,
    } = this.state;


    return (
      <div className="card border-secondary mb-3" >
        <div className="card-header">New Comment</div>
        <div className="card-body text-secondary">

          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="inputBody">
                Body
              </label>
              <Input
                value={body}
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
              <label htmlFor="inputBody">
                Author
              </label>
              <Input
                value={author}
                onChange={e =>
                  this.setState({
                    author: e.target.value,
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
                  onClick={this.cancelSave}
                >
                  Cancel
                </button>

                <button className="btn btn-primary" onClick={this.onSave}>
                  Save
                </button>
              </DivButtons>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CreateComment.propTypes = {
  onCancel: PropTypes.func.isRequired,
  saveCommentDisp: PropTypes.func.isRequired,
  parentId: PropTypes.string.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    saveCommentDisp: (parentId, comment) => dispatch(CommentAction.saveComment(parentId, comment)),
  };
}

export default connect(undefined, mapDispatchToProps)(CreateComment);
