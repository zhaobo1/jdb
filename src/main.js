import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,IndexRoute,browserHistory} from 'react-router';

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';

import APP from './router/app.js';
import Home from './router/home.js';
import Findjds from './router/jds-find.js';
import Anq from './router/Anq.js';
import NEWdetial from './router/news-detial.js';
import JDSdetial from './router/jds-detial.js';
import ABOUT from './router/about.js';
//import REDUX from './router/redux.js';<Route path="/redux" component={REDUX}/>
import RR from './router/reactRedux.js';
import TT from './router/test.js';
const logger = createLogger();
const initialState = {
	num:1,
	isok:'ok'
}
const reducer = (state,action) =>{
	console.log(state)
	if(action.type=='ADD')
	{
		return Object.assign({},state,{
			num:13,
			isok:'buok'
		})
	}else if(action.type=='DEL')
	{
		return Object.assign({},state,{
			num:14,
			isok:'delok'
		})
	}
}
const store = createStore(reducer,initialState,applyMiddleware(logger))
render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={APP}>
				<IndexRoute component={Home}/>
				<Route path="/jds-find" component={Findjds} />
				<Route path="/anq" component={Anq} />
				<Route path="/new-detial" component={NEWdetial}/>
				<Route path="/jds-detial" component={JDSdetial} />
				<Route path="/about" component={ABOUT} />
				<Route path="/reactRedux" component={RR} />
				<Route path="/test" component={TT}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('body')
	)