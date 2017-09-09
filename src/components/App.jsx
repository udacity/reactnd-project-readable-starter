import React, { Component } from 'react';
// import uuidv4 from 'uuid/v4';

import Categories from './Categories';
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
        <Categories />
      </div>
    );
  }
}

export default Main;
