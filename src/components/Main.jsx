import React, { Component } from 'react';
import * as BlogAPI from '../http-service';

class Main extends Component {
  componentDidMount() {
    BlogAPI.getAllCategories().then(data => console.log(data.categories));
  }

  render() {
    return (
      <div>
        Main module
      </div>
    );
  }
}

export default Main;
