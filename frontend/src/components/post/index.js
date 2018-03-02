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
import EditIcon from 'material-ui-icons/Edit';


const Image = styled.img`
   float: center;
   width: 96%;
   max-height: 340px;
`;

const H6 = styled.h6`
  color: #707172;
`;

class Post extends React.Component {
  componentWillMount() {
    // this.ticker();
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


  render() {
    const {
      timestamp, title, body, author, category,
    } = this.props;
    const datePost = new Date(timestamp).toLocaleString();
    const text = `Category: ${category}`;
    return (
      <div>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primary={title}
            secondary={body}
          />
          <ListItemSecondaryAction>
            <ListItemText
              primary={text}
            />
            <IconButton aria-label="Edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>

          </ListItemSecondaryAction>

        </ListItem>

        <H6>Posted by: {author} on {datePost}</H6>
      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};


export default Post;
