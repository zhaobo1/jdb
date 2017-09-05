const $ = require('jquery');
const PROMISE = require('promise');
const CONFIG =  require('../config.js');


import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import PAGE from './page.js';
import '../sass/anq.scss';
const Anqlist = React.createClass({
	render() {
		return(
			<div className="item" id="{this.props.QUESTION_ID}">
					<div style={{lineHeight: `1.5`,color: `#888`,fontSize: `12px`}}>
						<p className="name">{this.props.NAME}</p>
						{this.props.ANSWER}
					</div>
				</div>
			)
	}

})


export default React.createClass({
	getInitialState() {
		return{
			data:[],
			size:6,
			page:1,
			countAll:0,
			pageAll:0
		}
	},
	handleClick(num){
		this.setState({
			page:num
		},()=>{
			this.loadData();
		})
	},
	loadData(){
		new PROMISE((resolve,reject)=>{
			var url = `
				mpi/getQuestion?page=${this.state.page}
				&size=${this.state.size}`;
			$.ajax({
				type:'GET',
				dataType:'JSON',
				url:CONFIG.ip+url,
				success:data=>{
					resolve(data)
				}
			})
		}).then(data=>{
			var total = data['countAll'];
			var sizes = this.state.size;
			var allpage = total%sizes==0?total/sizes:(total+(sizes-total%sizes))/sizes;	
			this.setState({data:data['data'],countAll:total,pageAll:allpage});
		})
	},
	componentDidMount() {
		this.loadData();
	},
	render() {
		var html = this.state.data.map((m,index)=>{
			return <Anqlist key={index} 
			 QUESTION_ID={m.QUESTION_ID}
			 NAME={m.NAME}
			 ANSWER={m.ANSWER}
			 />
		})
		return(
			<div className="anqlist" id="anqlist" style={{marginTop: `0`}}>
				{html}
				<PAGE 
					hand={this.handleClick} 
					countAll={this.state.countAll} 
					nowpage={this.state.page} 
					pageall={this.state.pageAll}/>
			</div>
		)
	}
})


