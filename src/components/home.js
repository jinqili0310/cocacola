import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './navigation';
import ImageTitle from './imageTitle';
import BackButton from './backButton';
import Product from './product';
import ProductDecaf from './productDecaf';
import storeImg from '../assets/images/Mobile-CokeStore-Img.jpeg'; 
import StoreShop from './storeShop';
import Footer from './footer';
import SnsLinks from './snsLinks';

class Home extends Component {
    render() { 
        return ( 
            <Container>
				<Row lg={1}>
					<Navigation />
				</Row>
				<Row lg={1}>
					<ImageTitle />
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
 
export default Home;