/*
 * @Author: Jinqi Li
 * @Date: 2020-06-21 22:29:22
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-09-20 05:44:18
 * @FilePath: /cocacola-clone/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
