import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import ZeroSugar from './components/zeroSugar';
import Home from './components/home';
import Energy from './components/energy';
import Flavor from './components/flavor';
import LocalTaste from './components/localTaste';

class App extends Component {
	state = {};
	render() {
		return (
			<div className="navRoute">
				<BrowserRouter>
					<Switch>
						<Route path="/products/coca-cola/" exact component={Home} />
						<Route path="/products/coca-cola-zero-sugar/" component={ZeroSugar} />
						<Route path="/products/coca-cola-energy/" component={Energy} />
						<Route path="/products/coca-cola-flavors/" component={Flavor} />
						<Route path="/products/coca-cola-local-flavors/" component={LocalTaste} />
						<Redirect to="/products/coca-cola/"></Redirect>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
