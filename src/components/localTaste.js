import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigation from './navigation';
import BackButton from './backButton';
import Footer from './footer';
import SnsLinks from './snsLinks';
import imageLocal from '../assets/images/coke_origins_hero_desktop.jpg';
import bgPeach from '../assets/images/peach_background.png';
import imgPeach from '../assets/images/peach_background_2.png';
import btPeach from '../assets/images/peach_bottle_2.png';
import bgBerry from '../assets/images/raspberry-background.png';
import imgBerry from '../assets/images/raspberry_background_2.png';
import btBerry from '../assets/images/Raspberry_bottle_1.png';

class LocalTaste extends Component {
	render() {
		return (
			<Container>
				<Row lg={1}>
					<Navigation />
				</Row>
				<Row lg={1}>
					<Card className="text-white image-title">
						<Card.Img
							className="banner-image banner-local"
							src={imageLocal}
							alt="Explore Coca-Cola Products"
						/>
						<Card.ImgOverlay className="banner-overlay overlay-local">
							<Card.Title className="banner-title title-local">
								ENJOY TWO SPECIALLY CRAFTED FLAVORS FROM COCA-COLA®
							</Card.Title>
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
							Coca-Cola Georgia Peach and California Raspberry each combine the timeless taste of
							Coca-Cola with a unique local flavor.
						</p>
					</Col>
				</Row>
				<Row lg={2} className="row-local">
					<Col className="local-product">
						<Card className="local-card">
							<Card.Img src={bgPeach} alt="background" className="local-bg" />
							<Card.ImgOverlay className="local-parent">
                                <Card.Img src={imgPeach} alt="peach" className="local-image"></Card.Img>
                                <Card.Img src={btPeach} alt="bottle" className="local-bottle"></Card.Img>
								<Card.Title className="local-title">GEORGIA PEACH</Card.Title>
							</Card.ImgOverlay>
						</Card>
					</Col>
                    <Col className="local-product">
						<Card className="local-card">
							<Card.Img src={bgBerry} alt="background" className="local-bg" />
							<Card.ImgOverlay className="local-parent">
                                <Card.Img src={imgBerry} alt="peach" className="local-image"></Card.Img>
                                <Card.Img src={btBerry} alt="bottle" className="local-bottle"></Card.Img>
								<Card.Title className="local-title local-berry">CALIFORNIA RASPBERRY</Card.Title>
							</Card.ImgOverlay>
						</Card>
					</Col>
				</Row>
				<Footer />
				<SnsLinks />
			</Container>
		);
	}
}

export default LocalTaste;
