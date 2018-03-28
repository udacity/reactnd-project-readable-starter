import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getCategories } from '../../actions/CategoryActions'


class Category extends Component {

  componentDidMount() {
    this.props.getAllCategories()
  }

  render() {
    // console.log('Props',this.props)
    const { categories } = this.props

    const list = categories.map((item, index) => {
      return (
        <li key={index}>
          <Link to={`/${item.path}`}>{item.name}</Link>
        </li>
      )
    })

    return(
      <div className="Categories">
        <ul className="Categories-List">
          <All />
            {list}
        </ul>
      </div>
    )
  }
}

const All = () => {
  return(
    <li key='All'>
      <Link to='/'>All</Link>
    </li>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories: () => dispatch(getCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
