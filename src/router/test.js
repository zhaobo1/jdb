import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TT =  React.createClass({
	componentDidMount() {
		var store = this.context.store;	
		console.log(store.getState())		
		store.subscribe(()=>{
			this.setState(store.getState())
		})
	},
	componentDidUpdate(prevProps, prevState) {
		console.log(prevState)	
	},
	render() {
		return(
			<h1>{this.props.num}`.....`</h1>		
			)
	}

})
TT.contextTypes = {
  store: PropTypes.object.isRequired
};
const ActionCreate = (type='ADD') => {
	return {
		type:type
	}
}

const mapStateToProps = (state={num:2,isok:'xxoo'}) => {
	return {
		num:state.num,
		isok:state.isok
	}
}
const mapDispatchToProps = (dispatch)=>{
	return{
		changnum:function(){
			dispatch(ActionCreate('DEL'))
		}
	}
}
const TTT = connect(
mapStateToProps,
mapDispatchToProps
)(TT)
export default TTT;