import React from 'react';
import { connect } from 'react-redux';
import NoMatch from '../NoMatch'
import PropTypes from 'prop-types'

const CategoryView = (props) => {
  const {categoryPath} = props.match.params
  const {categories} = props
  const caegoriesLoaded = categories.length > 0
  const category = categories.find( cat => cat.path === categoryPath )

  return (
    <div>
      { category
        ? <h1>
            {category.name}
          </h1>
        : <NoMatch
            message={`Invalid Category: "${categoryPath}"`}
            render={caegoriesLoaded}
          />
      }
    </div>
  )
}

CategoryView.propTypes = {
  categories: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  categories: state.categories.list
})

export default connect(mapStateToProps, null)(CategoryView)
