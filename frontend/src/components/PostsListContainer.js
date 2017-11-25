import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PostsList from './PostsList'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/posts'
import { setSortBy } from '../actions/sortBy'
import { genComparer } from '../utils'

class PostsListContainer extends Component {
  static propTypes = {
    // Both of these are injected by connect
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    sortBy: PropTypes.string.isRequired,
    setSortBy: PropTypes.func.isRequired,
    categoryFilter: PropTypes.string
  }

  componentWillMount(){
    this.props.fetchPosts();
  }

  render(){
    const {posts, sortBy, setSortBy, categoryFilter} = this.props
    const comparer = genComparer(sortBy)
    const filteredPosts = categoryFilter ? posts.filter(p => p.category===categoryFilter) : posts

    const sortOptions = [
      {value: 'voteScore', display: 'Votes'},
      {value: 'timestamp', display: 'Time'},
      {value: 'author', display: 'Author'}
    ]

    return (
      <div>
        Sort by
        <select
          name="sorter"
          id="sorter"
          value={sortBy}
          onChange={ e => setSortBy(e.target.value) }
          >
          {sortOptions.map( opt => (
            <option key={opt.value} value={opt.value} >
              {opt.display}
            </option>
          ) )}
        </select>
        <PostsList posts={filteredPosts.sort(comparer)}></PostsList>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.list,
  sortBy: state.sortBy
})

const mapDispatchToProps = {
  fetchPosts: fetchPosts,
  setSortBy: setSortBy
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer)
