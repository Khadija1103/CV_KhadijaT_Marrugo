import React from 'react';

function Menu() {
	return (
	  
		
	
  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
 
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">
				<li className="nav-item active">
			          	<a className="nav-link" href="index">Inicio<span className="sr-only"></span></a>
			        </li>
			        <li className="nav-item active">
			          	<a className="nav-link" href="Home">Perfil<span className="sr-only"></span></a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="Nosotros">Educacion</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="Servicios">Experirncia</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="Contactos">Contactos</a>
			        </li>
			    </ul>
		
		    </div>
	
	
		</nav>
 
             
	


  	);
    
  }
 

 
export default Menu;