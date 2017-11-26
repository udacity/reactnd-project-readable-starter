import * as ReadableAPI from "../readable-api";

export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const requestPosts = () =>  {
	return {
		type: REQUEST_POSTS
	};
};

export const receivePosts = posts => {
	return {
		type: RECEIVE_POSTS,
		posts
	};
};

export const getPosts = category => dispatch => {
	dispatch(requestPosts());
	ReadableAPI.getPosts().then(posts => {
		dispatch(receivePosts(posts));
	});
};