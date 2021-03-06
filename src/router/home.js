import React from 'react';
import { render } from 'react-dom';
//导入当前HOME所需的component组件
import HERDER from '../components/header.js';
import RightPartOne from '../components/right_part_one.js';
import Topbanner from '../components/topbanner.js';
import RightPartTwo from '../components/right_part_two.js';
import RightPartThree from '../components/right_part_three.js';
import Newslist from '../components/newslist.js';
import FOOTER from '../components/footer.js';
const Home = React.createClass({
	render(){
		return(
			<div id="index">
				<HERDER />
				<div className="content" style={{marginTop: `26px`}}>
					<div className="mainleft">
						<Topbanner />
						<Newslist/>
					</div>
					<div className="rightbar">
						<RightPartOne />
						<RightPartTwo title="官方推荐机构" url="/jds-find"/>
						<RightPartThree title="热门问答" url="/anq" />
					</div>
				</div>
				<FOOTER/>
			</div>
			)
	}
})
export default Home;
