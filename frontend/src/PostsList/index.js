import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from '../Post/'
import { addPost, removePost } from './actions'

class PostsList extends Component {


	componentDidMount() {
		const postsList = [
			{
				"id": "8xf0y6ziyjabvozdd253nd",
				"timestamp": 1467166872634,
				"title": "Udacity is the best place to learn React",
				"body": "Everyone says so after all.",
				"author": "thingtwo",
				"category": "react",
				"voteScore": 6,
				"deleted": false,
				"commentCount": 2
			},
			{
				"id": "6ni6ok3ym7mf1p33lnez",
				"timestamp": 1468479767190,
				"title": "Learn Redux in 10 minutes!",
				"body": "Just kidding. It takes more than 10 minutes to learn technology.",
				"author": "thingone",
				"category": "redux",
				"voteScore": -5,
				"deleted": false,
				"commentCount": 0
			}
		];
		
		for(let i=0; i<postsList.length; i++){
			this.props.addPost(postsList[0]);
		}
	};

	render() {

		const { postsList, addPost } = this.props;
		debugger
		return (
			<div className="list-posts-frame">
				{postsList && Array.isArray(postsList) && postsList.map( (post) => (
					<div key={`${post.id}_li`}>
						<Post 
							key={post.id}
							post={post}
						/>
					</div>
				))}

			</div>
		)
	}
}

function mapStateToProps ({postsList}) {
	return {
		postsList
	}
}

function mapDispatchToProps (dispatch) {
	return {
		addPost: (data) => dispatch(addPost(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);