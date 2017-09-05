import React from 'react';
import { render } from 'react-dom';

import HEADER from './header.js';
import FOOTER from './footer.js';
import ICON1 from '../images/xiaobang.png';
import ICON2 from '../images/yunzhan.png';
import ICON3 from '../images/shijue.png';
import '../sass/about.scss';
export default React.createClass({
	render() {
		return(
			<div id="abut">
				<HEADER/>
					<div className="aboutcontent">
		<div className="bg">
			<p className="p1">国内领先的司法鉴定服务平台</p>
			<p className="p2">小帮鉴定-值得你信赖的鉴定帮手</p>
		</div>
		<div className="canp">
			<p className="title">墨梅寒香旗下产品</p>
			<a href="http://www.xaobang.com">
				<img src={ICON1}/>
				<p className="name">小帮鉴定</p>
				<p className="miaos">一个专业服务于有司法鉴定需求的各级
司法机关、社会法人、公民个人的免费咨询平台</p>
			</a>
			<a href="http://www.momhx.com" target="_blank">
				<img src={ICON2} />
				<p className="name">寒香云站</p>
				<p className="miaos">专注于为全国中小企业提供快速建立网络品牌服务，扩大企业影响力</p>
			</a>
			<a href="http://www.hxsjue.com" target="_blank">
				<img src={ICON3} />
				<p className="name">寒香视觉</p>
				<p className="miaos">为全国中小企业提供网站、微信小程序、APP开发等软件服务</p>
			</a>
		</div>
		<div className="jiesao">
			<p className="name">小帮鉴定介绍</p>
			<p className="dl">小帮鉴定是成都墨梅寒香科技有限公司旗下一个专业提供司法鉴定资讯的站点。致力于为广大用户提供</p>
			<p className="dl">全面准确实时的的鉴定行业信息，帮助客户更加全面的了解鉴定知识以及政策法规。</p>
			<p className="dl" style={{marginBottom: `100px`}}>小帮鉴定收录了全国数百家正规合法鉴定机构的信息供客户参考咨询</p>
		</div>
		<div className="lianxfs">
			<div>
				<p className="title">鉴定咨询</p>
				<p>联系电话：187-8222-7758</p>
				<p>咨询QQ：571375191</p>
				<p>对公账号：5105  0144  6436  0000  0130</p>
				<p>地址：成都市郫都区新犀路西150米晶宝塞纳国际6栋16-01</p>
			</div>
			<div style={{width: `398px`,borderLeft: `1px solid #eee`,borderRight:`1px solid #eee`}}>
				<p className="title">机构合作</p>
				<p>联系人：张先生</p>
				<p>email：571375191@qq.com</p>
				<p>联系电话：187-8222-7758</p>
			</div>
			<div>
				<p className="title">投诉建议</p>
				<p>联系人：张先生</p>
				<p>email：571375191@qq.com</p>
			</div>
		</div>	
	</div>

				<FOOTER/>
			</div>

			)	

	}


})