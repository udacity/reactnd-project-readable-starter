import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPost, addPost, editPost } from '../actions/posts'
import { Redirect } from 'react-router-dom'

class PostEdit extends Component {
  bodyInput = React.createRef()
  titleInput = React.createRef()
  authorInput = React.createRef()
  categoryInput = React.createRef()
  state = {
    redirect: false
  }
  componentDidMount() {
    if( this.props.postId ){
      this.props.getPost(this.props.postId)
    }
  }
  submitPost = () => {
    const { addPost, editPost } = this.props
    let title = this.titleInput.current
    let body = this.bodyInput.current
    let author = this.authorInput.current
    let category = this.props.category ? this.props.category : this.categoryInput.current.value
    if(title.value.length * author.value.length * body.value.length === 0){
      return false
    }
    if(this.props.postId){
      editPost(this.props.postId, title.value, body.value).then(() => {
        this.setState({redirect: true})
      })
    } else {
      addPost(category, title.value, body.value, author.value)
    }
    title.value = ""
    body.value = ""
    author.value = ""
  }
  render(){
    const { post } = this.props
    if( ! post )
      return <div />
    return (
      <div className="post-edit">
        {! this.props.category && (
          <div>
            Category: 
            <select ref={this.categoryInput} className="category-tag">
              {this.props.categories.map((cat) => (
                <option value={cat.path}>{cat.name}</option>
              ))}
            </select>
          </div>
        )}
        <input ref={this.titleInput} id="title" placeholder="Title" defaultValue={post.title}></input>
        <br />
        <textarea ref={this.bodyInput} id="post-body" placeholder="Type the body of your new post here" defaultValue={post.body}></textarea>
        <br />
        <input ref={this.authorInput} id="author" placeholder="Author" defaultValue={post.author} readOnly={this.props.postId}></input>
        <button onClick={this.submitPost}>Submit</button>
        {this.state.redirect && (
          <Redirect to={`${this.props.post.category}/${this.props.post.id}`} />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => (
  ownProps.post ? {
    categories: state.categories
  } : {
    categories: state.categories,
    post: state.posts.filter((post) => post.id === ownProps.postId)[0],
  }
)
const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(getPost(id)),
  addPost: (category, title, body, author) => dispatch(addPost({category, title, body, author})),
  editPost: (id, title, body) => dispatch(editPost({id, title, body})),
})
export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)
