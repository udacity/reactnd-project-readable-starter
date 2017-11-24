import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {fetchActivePost} from '../../actions/activePost'
import Post from '../Post'
import VotingBoothContainer from '../VotingBoothContainer'

class ActivePostView extends Component{
  static propTypes = {
    // from URL
    match: PropTypes.object.isRequired,
    // from mapStateToProps
    post: PropTypes.object.isRequired,
    // from mapDispatchToProps
    fetchActivePost: PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.fetchActivePost(this.props.match.params.postId)
  }

  render(){
    const {post} = this.props

    return (
      <div>
        <Post post={post}/>
        <VotingBoothContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.activePost.post
})

const mapDispatchToProps = {
  fetchActivePost: fetchActivePost
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivePostView)
