import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from 'material-ui-icons/Add';
import Comment from '../comment';
import CreateComment from '../createComment';


class CommentList extends React.Component {
state = {
  save: false,
}


render() {
  const commentsPost = this.props.comments;

  return (
    <div>
      {this.state.save ? (
        <CreateComment
          parentId={this.props.parentId}
          onCancel={() => this.setState({ save: false })}
        />

      ) : (
        <div>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="btn-group" role="group">
                Comments:

              </div>
            </li>

          </ul>
          {commentsPost.map(comment => (
            <div key={comment.id}>
              <Comment
                parentId={comment.parentId}
                id={comment.id}
                body={comment.body}
                author={comment.author}
                timestamp={comment.timestamp}
                voteScore={comment.voteScore}
              />
            </div>
        ))}
        </div>
        )}
      <ul className="list-group">
        <li className="list-group-item">
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.onClose}
            >
                  Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.setState({ save: true })}
            >
                  New Comment  <AddIcon />
            </button>

          </div>
        </li>

      </ul>

    </div>
  );
}
}

CommentList.propTypes = {
  parentId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
};


export default CommentList;
