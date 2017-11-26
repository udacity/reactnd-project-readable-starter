import React, {Component} from 'react'
import PropTypes from 'prop-types'


import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class EditPost extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    onSubmitForm: PropTypes.func.isRequired,
    initialTitle: PropTypes.string,
    initialBody: PropTypes.string,
    initialCategory: PropTypes.string,
    initialAuthor: PropTypes.string,
    canEditTitle: PropTypes.bool,
    canEditBody: PropTypes.bool,
    canEditCategory: PropTypes.bool,
    canEditAuthor: PropTypes.bool,
    // supplied by mui withStyles
    classes: PropTypes.object.isRequired
  }

  static defaultProps = {
    initialTitle: '',
    initialBody: '',
    initialCategory: '',
    initialAuthor: '',
    canEditTitle: true,
    canEditBody: true,
    canEditCategory: true,
    canEditAuthor: true,
  }

  state = {
    title: '',
    body: '',
    category: '',
    author: '',
    submitAttempted:false
  }

  componentWillMount(){
    const {
      initialTitle, initialAuthor, initialBody, initialCategory,
      canEditTitle, canEditAuthor, canEditBody, canEditCategory } = this.props
    this.setState({
      initialTitle, initialAuthor, initialBody, initialCategory,
      canEditTitle, canEditAuthor, canEditBody, canEditCategory
    })
  }

  isMissingAfterSubmit = field => {
    return this.state.submitAttempted && !field
  }

  isMissingRequired = () => {
    const {body, category, author, title} = this.state
    return !(body && category && author && title)
  }

  handleSubmit = () => {
    this.setState({submitAttempted:true})
    if (! this.isMissingRequired() ){
      const {title, body, category, author} = this.state
      this.props.onSubmitForm({title, body, category, author})
    }
  }

  render(){
    const {categories, classes} = this.props
    return (
      <div>
        <form className={classes.container}>
          <TextField
            required
            className={classes.textField}
            error={this.isMissingAfterSubmit(this.state.title)}
            id="title"
            label="Title"
            margin="normal"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <TextField
            id="select-category"
            required
            className={classes.textField}
            error={this.isMissingAfterSubmit(this.state.category)}
            select
            label="Category"
            value={this.state.category}
            onChange={e => this.setState({ category: e.target.value })}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            >
            {categories.map(cat => (
              <MenuItem key={cat.path} value={cat.path}>
                {cat.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="body"
            label="Post Body"
            fullWidth
            margin="normal"
            required
            error={this.isMissingAfterSubmit(this.state.body)}
            multiline
            rowsMax="6"
            value={this.state.body}
            onChange={e => this.setState({ body: e.target.value })}
          />
          <TextField
            id="author"
            required
            className={classes.textField}
            error={this.isMissingAfterSubmit(this.state.author)}
            label="Author"
            margin="normal"
            value={this.state.author}
            onChange={e => this.setState({ author: e.target.value })}
          />
        </form>
        <Button
          className={classes.button}
          raised
          color="primary"
          onClick={this.handleSubmit}
          >
          <Done className={this.props.classes.leftIcon} />
          Submit
        </Button>
        {this.state.submitAttempted && this.isMissingRequired()
          ? <Typography>Some required fields are missing.</Typography>
          : ''
        }
      </div>
    )
  }
}

export default withStyles(styles)(EditPost);
