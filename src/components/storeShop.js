import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ccStore from '../assets/images/coke-store-logo-PLPs.png';

class StoreShop extends Component {
	render() {
		return (
			<Card className="store-card">
				<Card.Img src={ccStore} className="store-image"/>
				<Card.Body className="store-group">
					<Card.Text>
						Shop customized bottles, collectibles, gear and more from your favorite Coca-Cola brands on
						Cokestore.com.
					</Card.Text>
					{/* <Button className="store-button button-style">
                        <a href="https://www.cokestore.com/" className="shop-link">SHOP</a></Button> */}
				</Card.Body>
			</Card>
		);
	}
}

export default StoreShop;
