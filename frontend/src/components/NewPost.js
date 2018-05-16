import React, { Component } from 'react';

class NewPost extends Component {
  submitPost = () => {
    const { addPost, category } = this.props
    let title = document.getElementById("title")
    let body = document.getElementById("post-body")
    let author = document.getElementById("author")
    if(title.value.length * author.value.length * body.value.length === 0){
      return false
    }
    addPost(category, title.value, body.value, author.value)
    title.value = ""
    body.value = ""
    author.value = ""

  }
  render(){
    return (
      <div className="new-post">
        <input id="title" placeholder="Title"></input>
        <br />
        <textarea id="post-body" placeholder="Type the body of your new post here"></textarea>
        <br />
        <input id="author" placeholder="Author"></input>
        <button onClick={this.submitPost}>Submit</button>
      </div>
    )
  }
}

export default NewPost
