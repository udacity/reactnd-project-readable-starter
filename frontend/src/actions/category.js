import { CategoryAPI } from '../api/CategoryAPI';
import { GET_ALL_CATEGORIES_SUCCESS } from './constants';


const getAllCategoriesSuccess = categories => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  categories,
});

export class Category {
  static getAllCategories = () => (dispatch) => {
    CategoryAPI.loadCategories().then(({ data }) => {
      dispatch(getAllCategoriesSuccess(data.categories));
    }).catch(err => err);
  };
}

export default Category;
