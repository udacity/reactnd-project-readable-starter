import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNewPost } from '../../actions/PostsActions'
import { guid } from '../../utils/Utils'

import './NewPost.css'

class NewPost extends Component {

  addNewPost = (e) => {
    e.preventDefault()
    const title = e.target.title.value;
    const body = e.target.body.value;
    const author = e.target.author.value;
    const category = e.target.category.value;

    const submitPost = {
      id: guid(),
      timestamp: Date.now(),
      title: title,
      body: body,
      author: author,
      category: category

    }
    this.props.createPost(submitPost, () => this.props.history.push('/'))
  }

  render() {
    return (
      <form onSubmit={this.addNewPost}>
        <div className="New-Post">
          <h2>New Post</h2>
          <div className="NewPost-Title-Container">
            <div className="NewPost-Title-Text">
              <input
                type="text"
                name="title"
                placeholder="Title"/>
            </div>
          </div>

          <div className="NewPost-Category">
            <div>
              <select placeholder="Select Category" name="category" className="field-select">
                {this.props.categories && this.props.categories.map((category) => (
                  <option key={category.name} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="NewPost-Body">
            <div>
              <textarea
                placeholder="Here your post detail goes..."
                name="body"
                id="field5"
                className="field-long field-textarea"
                cols="30"
                rows="8" />
            </div>
          </div>

          <div className="NewPost-Author">
            <div>
              <input
                name="author"
                placeholder="Author"
                type="text"
                className="field-long" />
            </div>
          </div>

          <div className="NewPost-Button">
            <button className="Post-Button">Submit </button>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({ posts, categories }) => {
  return {
    posts: posts,
    categories: categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post, callback) => dispatch(addNewPost(post, callback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
