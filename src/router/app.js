import React from 'react';
import { render } from 'react-dom';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
export default React.createClass({
	render(){
		return(
				<ReactCssTransitionGroup
					component='div'
					transitionName='part1'
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					<div key={this.props.location.pathname} >
						{this.props.children}
					</div>
				</ReactCssTransitionGroup>
			)
	}
})