import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const CategoriesList = (props) => {
  const {categories} = props

  return (
    <ul>
      {categories.map(cat => (
        <li key={cat.name}>
          <Link to={`/category/${cat.path}`}>{cat.name}</Link>
        </li>
      ))}
    </ul>
  )
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoriesList
