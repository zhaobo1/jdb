import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,IndexRoute,browserHistory} from 'react-router';
import Home from './router/home.js';
import Findjds from './router/jds-find.js';
import Anq from './router/Anq.js';
import NEWdetial from './router/news-detial.js';
import JDSdetial from './router/jds-detial.js';
import ABOUT from './router/about.js';
render(
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
		<Route path="/jds-find" component={Findjds} />
		<Route path="/anq" component={Anq} />
		<Route path="/new-detial" component={NEWdetial}/>
		<Route path="/jds-detial" component={JDSdetial} />
		<Route path="/about" component={ABOUT} />
	</Router>,
	document.getElementById('body')
	)