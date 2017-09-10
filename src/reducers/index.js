export default (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return action.categories;
    case 'GET_ALL_POSTS':
      return Object.assign({}, state, action.posts);
    default:
      return state;
  }
};
