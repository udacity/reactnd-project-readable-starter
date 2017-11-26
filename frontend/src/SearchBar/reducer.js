import {
    FILTER_POSTS
} from './actions'


export function searchBar (state = { query: "" }, actionData) {
	switch (actionData.type) {
		case FILTER_POSTS:
			return {
				...state,
				query: actionData.query
			}
		default:
			return state;
	}
}