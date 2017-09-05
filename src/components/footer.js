const $ = require('jquery');
const PROMISE = require('promise');
const CONFIG = require('../config.js');


import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';


export default React.createClass({
	getInitialState(){
		return{
			data:[]
		}
	},
	componentDidMount(){
		new PROMISE((resolve,reject)=>{
		
			$.ajax({
				type:'GET',
				dataType:'JSON',
				url:CONFIG.ip+'mpi/friendlylinks',
				success:data=>{
					resolve(data);
				}
			})
		}).then(data=>{
			this.setState({
				data:data['data']
			})
		})
	},
	render() {
		var html = this.state.data.map((m,index)=>{
			return <Link to={m.url} key={index} target="_blank">{m.NAME}</Link>
		})
		return(
			<div className="footer">
				<div className="box">
					<p className="p1">
						鉴定热线：187-8222-7758 Copyright © 2017- 2020 成都墨梅寒香科技有限公司版权所有侵权必究. 蜀ICP备16013534号-4 
						网站开发：<a href="http://www.hxsjue.com" target="_blank">寒香视觉</a>
					</p>
					<p className="p2">
						<a href="about.html" target="_blank">关于小帮鉴定</a>
						<a href="http://www.momhx.com" target="_blank">寒香云站</a>
						<a href="anq.html" target="_blank">经典问答</a>
						<a href="sitemap.xml" target="_blank">XML地图</a>
						<a href="sitemap.html" target="_blank">HTML地图</a>
					</p>
					<p className="p3" id="friend">
						{html}
					</p>
				</div>
			</div>
			)
	}

})