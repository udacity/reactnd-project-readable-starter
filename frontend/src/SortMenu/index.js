import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select';
import { changeSort } from './actions'

import 'react-select/dist/react-select.css';
import FaSortAmountAsc from 'react-icons/lib/fa/sort-amount-asc';
import FaSortAlphaDesc from 'react-icons/lib/fa/sort-amount-desc';

class SortMenu extends Component {
	state = {
		selectedOption: 'vote-asc',
	}

	updateValue = value => {
		this.props.changeSort(value);
		this.setState({
			selectedOption: value
		});
	}

	render () {
		return (
			<div className="sort-menu-frame">
				<div className="sort-menu-text">
					<FaSortAmountAsc />
					<span> Order by: </span>
				</div>
				<Select simpleValue
					name="sort-posts-list"
					className="sort-menu-dowpdown"
					value={this.state.selectedOption}
					clearable={false}
					onChange={this.updateValue}
					options={[
						{ value: 'vote-asc', label: 'Vote, low to high'},
						{ value: 'vote-desc', label: 'Vote, high to low'},
						{ value: 'date-asc', label: 'Date, earliest first'},
						{ value: 'date-desc', label: 'Date, latest first'}						
					]}
				/>
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
		changeSort: data => dispatch(changeSort(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SortMenu);