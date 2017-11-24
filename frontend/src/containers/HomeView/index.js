import React, {Component} from 'react';
import { fetchCategories } from '../../actions/categories'
import { fetchPosts } from '../../actions/posts'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CategoriesList from '../CategoriesList'

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
        <CategoriesList categories={categories}/>
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
