import axios from 'axios';

const configure = {
  headers: {
    Authorization: 'some-auth-token',
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf8',
  },
};


const URI_API = 'http://localhost:3001';


export class CommentAPI {
  static loadCommentsByPos = id => axios.get(`${URI_API}/posts/${id}/comments`, configure);
  static deleteComment = id => axios.delete(`${URI_API}/comments/${id}`, configure);
  static downVoteComment = id => axios.post(`${URI_API}/comments/${id}`, downVote, configure);
  static upVoteComment = id => axios.post(`${URI_API}/comments/${id}`, upVote, configure);
  static editComment = (id, comment) => axios.put(`${URI_API}/comments/${id}`, comment, configure);
  static saveComment = comment => axios.post(`${URI_API}/comments`, comment, configure);
}

const upVote = {

  option: 'upVote',

};

const downVote = {

  option: 'downVote',

};

export default CommentAPI;
