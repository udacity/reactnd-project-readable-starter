import axios from 'axios';

const configure = {
  headers: {
    Authorization: 'some-auth-token',
    Accept: 'application/json',
    'Content-Type': 'application/json;',
  },
};


const POS_API = 'http://localhost:3001';


export class CommentAPI {
  static newComment = comment => axios.post(`${POS_API}/pos`, comment, configure);
}

export default CommentAPI;
