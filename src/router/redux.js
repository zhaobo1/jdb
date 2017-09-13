import React from 'react';
import {applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger'
import { render } from 'react-dom';
const logger = createLogger();
const reducer = function(state,action){
	console.log(state)
	if(action.type=='ADD')
	{
		return Object.assign({},state,{
			num:1
		})
	}
}
const store = createStore(reducer,applyMiddleware(logger));
//Redcuer函数作为参数传入
const ac = function()
{
	return{
		type:'ADD'
	}
}
//1:用户操作view，
//2：由view发出action通知store，更新state，
//3：state更新使view更新，
//4：view更新反馈用户；
const But = React.createClass({
	getInitialState(){
		return{
			num:0
		}
	},
	handleClich(){
		var action = store.dispatch(ac());
	},
	componentDidMount() {
		store.subscribe(()=>{this.setState(store.getState())})	
	},
	render(){
		return (<div>
			{this.state.num}
			<button onClick={this.handleClich}>点击</button>
		</div>)
	}
});
export default But;
