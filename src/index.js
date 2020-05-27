import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';  // libary for material 
import 'react-mdl/extra/material.js'; // libary for material 
import {BrowserRouter} from 'react-router-dom'; //libray for page routing 

ReactDOM.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
   
 
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
