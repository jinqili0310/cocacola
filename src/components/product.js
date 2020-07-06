import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import productCC from '../assets/images/coke_original_12oz_desktop.jpg';

class Product extends Component {
	render() {
		return (
			<Card className="product-card product-cc">
				<Card.Img variant="top" src={productCC} className="card-zero" />
				<Card.Body className="product-card-body">
					<Card.Text>Coca-Cola</Card.Text>
					<Button variant="dark" className="button-style">
						EXPLORE
					</Button>
				</Card.Body>
			</Card>
		);
	}
}

export default Product;
