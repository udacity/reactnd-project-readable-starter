import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import { getCategories } from './actions'

class CategoriesList extends Component {

	componentDidMount() {
		this.props.getCategories();
	};

	render () {
		const { categories } = this.props;
		return (
			<div className="list-categories-frame">
				{categories && Array.isArray(categories) && categories.map( (category) => (
					<Link key={`${category.name}_link`} to={`/category/${category.path}`}>
						<div className="categorie-frame">
							<span>
								{category.name}
							</span>
						</div>
					</Link>	
				))}
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
		getCategories: data => dispatch(getCategories(data))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoriesList);