import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import productCC from '../assets/images/0986-002_Coca-Cola_PLP-Thumbnails_Coca-Cola.png';

class Product extends Component {
	render() {
		return (
			<Card className="product-card product-cc">
				<Card.Img variant="top" src={productCC} style={{ maxWidth: '100%' }} />
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
