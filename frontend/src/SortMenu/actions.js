export const CHANGE_SORT = 'CHANGE_SORT'

export const changeSort = (sortType) =>  {
	return {
		type: CHANGE_SORT,
		sortType
	};
};
