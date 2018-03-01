import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import styled from 'styled-components';
import withRoot from '../../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

const Item = styled.a`
  padding-left: 5px;
  cursor: pointer;
  width: 100%;
  display: block;
  text-decoration: inherit;
  color: inherit;
`;

class MenuItem extends React.Component {
  render() {
    return (
      <Item href={this.props.href} >
        {this.props.children}
      </Item>
    );
  }
}

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default withRoot(withStyles(styles)(MenuItem));
