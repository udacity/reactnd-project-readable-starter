import * as ReadableAPI from "../readable-api";
import { requestPosts, receivePosts } from "../PostsList/actions"

export const FILTER_POSTS = 'FILTER_POSTS'

export const filterPosts = (data) =>  {
	return {
		type: FILTER_POSTS
	};
};

export const filter = (data) => (dispatch) => {
	debugger
	dispatch(requestPosts());
	ReadableAPI.getPosts().then(posts => {
		const filteredPosts = posts.filter(post => !post.deleted);
		dispatch(receivePosts(filteredPosts));
	});
};