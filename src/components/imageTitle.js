import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import exploreCC from '../assets/images/coca-cola-hero.jpeg';
import arrowDown from '../assets/images/scroll_arrows.gif';

class ImageTitle extends Component {
	render() {
		return (
			<Card className="text-white image-title">
				<Card.Img className="banner-image" src={exploreCC} alt="Explore Coca-Cola Products" />
				<Card.ImgOverlay className="banner-overlay">
					<Card.Title className="banner-title">EXPLORE COCA-COLA® PRODUCTS</Card.Title>
					
                    <div className="scroll-group">
					<Card.Text className="banner-text">SCROLL</Card.Text>
                    <img alt="scroll-arrow" src={arrowDown} className="scroll-arrow"></img>
                    </div>
				</Card.ImgOverlay>
			</Card>
		);
	}
}

export default ImageTitle;
