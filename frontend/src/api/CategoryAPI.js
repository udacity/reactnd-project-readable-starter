import axios from 'axios';

const configure = {
  headers: {
    Authorization: 'some-auth-token',
    Accept: 'application/json',
    'Content-Type': 'application/json;',
  },
};


const URI_API = 'http://localhost:3001';


export class CategoryAPI {
  static loadCategories = () => axios.get(`${URI_API}/categories`, configure);
}

export default CategoryAPI;
