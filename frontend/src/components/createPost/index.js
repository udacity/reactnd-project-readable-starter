import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'uuid-v4';
import { connect } from 'react-redux';
import { PostAction } from '../../actions/post';


const Input = styled.input`
  position: relative;
  font-size: 14px;
  height: auto;
  padding: 7px;
  margin-top: 0px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

const DivButtons = styled.div`
  position: relative;
  right: 20px;
  bottom: 0;
  margin: 10px;
  float: right;
`;

class CreatePost extends React.Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: '',

  }
  onSave = (e) => {
    e.preventDefault();
    const postSave = {
      title: this.state.title,
      body: this.state.body,
      id: uuid(),
      timestamp: Date.now(),
      category: this.state.category ? this.state.category : this.props.categories[0].name,
      author: this.state.author,

    };
    this.props.savePostDisp(postSave);
    this.props.onCancel();
  }


  cancelSave = () => {
    this.props.onCancel();
  }


  render() {
    const {
      title,
      body,
      author,
      category,
    } = this.state;


    return (
      <div className="card border-secondary mb-3" >
        <div className="card-header">New Post</div>
        <div className="card-body text-secondary">

          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="inputTitle">
                Tittle
              </label>
              <Input
                value={title}
                onChange={e =>
                  this.setState({
                    title: e.target.value,
                  })
                }
                type="text"
                className="form-control"
                id="inputTitle"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputBody">
                Body
              </label>
              <Input
                value={body}
                onChange={e =>
                  this.setState({
                    body: e.target.value,
                  })
                }
                type="text"
                className="form-control"
                id="inputBody"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputBody">
                Author
              </label>
              <Input
                value={author}
                onChange={e =>
                  this.setState({
                    author: e.target.value,
                  })
                }
                type="text"
                className="form-control"
                id="inputBody"
              />
            </div>
            <div className="form-group">
              <label htmlFor="selectCategory">
                Category
              </label>
              <select
                value={category}
                onChange={e =>
                  this.setState({
                    category: e.target.value,
                  })
                }
                className="form-control"
                id="selectCategory"
              >
                {this.props.categories.map(categorySel => (
                  <option key={categorySel.path} value={categorySel.name}>
                    {categorySel.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <DivButtons>
                <button
                  className="btn btn-secondary"
                  style={{ marginLeft: '20px' }}
                  onClick={this.cancelSave}
                >
                  Cancel
                </button>

                <button className="btn btn-primary" onClick={this.onSave}>
                  Save
                </button>
              </DivButtons>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CreatePost.propTypes = {
  onCancel: PropTypes.func.isRequired,
  savePostDisp: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

function mapStateToProps({ categories, posts }) {
  return {
    categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    savePostDisp: data => dispatch(PostAction.savePost(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
