import * as ReadableAPI from "../readable-api";

export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = 'RECEIVE_POST'

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

export const addPost = ({title, body, author, category}) => {
    return {
        type: ADD_POST,
        newPost: {
            timestamp: new Date().getTime(),
            title,
            body,
            author,
            category,
            voteScore: 0,
            deleted: false,
            commentCount: 0
        }        
    }
}

export const removePost = ({id}) => {
    return {
        type: REMOVE_POST,
        id
    }
}

export const getPosts = () => dispatch => {
	dispatch(requestPosts());
	ReadableAPI.getPosts().then(posts => {
		dispatch(receivePosts(posts));
	});
};