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
		// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		// 	<a
		// 		href="/"
		// 		ref={ref}
		// 		onClick={(e) => {
		// 			e.preventDefault();
		// 			onClick(e);
		// 		}}
		// 	>
		// 		{children}
		// 	</a>
		// ));

		// const CustomMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
		// 	const [ value ] = useState('');
		// 	return (
		// 		<div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
		// 			<ul className="list-unstyled">
		// 				{React.Children
		// 					.toArray(children)
		// 					.filter((child) => !value || child.props.children.toLowerCase().startsWith(value))}
		// 			</ul>
		// 		</div>
		// 	);
		// });

		return (
			<Navbar collapseOnSelect className="navbar" expand="lg" fixed="top">
				<Navbar.Brand className="nav-logo">
					<a href="/">
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
								<NavDropdown.Item href="/products/coca-cola/">
									<img className="nav-cokes" src={navCoke} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="/products/coca-cola-zero-sugar/">
									<img className="nav-cokes" src={navZero} alt="nav-coke" />
								</NavDropdown.Item>
								{/* <NavDropdown.Item href="#action/3.3">
									<img className="nav-cokes" src={navLife} alt="nav-coke" />
								</NavDropdown.Item> */}
								<NavDropdown.Item href="/products/coca-cola-energy/">
									<img className="nav-cokes" src={navEnergy} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="/products/coca-cola-flavors/">
									<img className="nav-cokes" src={navFlavor} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="/products/coca-cola-local-flavors/">
									<img className="nav-cokes" src={navLocal} alt="nav-coke" />
								</NavDropdown.Item>
								</BrowserRouter>
							</NavDropdown>
							<Nav.Link href="#give">GIVE</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		);
	}
}

export default Navigation;
