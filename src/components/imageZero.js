import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import exploreZero from '../assets/images/Coke_Zero_PLP Hero_Desktop.jpeg';
import arrowDown from '../assets/images/scroll_arrows.gif';

class ImageZero extends Component {
    render() { 
        return ( 
            <Card className="text-white image-title">
				<Card.Img className="banner-image" src={exploreZero} alt="Explore Coca-Cola Products" />
				<Card.ImgOverlay className="banner-overlay">
					<Card.Title className="banner-title">COCA-COLA® ZERO SUGAR</Card.Title>
					
                    <div className="scroll-group">
					<Card.Text className="banner-text">SCROLL</Card.Text>
                    <img alt="scroll-arrow" src={arrowDown} className="scroll-arrow"></img>
                    </div>
				</Card.ImgOverlay>
			</Card>
         );
    }
}
 
export default ImageZero;