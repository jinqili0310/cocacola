import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import Navigation from './navigation';
import WhatsNew from './whatsNew';
import Footer from './footer';
import SnsLinks from './snsLinks';
import ccZero from '../assets/images/coke_zero-sugar_12oz_desktop.jpg';
import ccZeroCaffeine from '../assets/images/coke-zero-sugar-caffeine-free_12oz_desktop.jpg';
import ccZeroCherry from '../assets/images/cherry-vanilla-zero-sugar_12oz_desktop.png';
import ccZeroVanilla from '../assets/images/vanilla-zero-sugar_12oz_desktop.jpg';
import ccZeroOrange from '../assets/images/orange-vanilla-zero-sugar_12oz_desktop.jpg';
import ccZeroEnergy from '../assets/images/energy_zero-sugar-original_desktop.jpeg';
import ccZeroEnergyCherry from '../assets/images/energy_zero-sugar-cherry_desktop.jpeg';

class ExploreZeroSugar extends Component {
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
			var imageZero = document.getElementById('image-zero');
			var imageZeroCaffeine = document.getElementById('image-zero-caffeine');
			var imageZeroCherry = document.getElementById('image-zero-cherry');
			var imageZeroVanilla = document.getElementById('image-zero-vanilla');
			var imageZeroOrange = document.getElementById('image-zero-orange');
			var imageZeroEnergy = document.getElementById('image-zero-energy');
			var imageZeroEnergyCherry = document.getElementById('image-zero-energy-cherry');

			var titleZero = document.getElementById('title-zero');
			var titleZeroCaffeine = document.getElementById('title-zero-caffeine');
			var titleZeroCherry = document.getElementById('title-zero-cherry');
			var titleZeroVanilla = document.getElementById('title-zero-vanilla');
			var titleZeroOrange = document.getElementById('title-zero-orange');
			var titleZeroEnergy = document.getElementById('title-zero-energy');
			var titleZeroEnergyCherry = document.getElementById('title-zero-energy-cherry');

