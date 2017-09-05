import React from 'react';
import { render } from 'react-dom';

import HERDER from '../components/header.js';
import RightPartOne from '../components/right_part_one.js';
import RightPartTwo from '../components/right_part_two.js';
import Chouseare from '../components/chouse.js';
import Jdslist from '../components/jdslist.js';
import FOOTER from '../components/footer.js'
export default React.createClass({
	getInitialState() {
		return{
			sheng:''
		}
	},
	chouse(name){
		if(name=='全部'){
			name=''
		}
		this.setState({
			sheng:name,
		})
	},
	render(){
		return(
			<div id="find">
				<HERDER/>
				<div className="content" style={{marginTop: `26px`}}>
					<div className="mainleft">
						<Chouseare chouse={this.chouse} cname={this.state.sheng}/>
						<Jdslist {...this.state}/>
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


