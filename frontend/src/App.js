import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import withRoot from './withRoot';
import MenuItem from './components/menuItem';
import PostList from './components/postList';
import { Category } from './actions/category';
import { PostAction } from './actions/post';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    backgroundImage: 'linear-gradient(175deg,#80bfe8,#5886c1)',
    [theme.breakpoints.up('md')]: {
      color: '#fff',
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    backgroundImage: 'linear-gradient(175deg,#80bfe8,#5886c1)',
    color: '#fff',
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 45,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 45,
    },
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  componentWillMount() {
    this.props.fetchCategories();
  }


  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };


  render() {
    const {
      classes, theme, categories, posts, fetchAllPosts, fetchAllPostsByCategory,
    } = this.props;

    const drawer = (
      <div>
        <div className={classes.drawerHeader} />
        <Divider />
        <List>
          <MenuItem href="/" >
            All
          </MenuItem>
          <Divider />
        </List>

        {categories.map(category => (
          <div key={category.name}>
            <List >
              <MenuItem href={`/${category.path}`}>
                {category.name}
              </MenuItem>
              <Divider />
            </List>
          </div>
        ))}


      </div>
    );


    return (
      <div>
        <div className="container">
          <div className={classes.root}>
            <div className={classes.appFrame}>
              <AppBar className={classes.appBar}>
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.navIconHide}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit" noWrap>
                    Readable
                  </Typography>
                </Toolbar>
              </AppBar>
              <Hidden mdUp>
                <Drawer
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={this.state.mobileOpen}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  onClose={this.handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden smDown implementation="css">
                <Drawer
                  variant="permanent"
                  open
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <main className={classes.content}>
                <Route
                  exact
                  path="/"
                  render={({ match }) => (
                    <PostList posts={posts} loadPost={fetchAllPosts} />
                  )}
                />
                {this.props.categories.map(category => (
                  <div key={category.path} >
                    <Route
                      exact
                      path={`/${category.path}`}
                      render={({ match }) => (
                        <PostList
                          posts={posts}
                          loadPost={() => fetchAllPostsByCategory(category.path)}
                        />
                    )}
                    />
                  </div>
                ))}

              </main>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  fetchAllPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  fetchAllPostsByCategory: PropTypes.func.isRequired,
};

function mapStateToProps({ categories, posts }) {
  return {
    categories,
    posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: data => dispatch(Category.getAllCategories(data)),
    fetchAllPosts: data => dispatch(PostAction.getAllPosts(data)),
    fetchAllPostsByCategory: data => dispatch(PostAction.getAllPostsByCategory(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRoot(withStyles(styles, { withTheme: true })(ResponsiveDrawer)));
