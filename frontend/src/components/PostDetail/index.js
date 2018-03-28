import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment,getComments } from '../../actions/CommentActions'
import { fetchPosts } from '../../actions/PostsActions'
import { guid } from '../../utils/Utils'

import './PostDetail.css'
import PostInfo from './PostInfo'
import CommentForm from './CommentForm'
import CommentList from './CommentList'



class PostDetail extends Component {

  state = {
  txtComment: '',
  author:''
}

  componentDidMount() {
    this.props.fetchAllPosts()
    this.props.fetchComments(this.props.match.params.id)
  }


  onInputChange = (e) => {
      this.setState({
        txtComment: e.target.value
      })
    }

  onAuthorChange = (e) => {
    this.setState({
      author: e.target.value
    })
  }

    onCommentSubmit = (e) => {
      e.preventDefault();
      const postId = this.props.post.id

      if (this.state.txtComment) {
        const newComment = {
          id: guid(),
          timestamp: Date.now(),
          body: this.state.txtComment,
          author: this.state.author,
          parentId: postId
        }

        this.props.addComment(newComment,postId,
          () => {
            this.setState({
              txtComment: '',
              author:''
            })
          })

        this.props.fetchComments(postId)

        }
      }


  render() {
    // console.log('Props',this.props)

    const { post, comments } = this.props

    if(!post) {
      return <div>404 Post Not Found</div>
    }
    return(
      <div className="PostDetail">
        <PostInfo  post={post} />
        <CommentForm
          txtComment={this.state.txtComment}
          author={this.state.author}
          onCommentSubmit={this.onCommentSubmit}
          onInputChange={this.onInputChange}
          onAuthorChange={this.onAuthorChange} />
        <CommentList comments={comments} />
      </div>
    )
  }
}

const mapStateToProps = ({ posts, comment }, { match }) => {
  const post = posts.find(posts => posts.id === match.params.id)
  return {
    post: post,
    comments: comment[match.params.id]
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    fetchAllPosts: () => dispatch(fetchPosts()),
    addComment: (comment) => dispatch(addComment(comment)),
    fetchComments: (parentId) => dispatch(getComments(parentId)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
