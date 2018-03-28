import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getComments } from '../../actions/CommentActions'
import { fetchPosts } from '../../actions/PostsActions'
import { votePost, deletePost } from '../../actions/PostActions'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'


import './Posts.css'


class SinglePost extends Component {
  componentDidMount() {
    this.props.getAllComments(this.props.post.id)
  }

  onPostDelete = () => {
      const id = this.props.post.id
      this.props.postDelete(id, () => {
        this.props.fetchAllPosts()
      })
    }

  render() {
    // console.log('Props',this.props)
    const { post, comments, postVote, fetchAllPosts } = this.props

    return (
      <div>
        {  post && (
          <div className="post">
            <div className="post-likes">
              <TiThumbsUp className='Up' onClick={() => {
                postVote(post.id, "upVote")
                fetchAllPosts()
              }}/>
              <div className="Score">{post.voteScore}</div>
              <TiThumbsDown className='Down' onClick={() => {
                postVote(post.id, "downVote")
                fetchAllPosts()
              }} />
            </div>
            <div className="post-description">
              <Link to={`/${post.category}/${post.id}`}>
                <div className="post-title"><h3>{post.title}</h3></div>
              </Link>
              <div className="PostInfo">
                <div className="Author"><p><b>Author: </b> {post.author}</p></div>
                <div className="Total-Comments">
                   {comments && comments ? comments.length : 0} comments
                </div>
                <div className="Edit">
                  <Link to={`/edit/${post.id}`}>Edit</Link>
                </div>
                 <div onClick={(e) => this.onPostDelete(e)} className="Delete">Delete</div>
              </div>

            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ comment }, { post }) => {
  return {
    post: post,
    comments: comment[post.id]
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getAllComments: (parentId) => dispatch(getComments(parentId)),
    postVote: (id, option) => dispatch(votePost(id, option)),
    fetchAllPosts: () => dispatch(fetchPosts()),
    postDelete: (id, callback) => dispatch(deletePost(id, callback))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost)
