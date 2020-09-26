/*
 * @Author: Jinqi Li
 * @Date: 2020-08-26 16:08:32
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-09-25 21:11:49
 * @FilePath: /cocacola/src/components/navigation.js
 */
import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import ccLogo from '../assets/images/cc-disc-white.png';
import navCoke from '../assets/images/nav_coke.jpg';
import navZero from '../assets/images/nav_coke_zero.jpg';
import navEnergy from '../assets/images/Coke-Energy_Nav-Image.jpeg';
import navFlavor from '../assets/images/Cherry-Vanilla-Nav-Image.jpeg';
import navLocal from '../assets/images/nav_local_flavors.jpg';
import {  BrowserRouter } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<Navbar collapseOnSelect className="navbar" expand="lg" fixed="top">
				<Navbar.Brand className="nav-logo">
					<a href="/cocacola/#/products/coca-cola">
						<img
							src={ccLogo}
							width="90.16"
							height="50"
							className="d-inline-block align-top"
							alt="Coca-Cola Logo"
						/>
					</a>
				</Navbar.Brand>
				<div className="nav-header">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<NavDropdown title="OUR BRANDS" id="basic-nav-dropdown">
								<BrowserRouter>
								<NavDropdown.Item href="/cocacola/#/products/coca-cola/">
									<img className="nav-cokes" src={navCoke} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="/cocacola/#/products/coca-cola-zero-sugar/">
									<img className="nav-cokes" src={navZero} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="/cocacola/#/products/coca-cola-energy/">
									<img className="nav-cokes" src={navEnergy} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="/cocacola/#/products/coca-cola-flavors/">
									<img className="nav-cokes" src={navFlavor} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="/cocacola/#/products/coca-cola-local-flavors/">
									<img className="nav-cokes" src={navLocal} alt="nav-coke" />
								</NavDropdown.Item>
								</BrowserRouter>
							</NavDropdown>
							<Nav.Link href="/cocacola/#/about-us/coca-cola-history/">HISTORY</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		);
	}
}

export default Navigation;
