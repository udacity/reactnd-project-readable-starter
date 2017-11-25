import {
    CHANGE_SORT
} from './actions'


export function sortMenu (state = { sortType: "vote-asc" }, actionData) {
	switch (actionData.type) {
		case CHANGE_SORT:
			const { sortType } = actionData;
			return {
				...state,
				sortType
			}
		default:
			return state;
	}
}