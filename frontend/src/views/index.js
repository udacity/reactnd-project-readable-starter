import React from 'react';
import Post from '../components/Post'
import PostEdit from '../components/PostEdit'
import PostList from '../components/PostList'

export const all = ({match}) => (
  <div id="content">
    <PostList />
    <h4>New Post</h4>
    <PostEdit
      post={{title:""}}
      category={match.params.category}
    />
  </div>
)

export const category = ({match}) => (
  <div id="content">
    <PostList path={match.params.category} />
    <h4>New Post</h4>
    <PostEdit
      post={{title:""}}
      category={match.params.category}
    />
  </div>
)

export const edit = ({match}) => (
  <div id="content">
    <h1>Edit Post</h1>
    <PostEdit postId={match.params.post_id} />
  </div>
)

export const post = ({match}) => (
  <div id="content">
    <Post postId={match.params.post_id} />
  </div>
)
