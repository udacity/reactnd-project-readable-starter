import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
  fetchActivePost,
  fetchCommentsForPost
  } from '../../actions/activePost'
import Post from '../Post'
import CommentsList from '../CommentsList'
import VotingBoothContainer from '../VotingBoothContainer'

class ActivePostView extends Component{
  static propTypes = {
    // from URL
    match: PropTypes.object.isRequired,
    // from mapStateToProps
    post: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    // from mapDispatchToProps
    fetchActivePost: PropTypes.func.isRequired,
    fetchCommentsForPost: PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.fetchActivePost(this.props.match.params.postId)
    this.props.fetchCommentsForPost(this.props.match.params.postId)
  }

  render(){
    const {post, comments} = this.props

    return (
      <div>
        <Post post={post}/>
        <VotingBoothContainer />
        <CommentsList comments={comments} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.activePost.post,
  comments: state.activePost.comments
})

const mapDispatchToProps = {
  fetchActivePost: fetchActivePost,
  fetchCommentsForPost: fetchCommentsForPost
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivePostView)
