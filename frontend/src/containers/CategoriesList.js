import React from 'react';
import PropTypes from 'prop-types'

const CategoriesList = (props) => {
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

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoriesList
