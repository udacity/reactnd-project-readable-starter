import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTimestamp } from '../../utils/Utils'
import { Link, withRouter } from 'react-router-dom'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'

import { votePost,deletePost } from '../../actions/PostActions'
import { fetchPosts } from '../../actions/PostsActions'

class PostInfo extends Component {

  componentDidMount() {
    this.props.fetchAllPosts()
  }


  onPostDelete = () => {
    const id = this.props.post.id
    this.props.postDelete(id, () => this.props.history.push('/'))
  }


  render() {
    // console.log('Props',this.props)
    const { postVote, fetchAllPosts, post } = this.props

      return(
        <div className="Post-Info">
          <div className="Post-Info-Vote">
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
          <div className="Post-Info-Container">
            <div className="Post-Info-Title">
              <h3>{post.title}</h3>
            </div>
            <div className="Post-Info-Time-Author">
              <span><b>Posted on</b> {formatTimestamp(post.timestamp)} by <b>{post.author}</b></span>
            </div>
            <div className="Post-Info-Body">
              <p>{post.body}</p>
            </div>
            <div className="Post-Info-Category-Container">
              <div className="Post-Info-Category">
                <span><b>Category: </b>{post.category}</span>
              </div>
              <div className="Post-Info-Edit-Delete-Container">
                <div className="Post-Info-Edit-Delete-Right">
                </div>
                <div className="Post-Info-Edit-Delete">
                  <div className="Post-Info-Edit">
                    <Link to={`/edit/${post.id}`}>Edit</Link>
                  </div>
                  <div
                    onClick={() => this.onPostDelete()}
                    className="Post-Info-Delete">
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchPosts()),
    postVote: (id,option) => dispatch(votePost(id,option)),
    postDelete: (id,callback) => dispatch(deletePost(id,callback))

  }
}

export default withRouter(connect(null, mapDispatchToProps)(PostInfo))
