import React from 'react';
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import PostEdit from '../components/PostEdit'
import PostList from '../components/PostList'

export const all = ({match}) => (
  <div id="content">
    <PostList />
    <Link to="/new">New Post</Link>
  </div>
)

export const category = ({match}) => (
  <div id="content">
    <PostList path={match.params.category} />
    <Link to={`/new/${match.params.category}`}>New Post</Link>
  </div>
)

export const newPost = ({match}) => (
  <div id="content">
    <PostEdit
      post={{title:""}}
      category={match.params.category}
    />
  </div>
)

export const edit = ({match}) => (
  <div id="content">
    <PostEdit postId={match.params.post_id} />
  </div>
)

export const post = ({match}) => (
  <div id="content">
    <Post postId={match.params.post_id} />
  </div>
)
