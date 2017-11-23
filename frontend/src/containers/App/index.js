
import React from 'react';
import { Route, Link } from 'react-router-dom'
import HomeView from '../HomeView'
import CategoryView from '../CategoryView'
import SinglePostView from '../SinglePostView'
import NewPostView from '../NewPostView'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={HomeView} />
      <Route path="/category/:categoryName" component={CategoryView} />
      <Route path="/post/:postId" component={SinglePostView} />
      <Route path="/newpost" component={NewPostView} />
    </main>
  </div>
)

export default App
