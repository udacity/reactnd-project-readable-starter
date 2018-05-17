import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryList from '../components/CategoryList'
import { all, category, newPost, edit, post } from '../views/index'

export default () => (
  <Router>
    <div>
      <CategoryList />
      <Switch>
        <Route component={newPost}  path='/new/:category' />
        <Route component={newPost}  path='/new' exact />
        <Route component={edit}     path='/:category/:post_id/edit' />
        <Route component={post}     path='/:category/:post_id' />
        <Route component={category} path='/:category' />
        <Route component={all}      path='/' exact />
      </Switch>
    </div>
  </Router>
)
