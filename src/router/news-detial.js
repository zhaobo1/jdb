
const $ = require('jquery');
const PROMISE = require('promise');
const CONFIG = require('../config.js');

import React from 'react';
import {render} from 'react-dom';
import {IndexLink,Link} from 'react-router';

import HERDER from '../components/header.js';
import RightPartOne from '../components/right_part_one.js';
import RightPartTwo from '../components/right_part_two.js';
import FOOTER from '../components/footer.js';
import '../sass/jds-detial.scss';
export default React.createClass({
	getInitialState(){
		return {
			data:''
		}
	},
	componentDidMount(){
		new PROMISE((resolve,reject)=>{
			$.ajax({
				type:'GET',
				dataType:'JSON',
				url:CONFIG.ip+'mpi/news?id='+this.props.location.query.id+'',
				success:data=>{
					resolve(data)
				}
			})
		}).then(data=>{
			this.setState({
				data:data['data']
			})
		})
	},
	render() {
		return(
			<div id="detial">
				<HERDER/>
				<div className="content" style={{marginTop:`26px`}}>
					<div className="mainleft">
						<div className="mianbaoxue">
							<span>当前位置：</span>
							<IndexLink to="/">首页</IndexLink>
							<span> &gt;&gt; </span>
							<Link to="/news">新闻资讯</Link>
							<span> &gt;&gt; </span>
							<Link>{this.state.data.title}</Link>
						</div>
						<div className="news-infocontent">
							<div className="top">
								<h1>{this.state.data.title}</h1>
								<div className="infos">
									<span className="time">{this.state.data.create_date}</span>
									<span className="from">来源：小帮编辑部</span>
									<div className="bdsharebuttonbox">
										<Link to="#" className="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></Link>
										<Link to="#" className="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></Link>
										<Link to="#" className="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></Link>
										<Link to="#" className="bds_weixin" data-cmd="weixin" title="分享到微信"></Link>
									</div>
								</div>
							</div>	
							<div dangerouslySetInnerHTML={{__html:this.state.data.info}} className="content-news">
							</div>	
							<div className="yiwen">
								如果您对此有疑问，或有其他不明白的地方，建议拨打小帮鉴定咨询热线：
								<span>187-8222-7758</span>
								或者点击
								<Link to="http://p.qiao.baidu.com/cps/chat?siteId=11013372&userId=20833351&qq-pf-to=pcqq.discussion" target="_blank">【在线咨询】</Link>
								,提前咨询平台专家，将会得到专业的解答哦！ 
								<p className="qq">
									<Link target="_blank" to="http://wpa.qq.com/msgrd?v=3&uin=571375191&site=qq&menu=yes">
										<img border="0" src="http://wpa.qq.com/pa?p=2:571375191:51" alt="点击这里给我发消息" title="点击这里给我发消息"></img>
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div className="rightbar">
						<RightPartOne />
						<RightPartTwo title="官方推荐机构" url="/jds-find"/>
						<div className="part3"></div>
					</div>
				</div>
				<FOOTER/>
			</div>
			)	
	}
})