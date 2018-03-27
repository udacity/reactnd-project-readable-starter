import React, { Component } from 'react'

class CommentForm extends Component {

  render() {
    return(
      <div className="CommentForm">
        <form
          onSubmit={this.props.onCommentSubmit}>
          <ul className="form-style-1">
            <li>
              <label>Name <span className="required">:</span></label>
              <input
                type="text"
                name="author"
                onChange={this.props.onAuthorChange}
                value={this.props.author}
                className="field-long" />
            </li>
            <li>
              <label>Comment <span className="required">:</span></label>
              <textarea
                  placeholder="Enter your comments..."
                  onChange={this.props.onInputChange}
                  value={this.props.txtComment}
                  name="comments"
                  id=""
                  cols="71"
                  rows="5" />
            </li>
            <li>
              <input
                className="Comment-Button"
                value="Submit"
                type="submit"/>
            </li>
          </ul>
        </form>

      </div>
    )
  }
}

export default CommentForm
