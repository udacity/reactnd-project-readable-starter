import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sortPosts } from '../../actions/PostsActions'
import SinglePost from '../Posts/SinglePost'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/PostsActions'

import './Posts.css'

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchAllPosts()
  }

  onChangeSort = (e) => {
    this.props.changeSort(e.target.value)
  }

  render() {
    console.log('Props',this.props)
    const { posts } = this.props
    return <div className = 'Posts'>
      <div className="SortBy">
        <p>Sort:</p>
        <select
            onChange={this.onChangeSort}
            name="sort"
            id="sort">
            <option value="voteScore">Like</option>
            <option value="timestamp">Time</option>
          </select>
      </div>

      {posts.map(post => (
        <SinglePost key={post.id} post={post} />
      ))}
    </div>
  }
}

const mapStateToProps = ({ posts }, { match }) => {
  const category = match.params.category
  return {
    posts: category ? posts.filter(post => post.category === category) : posts,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchPosts()),
    changeSort: (value) => dispatch(sortPosts(value))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
