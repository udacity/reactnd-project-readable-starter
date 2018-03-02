import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import FolderIcon from 'material-ui-icons/Folder';
import DeleteIcon from 'material-ui-icons/Delete';
import { PostAPI } from '../../api/PostAPI';
import Post from '../post';


const Image = styled.img`
   float: center;
   width: 96%;
   max-height: 340px;
`;

const H6 = styled.h6`
  color: #707172;
`;

class PostList extends React.Component {
  state ={
    posts: [],
  }

  componentWillMount() {
    this.fetchPosts();
  }

  componentWillReceiveProps() {
    // this.setState({ count: 0 });
  }

  componentWillUnmount() {
    // if (this.sleep) {
    //   clearTimeout(this.sleep);
    //   this.sleep = null;
    // }
  }

  fetchPosts = () => {
    PostAPI.loadPosts().then(({ data }) => {
      this.setState({ posts: data });
    }).catch(err => err);
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <Post
              title={post.title}
              body={post.body}
              author={post.author}
              timestamp={post.timestamp}
              category={post.category}
            />
          </div>
        ))}
      </div>
    );
  }
}

// Post.propTypes = {
//   serial: PropTypes.string.isRequired,
// };


export default PostList;
