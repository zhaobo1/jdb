

import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import HERDER from '../components/header.js';
import RightPartOne from '../components/right_part_one.js';
import RightPartTwo from '../components/right_part_two.js';
import Anqlist from '../components/anqlist.js';
import FOOTER from '../components/footer.js';
export default React.createClass({
	render() {
		return(
			<div id="anq">
				<HERDER />
				<div className="content" style={{marginTop: `26px`}}>
					<div className="mainleft">
						<Anqlist/>
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
