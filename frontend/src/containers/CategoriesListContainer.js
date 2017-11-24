import React, {Component} from 'react';
import { fetchCategories } from '../actions/categories'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CategoriesList from './CategoriesList'

class CategoriesListContainer extends Component {
  static propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
  }

  componentWillMount(){
    this.props.fetchCategories();
  }

  render(){
    const {categories} = this.props

    return (
      <CategoriesList categories={categories}/>
    )
  }

}

const mapStateToProps = state => ({
  categories: state.categories.list,
})

const mapDispatchToProps = {
  fetchCategories: fetchCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListContainer)
