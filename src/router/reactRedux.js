import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const Todolist = React.createClass({
	componentDidMount(){
		var store = this.context.store;
		store.subscribe(()=>{
			this.setState(store.getState())
		})
	},
	render(){
		return(
			<h1 onClick={this.props.changnum}>{this.props.num}敬爱的{this.props.isok}</h1>
			)
	}
})
Todolist.contextTypes = {
  store: PropTypes.object.isRequired
};
//将外部state映射到UI组件内部的props;
//返回一个对象，对象中的每个键值就是一个映射；
const ActionCreate = (type='ADD') => {
	return {
		type:type
	}
}

const mapStateToProps = (state={num:2,isok:'xxoo'}) => {
	console.log(state)
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
const Visibili = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Todolist)
export default Visibili;