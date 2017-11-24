import React, {Component} from 'react';
import { fetchCategories } from '../../actions/categories'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CategoriesList from '../CategoriesList'
import {postComparer} from '../../utils'
import PostsListContainer from '../PostsListContainer'

class HomeView extends Component {

  static propTypes = {
    // Both of these are injected by connect
    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
  }

  componentWillMount(){
    this.props.fetchCategories();
  }

  render(){
    const {categories} = this.props

    return (
      <div>
        <CategoriesList categories={categories}/>
        <PostsListContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.list,
})

const mapDispatchToProps = {
  fetchCategories: fetchCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
