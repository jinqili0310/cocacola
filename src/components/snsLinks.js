import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import logoCC from '../assets/images/coke-cola.png';
import logoFB from '../assets/images/coke-facebook.png';
import logoTW from '../assets/images/coke-twitter.png';
import logoIG from '../assets/images/coke-instagran.png';
import logoYT from '../assets/images/coke-youtube.png';

class SnsLinks extends Component {
	render() {
		return (
			<Row lg={1} className="row-sns">
				<img alt="logo" src={logoCC} className="logo-img" />
				<p className="sns-title">CONNECT WITH US</p>
				<div className="sns-group">
					<a href="/">
						<img alt="facebook" src={logoFB} style={{ marginRight: '10px' }} />
					</a>
					<a href="/">
						<img alt="twitter" src={logoTW} style={{ marginRight: '10px' }} />
					</a>
					<a href="/">
						<img alt="instagram" src={logoIG} style={{ marginRight: '10px' }} />
					</a>
					<a href="/">
						<img alt="youtube" src={logoYT} />
					</a>
				</div>
				<p>
					© 2020{' '}
					<a href="/" className="shop-link">
						THE COCA-COLA COMPANY
					</a>. ALL RIGHTS RESERVED
				</p>
                <div className="contact-group">
                    <a href="/" className="contact-link">CONTACT US</a>
                    <p> | </p>
                    <a href="/" className="contact-link">FAQs</a>
                    <p> | </p>
                    <a href="/" className="contact-link">TERMS</a>
                    <p> | </p>
                    <a href="/" className="contact-link">RULES</a>
                    <p> | </p>
                    <a href="/" className="contact-link">PRIVACY</a>
                    <p> | </p>
                    <a href="/" className="contact-link">DO NOT SELL MY PERSONAL INFORMATION</a>
                    <p> | </p>
                    <a href="/" className="contact-link">SITEMAP</a>
                </div>
			</Row>
		);
	}
}

export default SnsLinks;
