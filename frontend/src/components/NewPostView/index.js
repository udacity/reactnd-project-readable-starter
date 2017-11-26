import React from 'react';
import {connect} from 'react-redux'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import EditPost from '../EditPost'
import {createPost} from '../../actions/activePost'

const NewPostView = (props) => {
  return (
    <div>
      <EditPost
        categories={props.categories}
        // This is a bit silly: changeing page is going to make an API call to get the post from the server, but I already have all of the post data.
        onSubmitForm={ (post) => props.createPost(post).then(
            r => props.changePage(`post/${r.id}`)
          )
        }
      />
    </div>
  )
}

NewPostView.propTypes = {
  categories: PropTypes.array.isRequired,
  changePage: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  categories: state.categories.list
})

const mapDispatchToProps = {
  changePage: (url) => push(url),
  createPost: createPost
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostView)
