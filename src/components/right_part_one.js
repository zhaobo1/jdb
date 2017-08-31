import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

const RightPartOne = React.createClass({
	render(){
		return(
			<div className="part1">
				<Link style={{display: `block`}} className="top" href="http://xaobang.com/xaobang.apk"></Link>
				<div className="bottom">
					<p className="p1">小帮鉴定是国内领先的移动司法鉴定服务平台，致力于为用户提供便捷，低价的鉴定服务</p>
					<Link to="http://p.qiao.baidu.com/cps/chat?siteId=11013372&userId=20833351&qq-pf-to=pcqq.discussion" target="_blank"
					  className="p2">无创产前亲子鉴定请点击此处“匿名咨询”</Link>
				</div>
			</div>
			)
	}
})
export default RightPartOne;