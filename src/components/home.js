import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navigation from './navigation';
import BackButton from './backButton';
import storeImg from '../assets/images/Mobile-CokeStore-Img.jpeg';
import StoreShop from './storeShop';
import Footer from './footer';
import SnsLinks from './snsLinks';
import productCC from '../assets/images/coke_original_12oz_desktop.jpg';
import productDecaf from '../assets/images/coke_caffeine-cree_12oz_cesktop.jpg';
import exploreCC from '../assets/images/coca-cola-hero.jpeg';
import arrowDown from '../assets/images/scroll_arrows.gif';

class Home extends Component {
	render() {
		return (
			<Container>
				<Row lg={1}>
					<Navigation />
				</Row>
				<Row lg={1}>
					<Card className="text-white image-title">
						<Card.Img className="banner-image" src={exploreCC} alt="Explore Coca-Cola Products" />
						<Card.ImgOverlay className="banner-overlay">
							<Card.Title className="banner-title">EXPLORE COCA-COLA® PRODUCTS</Card.Title>

							<div className="scroll-group">
								<Card.Text className="banner-text">SCROLL</Card.Text>
								<img alt="scroll-arrow" src={arrowDown} className="scroll-arrow" />
							</div>
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
						<p className="slogan-text">
							Enjoy the refreshing, original taste of Coca-Cola® - shop online or find near you today.
						</p>
					</Col>
				</Row>
				<Row lg={2} className="row-product row-body">
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={productCC} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola</Card.Text>
								<Button variant="dark" className="button-style" href="/products/coca-cola/explore/">
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-decaf">
							<Card.Img variant="top" src={productDecaf} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Caffeine Free Coca-Cola</Card.Text>
								<Button variant="dark" className="button-style" href="/products/coca-cola/explore/">
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

export default Home;
