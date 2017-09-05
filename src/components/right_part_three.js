const PROMISE = require('promise');
const $ = require('jquery');
const CONFIG = require('../config');

import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import PartTitle from './part_title.js';


const Anqlist = React.createClass({
	handClick(){
		
	},
	render() {
		return(
				<div className="item" onClick={this.handClick} data-id={this.props.qid} style={{cursor:`pointer`}}>
					<p className="name">
						<span>问：{this.props.qname}</span>
					</p>
					<div>
					{this.props.qanswer}
					</div>
				</div>
		)
	}	
})

export default React.createClass({
	getInitialState() {
		return {
			data:[]
		}
	},
	componentDidMount() {
		new PROMISE((resolve,reject)=>{
			$.ajax({
				type:'GET',
				dataType:'JSON',
				url:CONFIG.ip+"mpi/findIndexCompany?companySize=6&questionSize=6",
				success:function(data)
				{
					resolve(data)
				}
			})
		}).then(data=>{
			var questions = data['data']['questions'];
			this.setState({data:questions});
		})
	},
	render() {
			var qlist = this.state.data.map((m,index)=>{
				return <Anqlist key={index} qid={m.id} qname={m.name} qanswer={m.answer}/>
			});
			return(
				<div className="part4">
					<PartTitle {...this.props} />
					<div className="list">
						{qlist}
					</div>
				</div>
				)	
		}	
})