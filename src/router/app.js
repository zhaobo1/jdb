import React from 'react';
import { render } from 'react-dom';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
export default React.createClass({
	render(){
		return(
				<ReactCssTransitionGroup
					component='div'
					transitionName='slide-in'
					transitionEnterTimeout={1300}
					transitionLeave={false}
					transitionLeaveTimeout={300}
				>
					<div key={this.props.location.pathname}>
						{this.props.children}
					</div>
				</ReactCssTransitionGroup> 
			)
	}
})