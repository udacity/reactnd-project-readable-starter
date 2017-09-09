import * as BlogAPI from '../http-service';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories,
});

export const fetchCategories = () => dispatch => (
  BlogAPI
    .getAllCategories()
    .then(data => dispatch(getCategories(data)))
);
