import React from 'react';
import {connect} from 'react-redux'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import EditPost from '../EditPost'
import uuidv4 from 'uuid/v4'
import {newPost} from '../../utils/contentAPI'

const onSubmitForm = ({body, title, author, category}) => {
  return newPost({
    body,
    title,
    author,
    category,
    voteScore:1,
    deleted:false,
    id: uuidv4(),
    timestamp: Date.now()
  })
}

const NewPostView = (props) => {
  return (
    <div>
      <EditPost
        categories={props.categories}
        // This is a bit silly: changeing page is going to make an API call to get the post from the server, but I already have all of the post data.
        onSubmitForm={ (post) => onSubmitForm(post).then(
            r => props.changePage(`post/${r.id}`)
          )
        }
      />
    </div>
  )
}

NewPostView.propTypes = {
  categories: PropTypes.array.isRequired,
  changePage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  categories: state.categories.list
})

const mapDispatchToProps = {
  changePage: (url) => push(url)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostView)
