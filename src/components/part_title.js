import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
const PartTitle = React.createClass({
	render() {
		return(
			<div className="top">
				<span className="title">{this.props.title}</span>
				<Link to={this.props.url} href="jds-find.html" className="more">更多+</Link>
			</div>	
			)
	}

})
export default PartTitle;