import React, {Component} from 'react';
import { fetchCategories } from '../../actions/categories'
import { fetchPosts } from '../../actions/posts'
import { setSortBy } from '../../actions/sortBy'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CategoriesList from '../CategoriesList'
import PostsList from '../PostsList'
import {postComparer} from '../../utils'

class HomeView extends Component {

  static propTypes = {
    // Both of these are injected by connect
    fetchCategories: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
    sortBy: PropTypes.string.isRequired,
    setSortBy: PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  render(){
    const {categories, posts, sortBy, setSortBy} = this.props
    const comparer = postComparer(sortBy)

    const sortOptions = [
      {value: 'voteScore', display: 'Votes'},
      {value: 'timestamp', display: 'Time'},
      {value: 'author', display: 'Author'}
    ]

    return (
      <div>
        <CategoriesList categories={categories}/>
        <PostsList posts={posts.sort(comparer)}></PostsList>
        <select name="sorter" id="sorter" onChange={ e => setSortBy(e.target.value) }>
          {sortOptions.map( opt => (
            <option key={opt.value} value={opt.value} >
              {opt.display}
            </option>
          ) )}
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.list,
  posts: state.posts.list,
  sortBy: state.sortBy
})

const mapDispatchToProps = {
  fetchCategories: fetchCategories,
  fetchPosts: fetchPosts,
  setSortBy: setSortBy
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
