import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
  fetchActivePost,
  } from '../../actions/activePost'
import {
  fetchCommentsForPost,
} from '../../actions/activeComments'
import Post from '../Post'
import Comment from '../Comment'
import {genComparer} from '../../utils'

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
    const comparer = genComparer('voteScore')

    return (
      <div>
        <Post post={post}/>
        <ul>
          {comments.sort(comparer).map( c => (
            <li key={c.id}>
              <Comment
                id={c.id}
                voteScore={c.voteScore}
                author={c.author}
                body={c.body}
                timestamp={c.timestamp}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.activePost.post,
  // for the component, it's nicer to have an array of comment objects
  comments: Object.values(state.activeComments.comments)
})

const mapDispatchToProps = {
  fetchActivePost: fetchActivePost,
  fetchCommentsForPost: fetchCommentsForPost
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivePostView)
