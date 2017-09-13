//头部栏组件
import React from 'react';
import { render } from 'react-dom';
import { Link , IndexLink} from 'react-router';
import '../sass/index.scss';
import telimg from '../images/h-tel.png';
const Header = React.createClass({
	render(){
		return(
			<div className="head">
				<div className="box">
					<div className="left">
						<IndexLink to="/"></IndexLink>
					</div>
					<div className="center">
						<IndexLink to="/">首页</IndexLink>
						<Link to="/jds-find">找鉴定所</Link>
						<Link to="/anq">经典问答</Link>
						<Link to="/about">关于我们</Link>
					</div>
					<div className="right">
						<img src={telimg}></img>
						<span>187-8222-7758</span>
					</div>
				</div>
			</div>
			)
	}
})
export default Header;



