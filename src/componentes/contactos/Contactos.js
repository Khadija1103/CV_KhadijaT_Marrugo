import React from 'react';
import Menu from '../menu/menu';
import Formulario from './formulario/Formulario';
import Footer from '../footer/footer';
import './contactos.css'
 
function Contactos() {
	return (
	  
<>
 
 <Menu /> 

 <div className="contactos"><br></br>
 <h2>Contactos</h2>
			<hr></hr>
			
		 <div className="container">
			 
		   <Formulario/> 
		

		   <hr className="featurette-divider" />

		 </div>

   </div>

   <Footer />

   </>
 
		);
 
	}
 

 
export default Contactos;