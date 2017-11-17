import React, { Component } from 'react'
import Timestamp from 'react-timestamp'

class Post extends Component {

	render() {

		const { post } = this.props;

		return (
			<div className="post-frame">
				<div>
					<span className="author">{post.title}</span>
					<span className="date">
						<Timestamp time={post.timestamp} format="ago" autoUpdate />
					</span>
				</div>
				<div>
					<span className="author">{post.author}</span>
				</div>
			</div>
		)
	}
}

export default Post;