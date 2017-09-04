const $ = require('jquery');
const CONFIG = require('../config');
const PROMISE = require('promise');

import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';


export default React.createClass({
	componentWillReceiveProps(newProps) {
		console.log('父组件改变state，触发子组件重新渲染',newProps)
	},
	handelclick(num,event){
		this.props.hand(num);
	},
	render() {
			var parr = Array.from({length:this.props.pageall}, (v,k) => k);
			parr.join(",");
			var html = parr.map((index)=>{
				var num = index+1;
				var ns;
				if(this.props.nowpage==num){
					ns = <Link  key={index} className="now">{num}</Link>
				}else{
					ns = <Link style={{cursor:`pointer`,margin:`0 3px`}} key={index} onClick={this.handelclick.bind(this,num)}>{num}</Link>
				}
				return ns
			})
			return(
				<div className="page clearfix" id="page">
					<span style={{display: `inlinBlock`,verticalAlign: `middle`,color: `#535353`,marginRight:`10px`}}>
					{this.props.nowpage}/{this.props.pageall}页 &nbsp;&nbsp;共{this.props.countAll}条</span>{html}
				</div>
			)
	}	

})

