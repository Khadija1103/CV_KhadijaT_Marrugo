import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App'
import './index.css';
 
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
 


 
 
// Configuración de la rutas del Sitio Web 
ReactDOM.render(
	<React.StrictMode>
	  <App />
	  
	</React.StrictMode>,
	document.getElementById('root')
  );
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();