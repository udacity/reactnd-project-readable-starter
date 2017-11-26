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
    handleRequestClose: PropTypes.func.isRequired,
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

  handleRequestSubmit = () => {
    this.setState({submitAttempted:true})
    if (! this.isMissingRequired() ){
      const {body, author} = this.state
      this.props.onSubmitForm({body, author, parentId: this.props.parentId})
      this.props.handleRequestClose()
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
            autoFocus
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
          <Button onClick={props.handleRequestClose} color="primary">
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
