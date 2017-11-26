import * as ReadableAPI from "../readable-api";
import { requestPosts, receivePosts } from "../PostsList/actions"
import { isQueryFound } from "../utils"

export const FILTER_POSTS = 'FILTER_POSTS'

export const filterPosts = (data) =>  {
	return {
		type: FILTER_POSTS
	};
};

export const filter = query => dispatch => {
	dispatch(requestPosts());
	ReadableAPI.getPosts().then(posts => {
		const filteredPosts = posts.filter(post =>{
			return !posts.deleted && 
					(isQueryFound(post.title, query) || 
					isQueryFound(post.body, query) || 
					isQueryFound(post.category, query));
		} );
		dispatch(receivePosts(filteredPosts));
	});
};

