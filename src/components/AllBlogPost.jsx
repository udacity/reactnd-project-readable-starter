import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AllBlogPost = ({ posts }) => (
  <div>
    {posts.map(item => (
      <div key={item.id}>{item.title}</div>
    ))}
  </div>
);

AllBlogPost.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts || [],
});

const connectedAllBlogPost = connect(mapStateToProps)(AllBlogPost);
export default connectedAllBlogPost;
