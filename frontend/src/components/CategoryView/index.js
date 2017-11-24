import React from 'react';
import { connect } from 'react-redux';
import NoMatch from '../NoMatch'
import PostsListContainer from '../PostsListContainer'
import PropTypes from 'prop-types'

const CategoryView = (props) => {
  const {categoryPath} = props.match.params
  const {categories, posts} = props
  const categoriesHaveLoaded = categories.length > 0
  const category = categories.find( cat => cat.path === categoryPath )

  if (!category) {
    return (
      <NoMatch
          message={`Invalid Category: "${categoryPath}"`}
          render={categoriesHaveLoaded}
        />
    )
  }

  return (
    <div>
      <h1>
        {category.name}
      </h1>
      <PostsListContainer posts={posts} categoryFilter={category.path} />
    </div>
  )
}

CategoryView.propTypes = {
  categories: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  categories: state.categories.list,
  posts: state.posts.list
})

export default connect(mapStateToProps, null)(CategoryView)
