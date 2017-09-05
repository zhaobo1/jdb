const $ = require('jquery');
const CONFIG = require('../config');
const PROMISE = require('promise');
import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import PartTitle from './part_title.js';


//推荐机构列表组件

const Listitem = React.createClass({
	render() {
		return(
			<div className="item">
				<Link to={{ pathname: '/jds-find', query: { id: this.props.ID } }} className="pic">
					<img src={this.props.URL} alt={this.props.NAME}></img>
				</Link>
				<div className="info">
					<Link to={{ pathname: '/jds-find', query: { id: this.props.ID } }} className="name">{this.props.NAME}</Link>
					<p className="num">许可证号:{this.props.XUKEZ}</p>
					<Link to="" target="_blank" className="chat">咨询</Link>
				</div>
			</div>
		)
	}	
})

export default React.createClass({
	getInitialState() {
		return{
			date:[]
		}
	},
	componentDidMount() {
		new PROMISE((resolve,reject)=>{
			$.ajax({
				type:'GET',
				url:CONFIG.ip+"mpi/findIndexCompany?companySize=6&questionSize=6",
				dataType:'JSON',
				success:data=>
				{
					resolve(data);
				}
			})	
		}).then(data=>{
			this.setState({date:data['data']['companys']});
		})
	},
	render() {
		var lis = this.state.date.map(function (m,index) {
            return <Listitem key={index} XUKEZ={m.XUKEZ} NAME={m.NAME} URL={CONFIG.picurl+m.LOGO} ID={m.ORGANIZATION_ID}/>
        })	
		return (
			<div className="part2">
				<PartTitle {...this.props} />
				<div className="list">
					{lis}
				</div>
			</div>
		)
	}
})


