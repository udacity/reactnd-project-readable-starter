import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from '../Post/'
import { addPost, removePost, getPosts } from './actions'

class PostsList extends Component {


	componentDidMount() {
		this.props.getPosts();
	};

	render() {
		const { posts, addPost } = this.props;
		return (
			<div className="list-posts-frame">
				{posts && Array.isArray(posts) && posts.map( (post) => (
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

function mapStateToProps ({ postsList }) {
	return {
		posts: postsList.items
	}
}

function mapDispatchToProps (dispatch) {
	return {
		addPost: (data) => dispatch(addPost(data)),
		getPosts: data => dispatch(getPosts(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);