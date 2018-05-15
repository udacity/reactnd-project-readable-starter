import React, { Component } from 'react';
import { connect } from 'react-redux'

class Category extends Component {
  render(){
    const { category } = this.props
    return (
      <h1>
        {category && category.name}
      </h1>
      )
  }
}

function mapStateToProps(state, ownProps){
  //console.log(state)
  const filteredCats = state.categories.filter((cat) => cat.path === ownProps.path)
  return {
    category: filteredCats[0]
  }
}

//export default Category
export default connect(mapStateToProps)(Category)
