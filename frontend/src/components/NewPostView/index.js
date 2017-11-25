import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import EditPost from '../EditPost'

const NewPostView = (props) => {
  const {categories} = props
  return (
    <div>
      <EditPost categories={categories}/>
    </div>
  )
}

NewPostView.propTypes = {
  categories: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  categories: state.categories.list
})

export default connect(mapStateToProps,null)(NewPostView)
