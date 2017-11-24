import React from 'react';
import PropTypes from 'prop-types'

const CategoryList = (props) => {
  const {categories} = props

  return (
    <ul>
      {categories.map(cat => (
        <li key={cat.name}>
          {cat.name}
        </li>
      ))}
    </ul>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoryList
