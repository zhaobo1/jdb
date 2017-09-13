
const $ = require('jquery');
const PROMISE = require('promise');
const CONFIG = require('../config.js');

import React from 'react';
import { render } from 'react-dom';
import { Link, IndexLink } from 'react-router';


import HEADER from '../components/header.js';
import RightPartOne from '../components/right_part_one.js';
import RightPartTwo from '../components/right_part_two.js';
import FOOTER from '../components/footer.js';

import START1 from '../images/start1.png';
import START2 from '../images/start2.png';
import LINECHAT from '../images/xwap_13.png';
import TELCHAT from '../images/tb_03.png';

const SCORE = React.createClass({
	render(){ 
		let [score,html] = [parseInt(this.props.score),'']
		let scoremap = [
		[0,0,0,0,0],
		[1,0,0,0,0],
		[1,1,0,0,0],
		[1,1,1,0,0],
		[1,1,1,1,0],
		[1,1,1,1,1]
		];
		for(let i = 0;i<scoremap.length;i++)
		{
			if(score == i)
			{
				html = scoremap[i].map((m,index)=>{
					if(m==1)
					{
						return <img src={START1} key={index} />
					}else{
						return <img src={START2} key={index} />
					}
				})
			}
		}
		return(
			<span style={{verticalAlign:`middle`}}>
				{html}
			</span>
			)
	}
})

export default React.createClass({
	getInitialState() {
		return {
			data:'',
			id:''
		}
	},
	componentDidMount() {
		var url = `mpi/findCompanyById?id=${this.props.location.query.id}`;
		new PROMISE((resolve,reject)=>{
			$.ajax({
				type:'GET',
				dataType:'JSON',
				url:CONFIG.ip+url,
				success:data=>{
					resolve(data)
				}
			})
		}).then(data=>{
			this.setState({
				data:data['data'],
				id:data['data']['ORGANIZATION_ID']
			})
		})
	},
	componentDidUpdate(prevProps, prevState) {
		var url = `mpi/findCompanyById?id=${this.props.location.query.id}`;
		new PROMISE((resolve,reject)=>{
			$.ajax({
				type:'GET',
				dataType:'JSON',
				url:CONFIG.ip+url,
				success:data=>{
					resolve(data)
				}
			})
		}).then(data=>{
			this.setState({
				data:data['data'],
				id:data['data']['ORGANIZATION_ID']
			})
		})
	},
	shouldComponentUpdate(nextProps, nextState) {
		
		if(nextProps.location.query.id!=this.state.id)
		{
			return true
		}else{
			return false
		}
	},
	render() {
		return(
			<div id="detial">
				<HEADER/>
				<div className="content" style={{marginTop: `26px`}}>
					<div className="mainleft" id="mainleft">
						<div className="mianbaoxue">
							<span>当前位置：</span>
							<IndexLink to="/">首页</IndexLink>
							<span> &gt;&gt; </span>
							<Link to="/jds-find">找鉴定所</Link>
							<span> &gt;&gt; </span>
							<Link>{this.state.data.NAME}</Link>
						</div>	
						<div className="infocontent">
							<div className="part1">
								<img src={CONFIG.picurl+this.state.data.LOGO} className="heads"/>
								<p className="name">{this.state.data.NAME}</p>
								<p className="num">许可证号:{this.state.data.XUKEZ}</p>
							</div>
							<div className="part2">
								<p className="start">
									<SCORE score={this.state.data.SCORE} />
									<span style={{paddingTop: `2px`,display: `inline-block`}}>{this.state.data.SCORE}分</span>
								</p>
								<p className="add">{this.state.data.ADDRESS}</p>
							</div>
							<div className="part3" dangerouslySetInnerHTML={{__html:this.state.data.CONTENT}}>
							</div>
							<div className="part4">
								<Link to="http://p.qiao.baidu.com/cps/chat?siteId=11013372&userId=20833351&qq-pf-to=pcqq.discussion"
								 target="_blank"  className="a1">
									<img src={LINECHAT}/>
									在线咨询
								</Link>
								<Link to="javascript:alert('拨打187-8222-7758咨询专业客服');" className="a2">
									<img src={TELCHAT}/>
									电话咨询
								</Link>
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