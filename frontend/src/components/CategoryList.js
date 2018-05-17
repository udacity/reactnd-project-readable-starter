import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
  render(){
    const categories = this.props.categories
    return (
      <nav>
        <ul className="categories">
          <li className="home">
            <Link to="/">
              <span role="img" aria-label="Home">🏠</span>
            </Link>
          </li>
          {categories && categories.map((category) => (
            <li className="category" key={category.path}>
              <Link to={`/${category.path}`} className="category-link">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

// export default CategoryList

function mapStateToProps(state, ownProps){
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(CategoryList)
