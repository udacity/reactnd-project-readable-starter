import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import uuidv4 from 'uuid/v4';

import Categories from './Categories';
import CategoryPosts from './CategoryPosts';
// import * as BlogAPI from '../http-service';

class Main extends Component {
  componentDidMount() {
    // post example
    // const temPost = {
    //   id: uuidv4(),
    //   timestamp: Date.now(),
    //   title: 'gabriel y deysi',
    //   body: 'an awesome body',
    //   owner: 'gabriel y deysi',
    //   category: 'redux',
    // };
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Categories} />
        <Route path="/redux" component={CategoryPosts} />
        <Route path="/react" component={CategoryPosts} />
        <Route path="/udacity" component={CategoryPosts} />
      </div>
    );
  }
}

export default Main;
