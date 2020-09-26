import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button } from 'react-bootstrap';
import imgCherryVanilla from '../assets/images/cherry-vanilla_12oz_desktop.png';
import imgCherryVanillaZero from '../assets/images/cherry-vanilla-zero-sugar_12oz_desktop.png';
import imgEnergy from '../assets/images/energy_desktop.png';
import imgEnergyZero from '../assets/images/energy-zero-sugar_desktop.png';
import imgEnergyCherry from '../assets/images/energy-cherry_desktop.png';
import imgEnergyCherryZero from '../assets/images/energy-zero-sugar-cherry_desktop.png';

class WhatsNew extends Component {
	render() {
		return (
			<React.Fragment>
				<Row lg={1} className="row-new">
					<h4>WHAT'S NEW</h4>
				</Row>
				<Row lg={4} className="row-new row-new-product">
					<Col>
						<Card className="product-card product-cc explore-card">
							<Card.Img variant="top" src={imgCherryVanilla} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Cherry Vanilla</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/#/products/coca-cola-flavors/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="product-card product-cc explore-card">
							<Card.Img variant="top" src={imgCherryVanillaZero} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Cherry Vanilla Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/#/products/coca-cola-flavors/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="product-card product-cc explore-card">
							<Card.Img variant="top" src={imgEnergy} className="card-zero" />
							<br />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Energy</Card.Text>
								<br />
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/#/products/coca-cola-energy/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="product-card product-cc explore-card">
							<Card.Img variant="top" src={imgEnergyZero} className="card-zero" />
							<br />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Energy Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/#/products/coca-cola-energy/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col />
					<Col>
						<Card className="product-card product-cc explore-card">
							<Card.Img variant="top" src={imgEnergyCherry} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Energy Cherry</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/#/products/coca-cola-energy/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="product-card product-cc explore-card">
							<Card.Img variant="top" src={imgEnergyCherryZero} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Energy Cherry Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/#/products/coca-cola-energy/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col />
				</Row>
			</React.Fragment>
		);
	}
}

export default WhatsNew;
