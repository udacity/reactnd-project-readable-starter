import React, {Component} from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'

class EditPost extends Component {
  static propTypes = {
    id: PropTypes.string,
    categories: PropTypes.array.isRequired
  }

  state = {
    title: '',
    body: '',
    category: '',
    author: ''
  }

  submitForm = () => {
    const {title, body, category, author} = this.state

    const post = {
      title,
      body,
      category,
      author,
      timestamp: Date.now(),
      id: uuidv4(),
      voteScore: 1,
      deleted:false
    }

  }

  render(){
    const {categories} = this.props
    const {title, body, category, author} = this.state
    return (
      <form>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </label>
        <label>
          Category:
          <select
            name="categorizer"
            id="categorizer"
            value={category}
            onChange={e => this.setState({ category: e.target.value })}
            >
            {categories.map(cat => (
              <option key={cat.path} value={cat.path}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Body:
          <textarea
            type="text"
            value={body}
            onChange={e => this.setState({ body: e.target.value })}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={e => this.setState({ author: e.target.value })}
          />
        </label>
        <button type='button' onClick={this.submitForm}>
          Submit
        </button>
      </form>
    )
  }
}

export default EditPost
