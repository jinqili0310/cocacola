import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navigation from './navigation';
import BackButton from './backButton';
import StoreShop from './storeShop';
import Footer from './footer';
import SnsLinks from './snsLinks';
import storeImg from '../assets/images/Mobile-CokeStore-Img.jpeg';
import imageFlavor from '../assets/images/Coca-Cola_Flavors-Hero_Desktop.jpeg';
import imgCherry from '../assets/images/cherry_12oz_desktop.jpg';
import imgCherryVanilla from '../assets/images/cherry-vanilla_12oz_desktop.png';
import imgOrangeVanilla from '../assets/images/orange-vanilla_12oz_desktop.jpg';
import imgVanilla from '../assets/images/vanilla_12oz_desktop.jpg';
import imgCherryZero from '../assets/images/cherry-zero-sugar_12oz_desktop.jpg';
import imgCherryVanillaZero from '../assets/images/cherry-vanilla-zero-sugar_12oz_desktop.png';
import imgOrangeVanillaZero from '../assets/images/orange-vanilla-zero-sugar_12oz_desktop.jpg';
import imgVanillaZero from '../assets/images/vanilla-zero-sugar_12oz_desktop.jpg';
import imageOver from '../assets/images/flavors-hero-twist-text.png';

class Flavor extends Component {
	render() {
		return (
			<Container>
				<Row lg={1}>
					<Navigation />
				</Row>
				<Row lg={1}>
					<Card className="text-white image-title title-flavor">
						<Card.Img
							className="banner-image bottom-flavor"
							src={imageFlavor}
							alt="Explore Coca-Cola Products"
						/>
						<Card.Img className="top-flavor" src={imageOver} alt="text" />
						<Card.ImgOverlay className="banner-overlay-flavor">
							<Card.Title className="banner-flavor">
								Find these refreshing flavors online or at a retailer near you.
							</Card.Title>
						</Card.ImgOverlay>
					</Card>
				</Row>
				<Row lg={2} className="row-body">
					<Col className="col-back-button col-flavor-back">
						<BackButton />
					</Col>
					<Col />
				</Row>
				<Row lg={4} className="row-body">
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgCherry} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Cherry</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/products/coca-cola-flavors/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgCherryVanilla} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Cherry Vanilla</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/products/coca-cola-flavors/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgOrangeVanilla} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Orange Vanilla</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/products/coca-cola-flavors/explore/"
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
								<Card.Text>Coca-Cola Vanilla</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/products/coca-cola-flavors/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgCherryZero} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Cherry Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/products/coca-cola-flavors/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgCherryVanillaZero} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Cherry Vanilla Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/products/coca-cola-flavors/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgOrangeVanillaZero} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Orange Vanilla Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/products/coca-cola-flavors/explore/"
								>
									EXPLORE
								</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-card">
						<Card className="product-card product-cc">
							<Card.Img variant="top" src={imgVanillaZero} className="card-zero" />
							<Card.Body className="product-card-body">
								<Card.Text>Coca-Cola Vanilla Zero Sugar</Card.Text>
								<Button
									variant="dark"
									className="button-style"
									href="/products/coca-cola-flavors/explore/"
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

export default Flavor;
