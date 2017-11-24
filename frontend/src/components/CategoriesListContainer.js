import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CategoriesList from './CategoriesList'

const CategoriesListContainer = (props) => {
  const {categories} = props
  return (
    <CategoriesList categories={categories}/>
  )
}

CategoriesListContainer.propTypes = {
  categories: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  categories: state.categories.list,
})

export default connect(mapStateToProps, null)(CategoriesListContainer)
