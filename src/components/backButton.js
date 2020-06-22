import React, { Component } from 'react';
import leftArrow from '../assets/images/left-arrow-triangle.png';

class BackButton extends Component {
    render() { 
        return ( 
            <a href="/" className="back-link">
                <img alt="back to products" className="back-arrow" src={leftArrow}></img>
                BACK TO PRODUCTS
            </a>
         );
    }
}
 
export default BackButton;