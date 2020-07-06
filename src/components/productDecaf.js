import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import productDecaf from '../assets/images/coke_caffeine-cree_12oz_cesktop.jpg';

class ProductDecaf extends Component {
	render() {
		return (
			<Card className="product-card product-decaf">
				<Card.Img variant="top" src={productDecaf} className="card-zero" />
				<Card.Body className="product-card-body">
					<Card.Text>Caffeine Free Coca-Cola</Card.Text>
					<Button variant="dark" className="button-style">
						EXPLORE
					</Button>
				</Card.Body>
			</Card>
		);
	}
}

export default ProductDecaf;
