import React from 'react';
import { render } from 'react-dom';
//导入当前HOME所需的component组件
import HERDER from '../components/header.js';
import RightPartOne from '../components/right_part_one.js';
import Topbanner from '../components/topbanner.js';
import RightPartTwo from '../components/right_part_two.js';
const Home = React.createClass({
	render(){
		return(
			<div id="index">
				<HERDER />
				<div className="content" style={{marginTop: `26px`}}>
					<div className="mainleft">
						<Topbanner />
					</div>
					<div className="rightbar">
						<RightPartOne />
						<RightPartTwo title="官方推荐机构" url="/jds-find"/>
					</div>
				</div>
			</div>
			)
	}
})
export default Home;
