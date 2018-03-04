import axios from 'axios';

const configure = {
  headers: {
    Authorization: 'some-auth-token',
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf8',
  },
};


const URI_API = 'http://localhost:3001';


export class PostAPI {
  static loadPosts = () => axios.get(`${URI_API}/posts`, configure);
  static loadPostsByCategory = category => axios.get(`${URI_API}/${category}/posts`, configure);
  static deletePost = id => axios.delete(`${URI_API}/posts/${id}`, configure);
  static downVotePost = id => axios.post(`${URI_API}/posts/${id}`, downVote, configure);
  static upVotePost = id => axios.post(`${URI_API}/posts/${id}`, upVote, configure);
  static editPost = (id, post) => axios.put(`${URI_API}/posts/${id}`, post, configure);
  static savePost = post => axios.post(`${URI_API}/posts`, post, configure);
}

const upVote = {

  option: 'upVote',

};

const downVote = {

  option: 'downVote',

};


export default PostAPI;
