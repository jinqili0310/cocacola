import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navigation from './navigation';
import BackButton from './backButton';
import StoreShop from './storeShop';
import Footer from './footer';
import SnsLinks from './snsLinks';
import storeImg from '../assets/images/Mobile-CokeStore-Img.jpeg';
import imageEnergy from '../assets/images/Coca-Cola-PCP-Energy_Hero_Desktop.jpeg';
import imgEnergy from '../assets/images/energy_desktop.png';
import imgEnergyZero from '../assets/images/energy-zero-sugar_desktop.png';
import imgEnergyCherry from '../assets/images/energy-cherry_desktop.png';
import imgEnergyCherryZero from '../assets/images/energy-zero-sugar-cherry_desktop.png';

class Energy extends Component {
	render() {
		return (
			<Container>
				<Row lg={1}>
					<Navigation />
				</Row>
				<Row lg={1}>
					<Card className="text-white image-title">
						<Card.Img className="banner-image" src={imageEnergy} alt="Explore Coca-Cola Products" />
						<Card.ImgOverlay className="banner-overlay-energy">
							<Card.Title className="banner-energy">THE ENERGY YOU WANT. THE TASTE YOU LOVE.</Card.Title>
						</Card.ImgOverlay>
					</Card>
				</Row>
				<Row lg={2} className="row-body">
					<Col className="col-back-button">
						<BackButton />
					</Col>
					<Col />
				</Row>
				<Row lg={1} className="row-body">
					<Col className="col-slogan">
						<p className="slogan-text">Tap to explore the new taste of energy.</p>
					</Col>
				</Row>
				<Row lg={4} className="row-product row-body">
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgEnergy} className="card-zero" />
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
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgEnergyZero} className="card-zero" />
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
					<Col className="col-card">
						<Card className="product-card product-cc">
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
					<Col className="col-card">
						<Card className="product-card product-cc">
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
				</Row>
				<Row lg={1}>
					<Col className="col-video">
						<p className="slogan-text video-text">SHOW UP WITH COCA-COLA® ENERGY.</p>
						<ReactPlayer className="video-style" url="https://youtu.be/-gAZRN3SCBw" />
						<p className="video-down">
							*Per 12oz can.
							<br />Coca-Cola® Energy is not recommended for people under 18, people sensitive to
							caffeine, pregnant or breast-feeding women.
						</p>
					</Col>
				</Row>
				<Row lg={2} className="row-video-store">
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

export default Energy;
