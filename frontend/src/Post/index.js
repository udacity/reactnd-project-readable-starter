import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timestamp from 'react-timestamp'
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';

class Post extends Component {

	render() {

		const { post } = this.props;
		post.date = new Date(post.timestamp);

		return (
			<div className="post">
				{/* The Head has the tile, author, date and category info  */}
				<div className="post-frame head-row">
					{/* Title and category  */}
					<div className="row ">
						<div className="title"><b>{post.title}</b></div>
						<div className="category-frame">
							<div className="category">
								{post.category}
							</div>
							
						</div>
					</div>

					{/* Author and post date */}
					<div className="row">
						<span className="author">@{post.author} - </span>
						<span className="date">
							<Timestamp time={post.date} format='ago' />
						</span>
					</div>					
				</div>

				{/* The body show only the content  */}
				<div className="post-frame head-content">
					{/* Body content */}
					<div>
						<span className="body">{post.body}</span>
					</div>
				</div>

				{/* The footer has the votes and comments  */}
				<div className="post-frame head-footer">
					{/* Votes and  */}
					<div className="row">
						<div className="vote-up">
							<FaThumbsOUp />
						</div>
						<div className="vote-number">
							{post.voteScore}
						</div>
						<div className="vote-down">
							<FaThumbsODown />
						</div>
					</div>
				</div>
			</div>
			
		)
	}
}

function mapStateToProps ({postReducer}) {
	//const post_id = this.props.id;
	//var idx = state.object1.object2.findIndex(obj => obj.id === post_id)
	return {

	}
}

function mapDispatchToProps (dispatch) {
	return {
		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);