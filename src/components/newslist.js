const PROMISE = require('promise');
const $ = require('jquery');
const CONFIG = require('../config');
import TIMEICON from '../images/time-icon.png';
import SEAICON from '../images/sea-icon.png';

import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import PAGE from './page.js';

const List = React.createClass({
	render() {
		return(
				<div className="item">
					<Link to={{pathname:'/news-detial',query:{id:this.props.id}}}>
						<img src={CONFIG.picurl+this.props.LOGO} className="bimg" alt={this.props.TITLE}></img>
						<div className="info">
							<h2 className="name">{this.props.TITLE}</h2>
							<p className="time">
								<img src={TIMEICON}></img>
								<span>{this.props.CREATE_DATE}</span>
								<img src={SEAICON} style={{marginLeft: `10px`}}></img>
								<span>{this.props.CLICKNUM}</span>
							</p>
							<p className="dis">
								{this.props.DESCRIPTION}
							</p>
						</div>
					</Link>
				</div>
			)
	}

})

export default React.createClass({
	getInitialState() {
		return {
			data:[],
			countAll:2,
			pageAll:0,
			page:1,
			size:8,
		}	
	},
	hanldClick(num) {
		this.setState({page:num},function(){
			this.loadDatafromserver();
		});
	},
	loadDatafromserver(){
		let [page,size] = [this.state.page,this.state.size];
		new PROMISE((resolve,reject) =>{ 
			$.ajax({
				type:'GET',
				dataType:'JSON',
				url:CONFIG.ip+'mpi/getNewsList?page='+page+'&size='+size+'',
				async:true,//如果设置成同步，则只会render一次；
				success:function(data)
				{
					resolve(data);
				}
			})
		}).then(data => {
			//这里设置了component的state所以会执行componentWillUpdate生命周期钩子；
			//之后会再次执行render；
			var total = data['data']['countAll'];
			var sizes = this.state.size;
			var allpage = total%sizes==0?total/sizes:(total+(sizes-total%sizes))/sizes;	
			this.setState({data:data['data']['data'],countAll:total,pageAll:allpage});
		})	
	},
	componentWillReceiveProps(newProps){
		console.log('this is componentWillReceiveProps',newProps)
	},
	shouldComponentUpdate(newProps, newState) {
		console.log('this is shouldComponentUpdate',newState);
		return true;
	},
	componentWillUpdate() {
		console.log('this is componentWillUpdate');
		//componentWillUpdate.在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
	},
	componentDidUpdate() {
		console.log('this is componentDidUpdate\n============');	
	},
	componentWillMount(){
		console.log('this is componentWillMount');
	},
	componentDidMount() {
		console.log('this is componentDidMount');
		this.loadDatafromserver();
	},
	render(){
		console.log('this is render')
		if(this.state.data.length)
		{
			var nlist = this.state.data.map((m,index)=>{
				return <List 
				key={index} 
				id={m.NEWS_ID} 
				LOGO={m.LOGO} 
				TITLE={m.TITLE} 
				CREATE_DATE={m.CREATE_DATE}
				CLICKNUM={m.CLICKNUM}
				DESCRIPTION={m.DESCRIPTION}
				/>
			})
			return (
				<div className="newslist" id="newslist">
					{nlist}
					<PAGE 
					hand={this.hanldClick} 
					countAll={this.state.countAll} 
					nowpage={this.state.page} 
					pageall={this.state.pageAll}/>
				</div>	
				)
		}else{
			return (
				<h1>加载中...</h1>
				)
		}
	}

})
