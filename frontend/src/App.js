import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

//Components
import PostsList from './PostsList/';


class App extends Component {
	render() {
		return (
			<div className="App main-frame">
				<Route exact path="/" render={() => <PostsList  />}  />	
				<Route exact path="/category/:category" render={(props) => <PostsList {...props} />}  />	
				<Route exact path="/post/:postId" render={(props) => <PostsList {...props} detail={true} />} />				
			</div>
		);
	}
}

export default App;
