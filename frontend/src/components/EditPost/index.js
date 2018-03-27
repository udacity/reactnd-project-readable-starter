import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPost, editPost } from '../../actions/PostActions'

import './EditPost.css'

class EditPost extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  editPost = (e) => {
    e.preventDefault()
    const id = this.props.post.id
    const title = e.target.title.value
    const body = e.target.body.value
    const author = e.target.author.value;
    const category = e.target.category.value;


    if (body === "" || title === "") {
      alert("Both fields are mandatory")
    } else {
      this.props.editPost(id, {
      title,
      category,
      body,
      author
    },
        () => this.props.history.push('/'))
    }
  }

  render() {
    // console.log("Props",this.props)
    const { post, categories } = this.props

    return (
      <form onSubmit={this.editPost}>
        <div className="Edit-Post">
          <h2>Edit Post</h2>
          <div className="EditPost-Title-Container">
            <div className="EditPost-Title-Text">
              <input
                defaultValue={post.title}
                type="text"
                name="title"
                placeholder="Title"/>
            </div>
          </div>

          <div className="EditPost-Category">
            <div>
            <select name="category" className="field-select">
            {categories && categories.map((category) => (
              <option key={category.name} value={category.name}>{category.name}</option>
            ))}
          </select>
            </div>
          </div>

          <div className="EditPost-Body">
            <div>
              <textarea
                defaultValue={post.body}
                name="body"
                id="field5"
                className="field-long field-textarea"
                cols="30"
                rows="8" />
            </div>
          </div>

          <div className="EditPost-Author">
            <div>
              <input
                defaultValue={post.author}
                name="author"
                placeholder="Author"
                type="text"
                className="field-long" />
            </div>
          </div>

          <div className="EditPost-Button">
            <button className="Post-Button">Edit</button>
          </div>
        </div>
      </form>


    )
  }
}

const mapStateToProps = ({ posts, categories}, { match }) => {
  const post = posts.find(posts => posts.id === match.params.id)
  return {
    post: post,
    categories: categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => dispatch(fetchPost(id)),
    editPost: (id, post, callback) => dispatch(editPost(id, post, callback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
