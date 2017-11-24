import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchActivePost} from '../../actions/activePost'

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
        <h1>{post.title}</h1>
        <h3>By {post.author}</h3>
        <p>{post.body}</p>
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
