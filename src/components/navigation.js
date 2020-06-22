import React, { Component, useState } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import ccLogo from '../assets/images/cc-disc-white.png';
import navCoke from '../assets/images/nav_coke.jpg';
import navZero from '../assets/images/nav_coke_zero.jpg';
import navLife from '../assets/images/nav_coke_life.jpg';
import navEnergy from '../assets/images/Coke-Energy_Nav-Image.jpeg';
import navFlavor from '../assets/images/Cherry-Vanilla-Nav-Image.jpeg';
import navLocal from '../assets/images/nav_local_flavors.jpg';
import navAll from '../assets/images/nav-all-products.jpeg';
import navLoca from '../assets/images/nav-product-locator.webp';
import navStore from '../assets/images/shop_nav_coke_store.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faUser, faBell } from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {
	render() {
		const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
			<a
				href="/"
				ref={ref}
				onClick={(e) => {
					e.preventDefault();
					onClick(e);
				}}
			>
				{children}
			</a>
		));

		const CustomMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
			const [ value ] = useState('');
			return (
				<div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
					<ul className="list-unstyled">
						{React.Children
							.toArray(children)
							.filter((child) => !value || child.props.children.toLowerCase().startsWith(value))}
					</ul>
				</div>
			);
		});

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
								<NavDropdown.Item href="#action/3.1">
									<img className="nav-cokes" src={navCoke} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									<img className="nav-cokes" src={navZero} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									<img className="nav-cokes" src={navLife} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.4">
									<img className="nav-cokes" src={navEnergy} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.4">
									<img className="nav-cokes" src={navFlavor} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.4">
									<img className="nav-cokes" src={navLocal} alt="nav-coke" />
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="SHOP" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">
									<img className="nav-cokes" src={navAll} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									<img className="nav-cokes" src={navLoca} alt="nav-coke" />
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									<img className="nav-cokes" src={navStore} alt="nav-coke" />
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#give">GIVE</Nav.Link>
							<Nav.Link href="#rewards">REWARDS</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#sites">
								<Dropdown>
									<Dropdown.Toggle as={CustomToggle}>
										<FontAwesomeIcon className="nav-icon nav-icon-left" icon={faTh} size="1x" />
									</Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-right-1" as={CustomMenu}>
										<Dropdown.Item disabled className="dropdown-title" style={{ color: '#000' }}>
											VISIT OUR OTHER SITES
										</Dropdown.Item>
										<Dropdown.Item className="dropdown-right-item" eventKey="2">
											Diet Coke
										</Dropdown.Item>
										<Dropdown.Item className="dropdown-right-item" eventKey="1">
											Coca-Cola Store
										</Dropdown.Item>
										<Dropdown.Item className="dropdown-right-item" eventKey="3">
											Coca-Cola Journey
										</Dropdown.Item>
										<Dropdown.Item className="dropdown-right-item" eventKey="4">
											Coca-Cola Renew
										</Dropdown.Item>
										<Dropdown.Item className="dropdown-right-item" eventKey="5">
											World of Coca-Cola
										</Dropdown.Item>
										<Dropdown.Item className="dropdown-right-item" eventKey="6">
											Coca-Cola Product Facts
										</Dropdown.Item>
										<Dropdown.Item className="dropdown-right-item" eventKey="7">
											Coca-Cola App
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Nav.Link>
							<Nav.Link href="#user">
								<Dropdown>
									<Dropdown.Toggle as={CustomToggle}>
										<FontAwesomeIcon className="nav-icon nav-icon-left" icon={faUser} size="1x" />
									</Dropdown.Toggle>
									<Dropdown.Menu className="dropdown-right-2" as={CustomMenu}>
										<Dropdown.Item className="dropdown-right-item" eventKey="2">
											Sign In
										</Dropdown.Item>
										<Dropdown.Item className="dropdown-right-item" eventKey="1">
											Sign Up
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Nav.Link>
							<Nav.Link href="#rewards">
								<FontAwesomeIcon className="nav-icon" icon={faBell} size="1x" />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		);
	}
}

export default Navigation;
