import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import Navigation from './navigation';
import WhatsNew from './whatsNew';
import Footer from './footer';
import SnsLinks from './snsLinks';
import ccCherry from '../assets/images/cherry_12oz_desktop.jpg';
import ccCherryVanilla from '../assets/images/cherry-vanilla_12oz_desktop-1.jpeg';
import ccOrangeVanilla from '../assets/images/orange-vanilla_12oz_desktop.jpg';
import ccVanilla from '../assets/images/vanilla_12oz_desktop.jpg';
import ccCherryZero from '../assets/images/cherry-zero-sugar_12oz_desktop.jpg';
import ccCherryVanillaZero from '../assets/images/cherry-zero-sugar_12oz_desktop.jpg';
import ccOrangeVanillaZero from '../assets/images/orange-vanilla-zero-sugar_12oz_desktop.jpg';
import ccVanillaZero from '../assets/images/vanilla-zero-sugar_12oz_desktop.jpg';

class ExploreFlavor extends Component {
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
			var imageCherry = document.getElementById('image-cherry');
			var imageCherryVanilla = document.getElementById('image-cherry-vanilla');
			var imageOrangeVanilla = document.getElementById('image-orange-vanilla');
			var imageVanilla = document.getElementById('image-vanilla');
			var imageCherryZero = document.getElementById('image-cherry-zero');
			var imageCherryVanillaZero = document.getElementById('image-cherry-vanilla-zero');
			var imageOrangeVanillaZero = document.getElementById('image-orange-vanilla-zero');
			var imageVanillaZero = document.getElementById('image-vanilla-zero');

			var titleCherry = document.getElementById('title-cherry');
			var titleCherryVanilla = document.getElementById('title-cherry-vanilla');
			var titleOrangeVanilla = document.getElementById('title-orange-vanilla');
			var titleVanilla = document.getElementById('title-vanilla');
			var titleCherryZero = document.getElementById('title-cherry-zero');
			var titleCherryVanillaZero = document.getElementById('title-cherry-vanilla-zero');
			var titleOrangeVanillaZero = document.getElementById('title-orange-vanilla-zero');
			var titleVanillaZero = document.getElementById('title-vanilla-zero');

