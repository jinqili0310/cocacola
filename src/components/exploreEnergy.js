import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import Navigation from './navigation';
import WhatsNew from './whatsNew';
import Footer from './footer';
import SnsLinks from './snsLinks';
import ccEnergy from '../assets/images/energy_original_desktop.jpeg';
import ccEnergyCherry from '../assets/images/energy_cherry_desktop.jpeg';
import ccZeroEnergy from '../assets/images/energy_zero-sugar-original_desktop.jpeg';
import ccZeroEnergyCherry from '../assets/images/energy_zero-sugar-cherry_desktop.jpeg';

class ExploreEnergy extends Component {
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
			var imageEnergy = document.getElementById('image-energy');
			var imageEnergyCherry = document.getElementById('image-energy-cherry');
			var imageEnergyZero = document.getElementById('image-zero-energy');
			var imageEnergyCherryZero = document.getElementById('image-zero-energy-cherry');

			var titleEnergy = document.getElementById('title-energy');
			var titleEnergyCherry = document.getElementById('title-energy-cherry');
			var titleEnergyZero = document.getElementById('title-zero-energy');
			var titleEnergyCherryZero = document.getElementById('title-zero-energy-cherry');

			if (eventKey === 'image-1') {
				imageEnergy.style.display = 'block';
				imageEnergyCherry.style.display = 'none';
				imageEnergyZero.style.display = 'none';
				imageEnergyCherryZero.style.display = 'none';

				titleEnergy.style.display = 'block';
				titleEnergyCherry.style.display = 'none';
				titleEnergyZero.style.display = 'none';
				titleEnergyCherryZero.style.display = 'none';
			}
			if (eventKey === 'image-2') {
				imageEnergy.style.display = 'none';
				imageEnergyCherry.style.display = 'block';
				imageEnergyZero.style.display = 'none';
				imageEnergyCherryZero.style.display = 'none';

				titleEnergy.style.display = 'none';
				titleEnergyCherry.style.display = 'block';
				titleEnergyZero.style.display = 'none';
				titleEnergyCherryZero.style.display = 'none';
			}
			if (eventKey === 'image-3') {
				imageEnergy.style.display = 'none';
				imageEnergyCherry.style.display = 'none';
				imageEnergyZero.style.display = 'block';
				imageEnergyCherryZero.style.display = 'none';

				titleEnergy.style.display = 'none';
				titleEnergyCherry.style.display = 'none';
				titleEnergyZero.style.display = 'block';
				titleEnergyCherryZero.style.display = 'none';
			}
			if (eventKey === 'image-4') {
				imageEnergy.style.display = 'none';
				imageEnergyCherry.style.display = 'none';
				imageEnergyZero.style.display = 'none';
				imageEnergyCherryZero.style.display = 'block';

				titleEnergy.style.display = 'none';
				titleEnergyCherry.style.display = 'none';
				titleEnergyZero.style.display = 'none';
				titleEnergyCherryZero.style.display = 'block';
			}
		};

		return (
			<Container>
				<Row lg={1}>
					<Navigation />
				</Row>
				<Row className="row-explore">
					<Col sm={4}>
						<img src={ccEnergy} id="image-energy" alt="energy" className="explore-image" />
						<img
							src={ccEnergyCherry}
							id="image-energy-cherry"
							style={{ display: 'none' }}
							alt="energy cherry"
							className="explore-image"
						/>
						<img
							src={ccZeroEnergy}
							id="image-zero-energy"
							style={{ display: 'none' }}
							alt="zero sugar energy"
							className="explore-image"
						/>
						<img
							src={ccZeroEnergyCherry}
							id="image-zero-energy-cherry"
							style={{ display: 'none' }}
							alt="zero sugar energy cherry"
							className="explore-image"
						/>
					</Col>
					<Col sm={8} className="col-explore">
						<h2>Coca-Cola®&nbsp;
							<span id="title-energy">Energy</span>
							<span style={{ display: 'none' }} id="title-energy-cherry">
								Energy Cherry
							</span>
							<span style={{ display: 'none' }} id="title-zero-energy">
								Energy Zero Sugar
							</span>
							<span style={{ display: 'none' }} id="title-zero-energy-cherry">
								Energy Cherry Zero Sugar
							</span>
						</h2>
						<h6>
							Coca-Cola® Energy combines the great taste of Coca-Cola with the energy you want to power
							you through your everyday life. Try the new taste of Energy and explore more flavor options
							below.
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
									Energy
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-2" className="explore-item">
									Energy Cherry
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-3" className="explore-item">
									Energy Zero Sugar
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-4" className="explore-item">
									Energy Cherry Zero Sugar
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
						<p>
							Introducing Coca-Cola Energy. The energy you want. The taste you love. Each 12oz can
							includes:
						</p>
						<ul>
							<li>Caffeine: 114mg of caffeine in each 12oz serving.</li>
							<li>Contains Guarana and B-Vitamins.</li>
							<li>
								Flavor: enjoy it in Coca-Cola Energy, Coca-Cola Energy Zero Sugar, Coca-Cola Energy
								Cherry and Coca-Cola Energy Zero Sugar Cherry.
							</li>
							<li>Find it in the energy drink section at your local retailer or online in a 12oz can.</li>
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
									Sodium <span style={{ fontWeight: 'normal' }}>80mg</span>
								</strong>
								<strong>3%</strong>
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
								<span style={{ fontWeight: 'bolder', lineHeight: '4.5' }}>77%</span>
							</p>
							<hr className="nutrition-hr-4" />
							<p style={{ marginBottom: '2px' }}>
								<strong>Protein</strong> 0g
							</p>
							<hr className="nutrition-hr-2" />
							<p className="nutrition-between" style={{ fontWeight: 'normal', marginBottom: '2px' }}>
								<span>
									Potassium<br />10mg
								</span>
								<span style={{ lineHeight: '3' }}>0%</span>
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
								CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, GLUCOSE, LESS THAN 2% OF: NATURAL
								FLAVORS, CAFFEINE, GUARANA EXTRACT, CITRIC ACID, CARAMEL COLOR, SODIUM BICARBONATE, PHOSPHORIC
								ACID, VITAMINS B3 AND B6 (NIACINAMIDE AND PYRIDOXINE HYDROCHLORIDE), SODIUM BENZOATE AND
								POTASSIUM SORBATE (TO PROTECT TASTE).
							</p>
							<p>B-VITAMINS</p>
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

export default ExploreEnergy;
