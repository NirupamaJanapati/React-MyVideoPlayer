

import React, { Component } from 'react';

class searchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term:''};
	}

	render() {
		return (
			//<input onChange = {this.onInputChange}/> 
			<div className = 'search-bar col-md-8' >
				<input
					value = {this.state.term}
					onChange={(event) => this.onInputChange(event.target.value)} />
			</div>
		);	
	}

	
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	


}

export default searchBar;