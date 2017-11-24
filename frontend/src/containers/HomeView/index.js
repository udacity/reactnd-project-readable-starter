import React from 'react';
import CategoriesListContainer from '../CategoriesListContainer'
import PostsListContainer from '../PostsListContainer'

const HomeView = () => {
  return (
    <div>
      <CategoriesListContainer />
      <PostsListContainer />
    </div>
  )
}

export default HomeView
