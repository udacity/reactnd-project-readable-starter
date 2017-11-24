import React, {Component} from 'react';
import { fetchCategories } from '../../actions/categories'
import { fetchPosts } from '../../actions/posts'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class HomeView extends Component {

  static propTypes = {
    // Both of these are injected by connect
    fetchCategories: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
  }

  componentWillMount(){
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  render(){
    const {categories} = this.props

    return (
      <div>
        <ul>
          {categories.map(cat => (
            <li key={cat.name}>
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.list
})

const mapDispatchToProps = {
  fetchCategories: fetchCategories,
  fetchPosts: fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
