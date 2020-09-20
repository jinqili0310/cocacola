/*
 * @Author: Jinqi Li
 * @Date: 2020-08-26 16:08:32
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-09-20 08:06:24
 * @FilePath: /cocacola-clone/src/components/backButton.js
 */
import React, { Component } from 'react';
import leftArrow from '../assets/images/left-arrow-triangle.png';
import { Link } from 'react-router-dom';

class BackButton extends Component {
    render() { 
        return ( 
            <Link to="/cocacola/" className="back-link">
                <img alt="back to products" className="back-arrow" src={leftArrow}></img>
                BACK TO PRODUCTS
            </Link>
         );
    }
}
 
export default BackButton;