			if (eventKey === 'image-1') {
				imageCherry.style.display = 'block';
				imageCherryVanilla.style.display = 'none';
				imageOrangeVanilla.style.display = 'none';
				imageVanilla.style.display = 'none';
				imageCherryZero.style.display = 'none';
				imageCherryVanillaZero.style.display = 'none';
				imageOrangeVanillaZero.style.display = 'none';
				imageVanillaZero.style.display = 'none';

				titleCherry.style.display = 'block';
				titleCherryVanilla.style.display = 'none';
				titleOrangeVanilla.style.display = 'none';
				titleVanilla.style.display = 'none';
				titleCherryZero.style.display = 'none';
				titleCherryVanillaZero.style.display = 'none';
				titleOrangeVanillaZero.style.display = 'none';
				titleVanillaZero.style.display = 'none';
			}
			if (eventKey === 'image-2') {
				imageCherry.style.display = 'none';
				imageCherryVanilla.style.display = 'block';
				imageOrangeVanilla.style.display = 'none';
				imageVanilla.style.display = 'none';
				imageCherryZero.style.display = 'none';
				imageCherryVanillaZero.style.display = 'none';
				imageOrangeVanillaZero.style.display = 'none';
				imageVanillaZero.style.display = 'none';

				titleCherry.style.display = 'none';
				titleCherryVanilla.style.display = 'block';
				titleOrangeVanilla.style.display = 'none';
				titleVanilla.style.display = 'none';
				titleCherryZero.style.display = 'none';
				titleCherryVanillaZero.style.display = 'none';
				titleOrangeVanillaZero.style.display = 'none';
				titleVanillaZero.style.display = 'none';
			}
			if (eventKey === 'image-3') {
				imageCherry.style.display = 'none';
				imageCherryVanilla.style.display = 'none';
				imageOrangeVanilla.style.display = 'block';
				imageVanilla.style.display = 'none';
				imageCherryZero.style.display = 'none';
				imageCherryVanillaZero.style.display = 'none';
				imageOrangeVanillaZero.style.display = 'none';
				imageVanillaZero.style.display = 'none';

				titleCherry.style.display = 'none';
				titleCherryVanilla.style.display = 'none';
				titleOrangeVanilla.style.display = 'block';
				titleVanilla.style.display = 'none';
				titleCherryZero.style.display = 'none';
				titleCherryVanillaZero.style.display = 'none';
				titleOrangeVanillaZero.style.display = 'none';
				titleVanillaZero.style.display = 'none';
			}
			if (eventKey === 'image-4') {
				imageCherry.style.display = 'none';
				imageCherryVanilla.style.display = 'none';
				imageOrangeVanilla.style.display = 'none';
				imageVanilla.style.display = 'block';
				imageCherryZero.style.display = 'none';
				imageCherryVanillaZero.style.display = 'none';
				imageOrangeVanillaZero.style.display = 'none';
				imageVanillaZero.style.display = 'none';

				titleCherry.style.display = 'none';
				titleCherryVanilla.style.display = 'none';
				titleOrangeVanilla.style.display = 'none';
				titleVanilla.style.display = 'block';
				titleCherryZero.style.display = 'none';
				titleCherryVanillaZero.style.display = 'none';
				titleOrangeVanillaZero.style.display = 'none';
				titleVanillaZero.style.display = 'none';
			}
			if (eventKey === 'image-5') {
				imageCherry.style.display = 'none';
				imageCherryVanilla.style.display = 'none';
				imageOrangeVanilla.style.display = 'none';
				imageVanilla.style.display = 'none';
				imageCherryZero.style.display = 'block';
				imageCherryVanillaZero.style.display = 'none';
				imageOrangeVanillaZero.style.display = 'none';
				imageVanillaZero.style.display = 'none';

				titleCherry.style.display = 'none';
				titleCherryVanilla.style.display = 'none';
				titleOrangeVanilla.style.display = 'none';
				titleVanilla.style.display = 'none';
				titleCherryZero.style.display = 'block';
				titleCherryVanillaZero.style.display = 'none';
				titleOrangeVanillaZero.style.display = 'none';
				titleVanillaZero.style.display = 'none';
			}
			if (eventKey === 'image-6') {
				imageCherry.style.display = 'none';
				imageCherryVanilla.style.display = 'none';
				imageOrangeVanilla.style.display = 'none';
				imageVanilla.style.display = 'none';
				imageCherryZero.style.display = 'none';
				imageCherryVanillaZero.style.display = 'block';
				imageOrangeVanillaZero.style.display = 'none';
				imageVanillaZero.style.display = 'none';

				titleCherry.style.display = 'none';
				titleCherryVanilla.style.display = 'none';
				titleOrangeVanilla.style.display = 'none';
				titleVanilla.style.display = 'none';
				titleCherryZero.style.display = 'none';
				titleCherryVanillaZero.style.display = 'block';
				titleOrangeVanillaZero.style.display = 'none';
				titleVanillaZero.style.display = 'none';
			}
			if (eventKey === 'image-7') {
				imageCherry.style.display = 'none';
				imageCherryVanilla.style.display = 'none';
				imageOrangeVanilla.style.display = 'none';
				imageVanilla.style.display = 'none';
				imageCherryZero.style.display = 'none';
				imageCherryVanillaZero.style.display = 'none';
				imageOrangeVanillaZero.style.display = 'block';
				imageVanillaZero.style.display = 'none';

				titleCherry.style.display = 'none';
				titleCherryVanilla.style.display = 'none';
				titleOrangeVanilla.style.display = 'none';
				titleVanilla.style.display = 'none';
				titleCherryZero.style.display = 'none';
				titleCherryVanillaZero.style.display = 'none';
				titleOrangeVanillaZero.style.display = 'block';
				titleVanillaZero.style.display = 'none';
			}
			if (eventKey === 'image-8') {
				imageCherry.style.display = 'none';
				imageCherryVanilla.style.display = 'none';
				imageOrangeVanilla.style.display = 'none';
				imageVanilla.style.display = 'none';
				imageCherryZero.style.display = 'none';
				imageCherryVanillaZero.style.display = 'none';
				imageOrangeVanillaZero.style.display = 'none';
				imageVanillaZero.style.display = 'block';

				titleCherry.style.display = 'none';
				titleCherryVanilla.style.display = 'none';
				titleOrangeVanilla.style.display = 'none';
				titleVanilla.style.display = 'none';
				titleCherryZero.style.display = 'none';
				titleCherryVanillaZero.style.display = 'none';
				titleOrangeVanillaZero.style.display = 'none';
				titleVanillaZero.style.display = 'block';
			}
		};

		return (
			<Container>
				<Row lg={1}>
					<Navigation />
				</Row>
				<Row className="row-explore">
					<Col sm={4}>
						<img src={ccCherry} id="image-cherry" alt="cherry" className="explore-image" />
						<img
							src={ccCherryVanilla}
							id="image-cherry-vanilla"
							style={{ display: 'none' }}
							alt="cherry vanilla"
							className="explore-image"
						/>
						<img
							src={ccOrangeVanilla}
							id="image-orange-vanilla"
							style={{ display: 'none' }}
							alt="orange vanilla"
							className="explore-image"
						/>
						<img
							src={ccVanilla}
							id="image-vanilla"
							style={{ display: 'none' }}
							alt="vanilla"
							className="explore-image"
						/>
						<img
							src={ccCherryZero}
							id="image-cherry-zero"
							style={{ display: 'none' }}
							alt="cherry zero sugar"
							className="explore-image"
						/>
						<img
							src={ccCherryVanillaZero}
							id="image-cherry-vanilla-zero"
							style={{ display: 'none' }}
							alt="cherry vanilla zero sugar"
							className="explore-image"
						/>
						<img
							src={ccOrangeVanillaZero}
							id="image-orange-vanilla-zero"
							style={{ display: 'none' }}
							alt="orange vanilla zero sugar"
							className="explore-image"
						/>
						<img
							src={ccVanillaZero}
							id="image-vanilla-zero"
							style={{ display: 'none' }}
							alt="vanilla zero sugar"
							className="explore-image"
						/>
					</Col>
					<Col sm={8} className="col-explore">
						<h2>
							Coca-Cola®&nbsp;
							<span id="title-cherry">Cherry</span>
							<span style={{ display: 'none' }} id="title-cherry-vanilla">
								Cherry Vanilla
							</span>
							<span style={{ display: 'none' }} id="title-orange-vanilla">
								Orange Vanilla
							</span>
							<span style={{ display: 'none' }} id="title-vanilla">
								Vanilla
							</span>
							<span style={{ display: 'none' }} id="title-cherry-zero">
								Cherry Zero Sugar
							</span>
							<span style={{ display: 'none' }} id="title-cherry-vanilla-zero">
								Cherry Vanilla Zero Sugar
							</span>
							<span style={{ display: 'none' }} id="title-orange-vanilla-zero">
								Orange Vanilla Zero Sugar
							</span>
							<span style={{ display: 'none' }} id="title-vanilla-zero">
								Vanilla Zero Sugar
							</span>
						</h2>
						<h6>Enjoy the crisp and refreshing taste of Coca-Cola.</h6>
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
									Cherry
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-2" className="explore-item">
									Cherry Vanilla
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-3" className="explore-item">
									Orange Vanilla
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-4" className="explore-item">
									Vanilla
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-5" className="explore-item">
									Cherry Zero Sugar
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-6" className="explore-item">
									Cherry Vanilla Zero Sugar
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-7" className="explore-item">
									Orange Vanilla Zero Sugar
								</Dropdown.Item>
								<Dropdown.Item eventKey="image-8" className="explore-item">
									Vanilla Zero Sugar
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
								<strong className="nutrition-large-num">150</strong>
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
									Sodium <span style={{ fontWeight: 'normal' }}>35mg</span>
								</strong>
								<strong>1%</strong>
							</p>
							<hr className="nutrition-hr-4" />
							<p className="nutrition-between">
								<strong>
									Total<br />Carbohydrate<br />
									<span style={{ fontWeight: 'normal' }}>42g</span>
								</strong>
								<strong style={{ lineHeight: '4.5' }}>15%</strong>
							</p>
							<hr className="nutrition-hr-4" />
							<p>
								&nbsp;&nbsp;&nbsp;Total Sugars<br />42g
							</p>
							<hr className="nutrition-hr-4" />
							<p className="nutrition-between">
								<span style={{ fontWeight: 'normal' }}>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Includes<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;42g
									Added<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sugars
								</span>
								<span style={{ fontWeight: 'bolder', lineHeight: '4.5' }}>83%</span>
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

export default ExploreFlavor;
