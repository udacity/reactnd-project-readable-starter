import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timestamp from 'react-timestamp'
import { Link } from "react-router-dom";
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';

class Post extends Component {

	render() {

		const { post, detail } = this.props;
		post.date = new Date(post.timestamp);

		return (
			<div className="post">
				{/* The Head has the tile, author, date and category info  */}
				<div className="post-frame head-row">
					{/* Title and category  */}
					<div className="row ">
						<div className="title">
							{detail && <b>{post.title}</b> }
							{!detail && 
								<Link to={`/post/${post.id}`}>
									<b>{post.title}</b>
								</Link>
							}							
						</div>
						<div className="category-frame">
							{detail && 
								<div className="category">
									{post.category}
								</div>
							}
							{!detail && 								
								<div className="category">
									{post.category}
								</div>
							}
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
				{detail && 
					<div className="post-frame head-content">
						{/* Body content */}
						<div>
							<span className="body">{post.body}</span>
						</div>
					</div>
				}

				{/* The footer has the votes and comments  */}
				{detail && 
					<div className="post-frame head-footer">
						{/* Vote frame with up/down and number items  */}
						<div className="vote-frame">						
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
				}
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