import * as ReadableAPI from "../readable-api";

export const REQUEST_CATEGORIES = "REQUEST_CATEGORIES";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const requestCategories = () =>  {
	return {
		type: REQUEST_CATEGORIES
	};
};

export const receiveCategories = categories => {
	return {
		type: RECEIVE_CATEGORIES,
		categories: categories.categories
	};
};

export const getCategories = () => dispatch => {
	dispatch(requestCategories());
	ReadableAPI.getCategories().then(categories => {
		dispatch(receiveCategories(categories));
	});
};