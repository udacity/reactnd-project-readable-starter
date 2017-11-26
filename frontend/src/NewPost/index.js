import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select';
import TextareaAutosize from 'react-autosize-textarea';
import { addPost } from './actions'

class NewPost extends Component {
	
	state = {
		title: "",
		category: "",
		body: "",
	}

	cleatstate = () => {
		this.setState({
			title: "",
			category: "",
			body: "",
		})
	}

	componentDidMount() {

	}

	render() {

		const { categories } = this.props;

		return (
			<div className="new-post-frame">
				{/* The Head has the tile, author, date and category info  */}
				<div className="post-frame body-add-post">
					<div>
						<input type="text"
							name="title"
							className="search-bar"
							placeholder="Insert Title here..."
							value={this.state.title}
							onChange={ event => this.setState({'title': event.target.value}) } />

						<Select simpleValue
							name="category"
							className="sort-menu-dowpdown"
							value={this.state.category}
							clearable={false}
							onChange={ value => this.setState({'category': value})}
							options={categories}
							labelKey="name"
							valueKey="name"/>
					</div>
					<div>
						<TextareaAutosize rows={3}
							className="text-area"
							placeholder="insert comment here..." 
							value={this.state.body}
							onChange={ event => this.setState({'body': event.target.value})} />
					</div>
					<div className="new-post-controls" >
						<div className="button clear-button" >
							<span>Clear!</span>
						</div>
						<div className="button create-button" onClick={this.props.addPost(this.state)}>
							<span>Create!</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


function mapStateToProps ({categoriesList}) {
	return {
		categories: categoriesList.items
	}
}

function mapDispatchToProps (dispatch) {
	return {
		addPost: data => dispatch(addPost(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPost);