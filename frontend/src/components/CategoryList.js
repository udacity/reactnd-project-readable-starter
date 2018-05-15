import React, { Component } from 'react';
import { connect } from 'react-redux'

class CategoryList extends Component {
  render(){
    const categories = this.props.categories
    return (
      <div className="categories">
        {categories.map((category) => (
          <div className="category">
            <a href={"/"+category.path}>{category.name}</a>
          </div>
        ))}
      </div>
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
