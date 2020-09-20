import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navigation from './navigation';
import BackButton from './backButton';
import StoreShop from './storeShop';
import Footer from './footer';
import SnsLinks from './snsLinks';
import ImageZero from './imageZero';
import storeImg from '../assets/images/Mobile-CokeStore-Img.jpeg';
import imgZero from '../assets/images/coke_zero-sugar_12oz_desktop.jpg';
import imgDecaf from '../assets/images/coke-zero-sugar-caffeine-free_12oz_desktop.jpg';
import imgCherry from '../assets/images/cherry-vanilla-zero-sugar_12oz_desktop.png';
import imgVanilla from '../assets/images/vanilla-zero-sugar_12oz_desktop.jpg';
import imgOrange from '../assets/images/orange-vanilla-zero-sugar_12oz_desktop.jpg';
import imgEnergy from '../assets/images/energy-zero-sugar_desktop.png';
import imgEnergyCherry from '../assets/images/energy-zero-sugar-cherry_desktop.png';

class ZeroSugar extends Component {
	render() {
		return (
			<Container>
				<Row lg={1}>
					<Navigation />
				</Row>
				<Row lg={1}>
					<ImageZero />
				</Row>
				<Row lg={2} className="row-body">
					<Col className="col-back-button">
						<BackButton />
					</Col>
					<Col />
				</Row>
				<Row lg={1} className="row-body">
					<Col className="col-slogan">
						<p className="slogan-text">
							Coca-Cola® Zero Sugar has more real Coca-Cola® flavor, still without any sugar.
						</p>
					</Col>
				</Row>
				<Row lg={4} className="row-product row-body">
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgZero} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coke Zero Sugar</Card.Text>
								<br />
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/products/coca-cola-zero-sugar/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgDecaf} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Caffeine Free Coke Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/products/coca-cola-zero-sugar/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgCherry} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Cherry Vanilla Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/products/coca-cola-zero-sugar/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgVanilla} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Vanilla Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/products/coca-cola-zero-sugar/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgOrange} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Orange Vanilla Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/products/coca-cola-zero-sugar/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgEnergy} className="card-zero" />
							<br />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Energy Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/products/coca-cola-zero-sugar/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgEnergyCherry} className="card-zero" />
							<br />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Energy Cherry Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/cocacola/products/coca-cola-zero-sugar/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row lg={2} className="row-store">
					<Col className="col-store">
						<img alt="store scene" src={storeImg} className="img-store" />
					</Col>
					<Col className="col-store">
						<StoreShop />
					</Col>
				</Row>
				<Footer />
				<SnsLinks />
			</Container>
		);
	}
}

export default ZeroSugar;
