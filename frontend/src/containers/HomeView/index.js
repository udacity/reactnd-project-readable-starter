import React from 'react';
import { requestCategories } from '../../reducers/categories'
import { connect } from 'react-redux'

const HomeView = (props) => {
  const {requestCategories, categories} = props

  requestCategories()

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

const mapStateToProps = state => ({
  categories: state.categories.list
})

const mapDispatchToProps = {
  requestCategories: requestCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
