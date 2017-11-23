import React, {Component} from 'react';
import { requestCategories } from '../../reducers/Categories'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class HomeView extends Component {

  static propTypes = {
    // Both of these are injected by connect
    requestCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
  }

  componentWillMount(){
    this.props.requestCategories();
  }

  render(){
    const {categories} = this.props

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
}

const mapStateToProps = state => ({
  categories: state.categories.list
})

const mapDispatchToProps = {
  requestCategories: requestCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
