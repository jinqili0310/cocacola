/*
 * @Author: Jinqi Li
 * @Date: 2020-08-26 16:08:32
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-09-25 01:20:53
 * @FilePath: /cocacola-clone/src/App.js
 */
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import ZeroSugar from './components/zeroSugar';
import Home from './components/home';
import Energy from './components/energy';
import Flavor from './components/flavor';
import LocalTaste from './components/localTaste';
import History from './components/history';
import ExploreOriginal from './components/exploreOriginal';
import ExploreZeroSugar from './components/exploreZeroSugar';
import ExploreEnergy from './components/exploreEnergy';
import ExploreFlavor from './components/exploreFlavor';

class App extends Component {
	render() {
		return (
			<div className="navRoute">
				<BrowserRouter>
					<Switch>
						<Route path="/cocacola/products/coca-cola/" exact component={Home} />
						<Route path="/cocacola/products/coca-cola-zero-sugar/" exact component={ZeroSugar} />
						<Route path="/cocacola/products/coca-cola-energy/" exact component={Energy} />
						<Route path="/cocacola/products/coca-cola-flavors/" exact component={Flavor} />
						<Route path="/cocacola/products/coca-cola-local-flavors/" component={LocalTaste} />
						<Route path="/cocacola/about-us/coca-cola-history/" component={History} />
						<Route path="/cocacola/products/coca-cola/explore/" component={ExploreOriginal} />
						<Route path="/cocacola/products/coca-cola-zero-sugar/explore/" component={ExploreZeroSugar} />
						<Route path="/cocacola/products/coca-cola-energy/explore/" component={ExploreEnergy} />
						<Route path="/cocacola/products/coca-cola-flavors/explore/" component={ExploreFlavor} />
						<Redirect to="/cocacola/products/coca-cola/" />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
