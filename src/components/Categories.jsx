import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Categories = ({ categories }) => (
  <div>
    {categories && categories.map(item => (
      <div key={item.name}>{item.name}</div>
    ))}
  </div>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories,
});

const ConnectedCategories = connect(
  mapStateToProps,
)(Categories);

export default ConnectedCategories;
