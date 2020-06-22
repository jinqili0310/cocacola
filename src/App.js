import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/navigation';
import ImageTitle from './components/imageTitle';
import BackButton from './components/backButton';
import Product from './components/product';
import ProductDecaf from './components/productDecaf';
import storeImg from './assets/images/Mobile-CokeStore-Img.jpeg';
import StoreShop from './components/storeShop';
import Footer from './components/footer';
import SnsLinks from './components/snsLinks';

class App extends Component {
	state = {};
	render() {
		return (
			<Container>
				<Row lg={1}>
					<Navigation />
				</Row>
				<Row lg={1}>
					<ImageTitle />
				</Row>
				<Row lg={2}>
					<Col className="col-back-button">
						<BackButton />
					</Col>
					<Col />
				</Row>
				<Row lg={1}>
					<Col className="col-slogan">
						<p className="slogan-text">
							Enjoy the refreshing, original taste of Coca-Cola® - shop online or find near you today.
						</p>
					</Col>
				</Row>
				<Row lg={2} className="row-product">
					<Col>
						<Product />
					</Col>
					<Col>
						<ProductDecaf />
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

export default App;
