import React, {Component} from 'react';
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';

class CommentDialog extends Component {
  static propTypes = {
    onCloseForm: PropTypes.func.isRequired,
    onSubmitForm: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    initialBody: PropTypes.string.isRequired,
    initialAuthor: PropTypes.string.isRequired,
    parentId: PropTypes.string.isRequired,
  }

  static defaultProps = {
    initialBody: '',
    initialAuthor: ''
  }

  state = {
    body: '',
    author: '',
    submitAttempted:false
  }

  componentWillMount(){
    this.setState({
      body: this.props.initialBody,
      author: this.props.initialAuthor
    })
  }

  isMissingAfterSubmit = field => {
    return this.state.submitAttempted && !field
  }

  isMissingRequired = () => {
    const {body, author} = this.state
    return !(body && author)
  }

  handleRequestClose = () => {
    this.setState({
      body:'',
      author:'',
      submitAttempted:false
    })
    this.props.onCloseForm()
  }

  handleRequestSubmit = () => {
    this.setState({submitAttempted:true})
    if (! this.isMissingRequired() ){
      const {body, author} = this.state
      this.props.onSubmitForm({body, author, parentId: this.props.parentId})
      this.handleRequestClose()
    }
  }


  render(){
    const props = this.props
    return (
      <Dialog open={props.open} onRequestClose={this.handleRequestClose}>
        <DialogTitle>Leave a comment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            error={this.isMissingAfterSubmit(this.state.author)}
            margin="dense"
            id="author"
            label="Author"
            type="text"
            onChange={e => this.setState({author:e.target.value})}
            value={this.state.author}
          />
          <TextField
            required
            error={this.isMissingAfterSubmit(this.state.body)}
            margin="dense"
            id="body"
            fullWidth
            multiline
            rowsMax="4"
            label="Comment"
            type="text"
            onChange={e => this.setState({body:e.target.value})}
            value={this.state.body}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleRequestClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleRequestSubmit} color="primary">
            Post Comment
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default CommentDialog
