import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from '../Post/'
import SearchBar from '../SearchBar'
import CategoriesList from '../CategoriesList'
import SortMenu from '../SortMenu'
import NewPost from '../NewPost'
import { getPosts } from './actions'

class PostsList extends Component {

	componentDidMount() {
		const { match } = this.props;
		if ( match ) {
			debugger
			const { params } = match;
			if(params && params.category) this.props.getPosts(params.category);
			else this.props.getPosts();
		}
		else {
			this.props.getPosts();
		}
	};

	render() {		
		const { match, detail, sortType } = this.props;		
		let { posts } = this.props;

		//Filter stage
		if( match ) {
			const { params } = match;
			if ( params && params.category) {
				posts = posts.filter(post => post.category === params.category);
			}
			if ( params && params.postId ) {
				posts = posts.filter(post => post.id === params.postId);
			}
		}
		//Sort stage
		posts.sort( (postA, postB) => {
			if(sortType === "vote-asc") return postA.voteScore > postB.voteScore;
			if(sortType === "vote-desc") return postA.voteScore < postB.voteScore;
			if(sortType === "date-asc") return postA.date < postB.date;
			if(sortType === "date-desc") return postA.date > postB.date;
			//Default will be same as vote-asc
			return postA.voteScore > postB.voteScore;
		})

		return (
			<div className="list-posts-frame">

				<SearchBar />
				<CategoriesList />
				<div className="post-list-summary">
					<div className="post-list-summary-result">
						<span> <b> {posts.length} </b> results found with <b> "query" </b> </span>
					</div>
					<div className="post-list-summary-filter">
						<SortMenu />
					</div>					
				</div>				

				{posts && Array.isArray(posts) && posts.map( (post) => (
					<div key={`${post.id}_li`}>
						<Post 
							key={post.id}
							post={post}
							detail={detail}
						/>
					</div>
				))}
				<NewPost />
				
			</div>
		)
	}
}

function mapStateToProps ({ postsList, sortMenu }) {
	return {
		posts: postsList.items,
		sortType: sortMenu.sortType
	}
}

function mapDispatchToProps (dispatch) {
	return {
		getPosts: data => dispatch(getPosts(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);