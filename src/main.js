import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import Home from './router/home.js';
import Findjds from './router/jds-find.js'
render(
	<Router history={hashHistory}>
		<Route path="/" component={Home} />
		<Route path="/jds-find" component={Findjds} />
	</Router>,
	document.getElementById('body')
	)