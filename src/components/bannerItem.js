import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
const Banneritem = React.createClass({
	render(){
		return(
			<div className="item">
					<Link to="">
						<div className="info">
							<p className="name">{this.props.name}</p>
							<p className="tip">{this.props.dis}</p>
							<p className="pricebox">
								<span className="color">￥</span>
								<span className="fs30 color">{this.props.pc1}</span>/例
								（{this.props.pc2}）
							</p>
						</div>
					</Link>
				</div>
			)
	}
})
export default Banneritem;