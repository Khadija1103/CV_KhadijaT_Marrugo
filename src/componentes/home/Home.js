import React from 'react';
import Menu from '../menu/menu'; 
import Slider from './slider/Slider';
import Servicios from './servicios1/servicios1';
import Footer from '../footer/footer'; 
 
 
function Home() {
	return (
	  
 
			<>
 
			<Menu /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <Slider /> 
					  
		  	        <Servicios/> 
					  
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
 
	  		<Footer />
 
	  		</>
 
		);
 
	}
 

 
export default Home;