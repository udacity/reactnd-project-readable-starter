import {
	REQUEST_CATEGORIES,
	RECEIVE_CATEGORIES
} from './actions'


export function categoriesList (state = { items: [], isLoading: false}, actionData) {
	switch (actionData.type) {
		case REQUEST_CATEGORIES:
			return {
				...state,
				isLoading: true
			}
		case RECEIVE_CATEGORIES:
			const { categories } = actionData;
			return {
				...state,
				items: categories,
				isLoading: false
			}
		default: 
			return state;
	}

}