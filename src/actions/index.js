import * as BlogAPI from '../http-service';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';

export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories,
});

export const getAllPosts = posts => ({
  type: GET_ALL_POSTS,
  posts,
});

export const fetchCategories = () => dispatch => (
  BlogAPI
    .getAllCategories()
    .then(data => dispatch(getCategories(data)))
);

export const fetchAllPosts = () => dispatch => (
  BlogAPI
    .getAllPosts()
    .then(data => dispatch(getAllPosts({ posts: data })))
);
