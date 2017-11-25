import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filter } from './actions'

class SearchBar extends Component {
	render () {
		const { filter } = this.props;
		return (
			<div className="search-bar-frame">
				<input type="text" 
					className="search-bar"
					placeholder="Filter by..."
					onChange={(event) => filter(event.target.value)} />
			</div>
		)
	}
}

function mapStateToProps ({postReducer}) {
	return {

	}
}

function mapDispatchToProps (dispatch) {
	return {
		filter: data => dispatch(filter(data)),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);