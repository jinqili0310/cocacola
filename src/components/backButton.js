import React, { Component } from 'react';
import leftArrow from '../assets/images/left-arrow-triangle.png';
import { Link } from 'react-router-dom';

class BackButton extends Component {
    render() { 
        return ( 
            <Link to="/" className="back-link">
                <img alt="back to products" className="back-arrow" src={leftArrow}></img>
                BACK TO PRODUCTS
            </Link>
         );
    }
}
 
export default BackButton;