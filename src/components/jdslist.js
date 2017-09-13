const $  = require('jquery');
const CONFIG = require('../config.js');
const PROMISE = require('promise');

import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import PAGE from './page.js';
import '../sass/jdsFind.scss';
const List = React.createClass({
	render() {
		return(
				<div className="item">
					<Link to={{pathname:'/jds-detial',query:{id:this.props.ORGANIZATION_ID}}} className="info">
						<div className="imgbox">
							<img src={CONFIG.picurl+this.props.LOGO} alt={this.props.NAME}></img>
						</div>
						<div className="info">
							<p className="name">{this.props.NAME}</p>
							<p className="num">司法鉴定许可证号：{this.props.XUKEZ}</p>
							<p className="address">地址：{this.props.ADDRESS}</p>
							<p className="fw">
								业务范围：{this.props.BUSINESSSCOPE}
							</p>
						</div>
					</Link>
					<Link className="chat">在线咨询</Link>
				</div>
			)
	}
})

export default React.createClass({
	getInitialState() {
		return{
			data:[],
			pageAll:0,
			page:1,
			size:6,
			countAll:0
		}	
	},
	loadData(){
		//设置延迟来处理域名props无法及时获取的问题
		setTimeout(()=>{
			new PROMISE((resolve,reject) =>{
				var url = `mpi/findCompany?
				page=${this.state.page}&
				size=${this.state.size}
				&sheng=${this.props.sheng}`;
				$.ajax({
					type:'GET',
					dataType:'JSON',
					url:CONFIG.ip+url,
					async:false,
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
		},10)
	},
	handleClick(num){
		this.setState({
			page:num
		},()=>{
			this.loadData();
		})
	},
	componentWillReceiveProps(newprops){
		if(newprops.sheng!==this.props.sheng)
		{
			this.loadData()
		}
	},
	componentDidMount(){
		this.loadData();
	},
	render() {
		var html = this.state.data.map((m,index)=>{
			return <List 
			ORGANIZATION_ID={m.ORGANIZATION_ID}
			LOGO={m.LOGO}
			NAME={m.NAME}
			XUKEZ={m.XUKEZ}
			ADDRESS={m.ADDRESS}
			BUSINESSSCOPE={m.BUSINESSSCOPE}
			key={index}
			 />
		})
		if(this.state.data.length)
		{
			return(
				<div className="newslist" id="comlist">
					{html}
					<PAGE 
					hand={this.handleClick} 
					countAll={this.state.countAll} 
					nowpage={this.state.page} 
					pageall={this.state.pageAll}/>
				</div>
			)
		}else{
			return (
				<h1 style={{margin:`20px auto`,textAlign:`center`}}>暂无数据</h1>
			)	
		}
	}
})