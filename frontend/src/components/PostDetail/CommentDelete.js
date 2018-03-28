import React, { Component } from 'react'

class CommentDelete extends Component {

  onDelete = () => {
    const comment = this.props
    this.props.onDelete(comment)
  }

  render() {
    return(
      <div className="Comment-Delete">
        <input
          onClick={this.onDelete}
          type="button"
          value="Delete"/>
      </div>
    )
  }
}

export default CommentDelete