			if (eventKey === 'image-1') {
				imageZero.style.display = 'block';
				imageZeroCaffeine.style.display = 'none';
				imageZeroCherry.style.display = 'none';
				imageZeroVanilla.style.display = 'none';
				imageZeroOrange.style.display = 'none';
				imageZeroEnergy.style.display = 'none';
				imageZeroEnergyCherry.style.display = 'none';

				titleZero.style.display = 'block';
				titleZeroCaffeine.style.display = 'none';
				titleZeroCherry.style.display = 'none';
				titleZeroVanilla.style.display = 'none';
				titleZeroOrange.style.display = 'none';
				titleZeroEnergy.style.display = 'none';
				titleZeroEnergyCherry.style.display = 'none';
			}
			if (eventKey === 'image-2') {
				imageZero.style.display = 'none';
				imageZeroCaffeine.style.display = 'block';
				imageZeroCherry.style.display = 'none';
				imageZeroVanilla.style.display = 'none';
				imageZeroOrange.style.display = 'none';
				imageZeroEnergy.style.display = 'none';
				imageZeroEnergyCherry.style.display = 'none';

				titleZero.style.display = 'none';
				titleZeroCaffeine.style.display = 'block';
				titleZeroCherry.style.display = 'none';
				titleZeroVanilla.style.display = 'none';
				titleZeroOrange.style.display = 'none';
				titleZeroEnergy.style.display = 'none';
				titleZeroEnergyCherry.style.display = 'none';
			}
			if (eventKey === 'image-3') {
				imageZero.style.display = 'none';
				imageZeroCaffeine.style.display = 'none';
				imageZeroCherry.style.display = 'block';
				imageZeroVanilla.style.display = 'none';
				imageZeroOrange.style.display = 'none';
				imageZeroEnergy.style.display = 'none';
				imageZeroEnergyCherry.style.display = 'none';

				titleZero.style.display = 'none';
				titleZeroCaffeine.style.display = 'none';
				titleZeroCherry.style.display = 'block';
				titleZeroVanilla.style.display = 'none';
				titleZeroOrange.style.display = 'none';
				titleZeroEnergy.style.display = 'none';
				titleZeroEnergyCherry.style.display = 'none';
			}
			if (eventKey === 'image-4') {
				imageZero.style.display = 'none';
				imageZeroCaffeine.style.display = 'none';
				imageZeroCherry.style.display = 'none';
				imageZeroVanilla.style.display = 'block';
				imageZeroOrange.style.display = 'none';
				imageZeroEnergy.style.display = 'none';
				imageZeroEnergyCherry.style.display = 'none';

				titleZero.style.display = 'none';
				titleZeroCaffeine.style.display = 'none';
				titleZeroCherry.style.display = 'none';
				titleZeroVanilla.style.display = 'block';
				titleZeroOrange.style.display = 'none';
				titleZeroEnergy.style.display = 'none';
				titleZeroEnergyCherry.style.display = 'none';
			}
			if (eventKey === 'image-5') {
				imageZero.style.display = 'none';
				imageZeroCaffeine.style.display = 'none';
				imageZeroCherry.style.display = 'none';
				imageZeroVanilla.style.display = 'none';
				imageZeroOrange.style.display = 'block';
				imageZeroEnergy.style.display = 'none';
				imageZeroEnergyCherry.style.display = 'none';

				titleZero.style.display = 'none';
				titleZeroCaffeine.style.display = 'none';
				titleZeroCherry.style.display = 'none';
				titleZeroVanilla.style.display = 'none';
				titleZeroOrange.style.display = 'block';
				titleZeroEnergy.style.display = 'none';
				titleZeroEnergyCherry.style.display = 'none';
			}
			if (eventKey === 'image-6') {
				imageZero.style.display = 'none';
				imageZeroCaffeine.style.display = 'none';
				imageZeroCherry.style.display = 'none';
				imageZeroVanilla.style.display = 'none';
				imageZeroOrange.style.display = 'none';
				imageZeroEnergy.style.display = 'block';
				imageZeroEnergyCherry.style.display = 'none';

				titleZero.style.display = 'none';
				titleZeroCaffeine.style.display = 'none';
				titleZeroCherry.style.display = 'none';
				titleZeroVanilla.style.display = 'none';
				titleZeroOrange.style.display = 'none';
				titleZeroEnergy.style.display = 'block';
				titleZeroEnergyCherry.style.display = 'none';
			}
			if (eventKey === 'image-7') {
				imageZero.style.display = 'none';
				imageZeroCaffeine.style.display = 'none';
				imageZeroCherry.style.display = 'none';
				imageZeroVanilla.style.display = 'none';
				imageZeroOrange.style.display = 'none';
				imageZeroEnergy.style.display = 'none';
				imageZeroEnergyCherry.style.display = 'block';

				titleZero.style.display = 'none';
				titleZeroCaffeine.style.display = 'none';
				titleZeroCherry.style.display = 'none';
				titleZeroVanilla.style.display = 'none';
				titleZeroOrange.style.display = 'none';
				titleZeroEnergy.style.display = 'none';
				titleZeroEnergyCherry.style.display = 'block';
			}
		};

		return (
			<Container>
				<Row lg={1}>
					<Navigation />
				</Row>
				<Row className="row-explore">
					<Col sm={4}>
						<img src={ccZero} id="image-zero" alt="zero sugar" className="explore-image" />
						<img
							src={ccZeroCaffeine}
							id="image-zero-caffeine"
							style={{ display: 'none' }}
							alt="zero sugar caffeine free"
							className="explore-image"
						/>
						<img
							src={ccZeroCherry}
							id="image-zero-cherry"
							style={{ display: 'none' }}
							alt="zero sugar caffeine free"
							className="explore-image"
						/>
						<img
							src={ccZeroVanilla}
							id="image-zero-vanilla"
							style={{ display: 'none' }}
							alt="zero sugar caffeine free"
							className="explore-image"
						/>
						<img
							src={ccZeroOrange}
							id="image-zero-orange"
							style={{ display: 'none' }}
							alt="zero sugar caffeine free"
							className="explore-image"
						/>
						<img
							src={ccZeroEnergy}
							id="image-zero-energy"
							style={{ display: 'none' }}
							alt="zero sugar caffeine free"
							className="explore-image"
						/>
						<img
							src={ccZeroEnergyCherry}
							id="image-zero-energy-cherry"
							style={{ display: 'none' }}
							alt="zero sugar caffeine free"
							className="explore-image"
						/>
					</Col>
					<Col sm={8} className="col-explore">
						<h2>Coca-Cola®&nbsp;
							<span id="title-zero">Zero Sugar</span>
							<span style={{ display: 'none' }} id="title-zero-caffeine">
								Caffeine Free Zero Sugar
							</span>
							<span style={{ display: 'none' }} id="title-zero-cherry">
								Cherry Zero Sugar
							</span>
							<span style={{ display: 'none' }} id="title-zero-vanilla">
								Vanilla Zero Sugar
							</span>
							<span style={{ display: 'none' }} id="title-zero-orange">
								Orange Vanilla Zero Sugar
							</span>
							<span style={{ display: 'none' }} id="title-zero-energy">
								Energy Zero Sugar
							</span>
							<span style={{ display: 'none' }} id="title-zero-energy-cherry">
								Energy Cherry Zero Sugar
							</span>

						</h2>
						<h6>
							Enjoy the refreshing taste of Coca-Cola, without any of the sugar with Coca-Cola Zero Sugar.
						</h6>
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
									Zero Sugar
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-2" className="explore-item">
									Caffeine Free Zero Sugar
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-3" className="explore-item">
									Cherry Vanilla Zero Sugar
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-4" className="explore-item">
									Vanilla Zero Sugar
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-5" className="explore-item">
									Orange Vanilla Zero Sugar
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-6" className="explore-item">
									Energy Zero Sugar
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-7" className="explore-item">
									Energy Zero Sugar Cherry
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
							<li>
								Coca Cola Zero Sugar has the orginal Coca Cola taste without the sugar and calories.
							</li>
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
								<strong className="nutrition-large-num">0</strong>
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
									Sodium <span style={{ fontWeight: 'normal' }}>40mg</span>
								</strong>
								<strong>2%</strong>
							</p>
							<hr className="nutrition-hr-4" />
							<p className="nutrition-between">
								<strong>
									Total<br />Carbohydrate<br />
									<span style={{ fontWeight: 'normal' }}>0g</span>
								</strong>
								<strong style={{ lineHeight: '4.5' }}>0%</strong>
							</p>
							<hr className="nutrition-hr-4" />
							<p>
								&nbsp;&nbsp;&nbsp;Total Sugars<br />0g
							</p>
							<hr className="nutrition-hr-4" />
							<p className="nutrition-between">
								<span style={{ fontWeight: 'normal' }}>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Includes<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0g
									Added<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sugars
								</span>
								<span style={{ fontWeight: 'bolder', lineHeight: '4.5' }}>78%</span>
							</p>
							<hr className="nutrition-hr-4" />
							<p>
								<strong>Protein</strong> 0g
							</p>
							<hr className="nutrition-hr-2" />
							<p className="nutrition-between" style={{ fontWeight: 'normal', marginBottom: '2px' }}>
								<span>
									Potassium<br />60mg
								</span>
								<span style={{ lineHeight: '3' }}>2%</span>
							</p>
							<hr className="nutrition-hr-3" />
							<p>
								* Not a significant source of saturated fat, trans fat, cholesterol, dietary fiber,
								vitamin D, calcium, iron and potassium.
							</p>
						</div>
						<div className="tab-info">
							<p className="info-title">INGREDIENTS</p>
							<p>
								CARBONATED WATER, CARAMEL COLOR, PHOSPHORIC ACID, ASPARTAME, POTASSIUM BENZOATE (TO PROTECT
								TASTE), NATURAL FLAVORS, POTASSIUM CITRATE, ACESULFAME POTASSIUM, CAFFEINE.
							</p>
							<p>PHENYLKETONURICS: CONTAINS PHENYLALANINE</p>
							<p>Zero Sugar</p>
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

export default ExploreZeroSugar;
