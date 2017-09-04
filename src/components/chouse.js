const $ = require('jquery');
const CONFIG = require('../config.js');
const PROMISE = require('promise');
const SHENG = require('../sheng.json');
import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default React.createClass({
	getInitialState() {
		return {
			data:[]
		}	
	},
	componentDidMount() {
		this.setState({
			data:SHENG.data
		})
	},
	chouseArea(name,event){
		this.props.chouse(name);
	},
	render() {
		var html = '';
		html = this.state.data.map((m,index)=>{
			if(this.props.cname == m.name){
				return <Link onClick={this.chouseArea.bind(this,m.name)} className="active" style={{cursor:`pointer`}} key={index}>{m.name}</Link>
			}else{
				if(this.props.cname=='' && m.name=='全部')
				{
					return <Link onClick={this.chouseArea.bind(this,m.name)} className="active" style={{cursor:`pointer`}} key={index}>{m.name}</Link>
				}else{
					return <Link onClick={this.chouseArea.bind(this,m.name)} style={{cursor:`pointer`}} key={index}>{m.name}</Link>
				}
			}
		})
		return(
			<div className="chouse">
				<div className="box">
					<div className="title">按省份查找：</div>
					<div className="cont" id="shen">
						{html}
					</div>
				</div>
			</div>
			)
	}
})