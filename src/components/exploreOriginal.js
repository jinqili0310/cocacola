import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import Navigation from './navigation';
import WhatsNew from './whatsNew';
import Footer from './footer';
import SnsLinks from './snsLinks';
import ccOriginal from '../assets/images/coke_original_12oz_desktop.jpg';
import ccCaffeine from '../assets/images/coke_caffeine-cree_12oz_cesktop.jpg';

class ExploreOriginal extends Component {
	render() {
		const handleSelect = (eventKey) => {
			var detailsContent = document.getElementById('content-1');
			var nutritionFacts = document.getElementById('content-2');
			if (eventKey === '1') {
				detailsContent.style.display = 'block';
				nutritionFacts.style.display = 'none';
			}
			if (eventKey === '2') {
				detailsContent.style.display = 'none';
				nutritionFacts.style.display = 'block';
			}
		};

		const handleClick = () => {
			var detailsContent = document.getElementById('content-1');
			var nutritionFacts = document.getElementById('content-2');
			detailsContent.style.display = 'none';
			nutritionFacts.style.display = 'block';
		};

		const handleDropdown = (eventKey) => {
			var imageOriginal = document.getElementById('image-original');
			var imageCaffeine = document.getElementById('image-caffeine');
			var titleCaffeine = document.getElementById('title-caffeine');
			if (eventKey === 'image-1') {
				imageOriginal.style.display = 'block';
				imageCaffeine.style.display = 'none';
				titleCaffeine.style.display = 'none';
			}
			if (eventKey === 'image-2') {
				imageOriginal.style.display = 'none';
				imageCaffeine.style.display = 'block';
				titleCaffeine.style.display = 'block';
			}
		};

		return (
			<Container>
				<Row lg={1}>
					<Navigation />
				</Row>
				<Row className="row-explore">
					<Col sm={4}>
						<img src={ccOriginal} id="image-original" alt="original" className="explore-image" />
						<img
							src={ccCaffeine}
							id="image-caffeine"
							style={{ display: 'none' }}
							alt="caffeine free"
							className="explore-image"
						/>
					</Col>
					<Col sm={8} className="col-explore">
						<h2>
							Coca-Cola®&nbsp;
							<span style={{ display: 'none' }} id="title-caffeine">
								Caffeine Free
							</span>
						</h2>
						<h6>Enjoy the crisp and refreshing taste of Coca-Cola Original.</h6>
						<hr className="explore-hr" />
						<div className="explore-dropdown">
							<h3>AVAILABLE FLAVORS</h3>
							<DropdownButton
								onSelect={handleDropdown}
								defaultActiveKey="image-1"
								title="Flavors"
								className="explore-button"
							>
								<Dropdown.Item eventKey="image-1" className="explore-item">
									Original
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-2" className="explore-item">
									Caffeine Free
								</Dropdown.Item>
							</DropdownButton>
						</div>
						{/* <div className="explore-dropdown">
							<h3>AVAILABLE SIZES</h3>
							<DropdownButton title="Sizes" className="explore-button">
								<Dropdown.Item href="#/action-1" className="explore-item">
									12 fl oz
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2" className="explore-item">
									7.5 fl oz
								</Dropdown.Item>
								<Dropdown.Item href="#/action-3" className="explore-item">
									12 fl oz, 12 Pack
								</Dropdown.Item>
								<Dropdown.Item href="#/action-3" className="explore-item">
									12 fl oz, 6 Pack
								</Dropdown.Item>
							</DropdownButton>
						</div> */}
						<Link onClick={handleClick} className="explore-link">
							VIEW NUTRITION FACTS
						</Link>
					</Col>
				</Row>
				<Row lg={1} className="row-tab">
					<Nav variant="tabs" defaultActiveKey="1" onSelect={handleSelect} className="tab-nav">
						<Nav.Item>
							<Nav.Link eventKey="1" className="tab-link">
								Details
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="2" className="tab-link">
								Nutrition Facts
							</Nav.Link>
						</Nav.Item>
					</Nav>
					<div id="content-1" className="tab-text">
						<ul>
							<li>Enjoy Coca-Cola’s crisp, delicious taste with meals, on the go, or to share.</li>
							<li>Serve ice cold for maximum refreshment.</li>
						</ul>
					</div>
					<div id="content-2" style={{ display: 'none' }} className="tab-text nutrition-style">
						<div className="tab-nutrition">
							<h3>Nutrition Facts</h3>
							<hr className="nutrition-hr-1" />
							<p>1 serving per container</p>
							<p className="nutrition-between">
								<span>Serving size</span>
								<span>1 Can</span>
							</p>
							<hr className="nutrition-hr-2" />
							<p className="nutrition-between">
								<strong>
									Amount per<br />serving<br />
									<span className="nutrition-large">Calories</span>
								</strong>
								<strong className="nutrition-large-num">140</strong>
							</p>
							<hr className="nutrition-hr-3" />
							<p className="nutrition-right">% Daily Value*</p>
							<hr className="nutrition-hr-4" style={{ marginTop: '27px' }} />
							<p className="nutrition-between">
								<strong>
									Total Fat <span style={{ fontWeight: 'normal' }}>0g</span>
								</strong>
								<strong>0%</strong>
							</p>
							<hr className="nutrition-hr-4" />
							<p className="nutrition-between">
								<strong>
									Sodium <span style={{ fontWeight: 'normal' }}>45mg</span>
								</strong>
								<strong>2%</strong>
							</p>
							<hr className="nutrition-hr-4" />
							<p className="nutrition-between">
								<strong>
									Total<br />Carbohydrate<br />
									<span style={{ fontWeight: 'normal' }}>39g</span>
								</strong>
								<strong style={{ lineHeight: '4.5' }}>14%</strong>
							</p>
							<hr className="nutrition-hr-4" />
							<p>
								&nbsp;&nbsp;&nbsp;Total Sugars<br />39g
							</p>
							<hr className="nutrition-hr-4" />
							<p className="nutrition-between">
								<span style={{ fontWeight: 'normal' }}>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Includes<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;39g
									Added<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sugars
								</span>
								<span style={{ fontWeight: 'bolder', lineHeight: '4.5' }}>78%</span>
							</p>
							<hr className="nutrition-hr-4" />
							<p style={{ marginBottom: '2px' }}>
								<strong>Protein</strong> 0g
							</p>
							<hr className="nutrition-hr-2" />
							<p>
								* Not a significant source of saturated fat, trans fat, cholesterol, dietary fiber,
								vitamin D, calcium, iron and potassium.
							</p>
						</div>
						<div className="tab-info">
							<p className="info-title">INGREDIENTS</p>
							<p>
								CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CARAMEL COLOR, PHOSPHORIC ACID, NATURAL
								FLAVORS, CAFFEINE.
							</p>
							<br />
							<p className="info-title-2">GMO</p>
							<strong>
								This product includes ingredients sourced from genetically engineered (GE) crops,
								commonly known as GMOs.
							</strong>
						</div>
					</div>
				</Row>
				<WhatsNew />
				<Footer />
				<SnsLinks />
			</Container>
		);
	}
}

export default ExploreOriginal;
