import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import Home from './router/home.js';
render(
	<Router history={hashHistory}>
		<Route path="/" component={Home} />
	</Router>,
	document.getElementById('body')
	)