import * as ReadableAPI from "../readable-api";

export const RECEIVE_POST = 'RECEIVE_POST'

export function receivePost ({post}) {
    return {
        type: receivePost,
        post
    }
}

export const addPost = post => dispatch => {
	ReadableAPI.addPost(post).then(res => {
		dispatch(receivePost(res));
	});
};