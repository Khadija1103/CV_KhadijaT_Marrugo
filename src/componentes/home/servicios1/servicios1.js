import React from 'react';
import './servicios1.css';
 
 
function servicios() {
	return (
 
        <div className="servicios1">
          
          <div className="tex" >  
        <h2>Habilidades</h2>
        <hr></hr>
       <div className="info">Diseño UX <br></br><progress max="100" value="70"> </progress></div>
      <div className="info">Diseño UI <br></br> <progress max="100" value="70"> </progress></div>
      <div className="info">HTML y CSS <br></br><progress max="100" value="90"> </progress></div>
      <div className="info">python<br></br><progress max="100" value="70"> </progress></div>
      <div className="info">React<br></br><progress max="100" value="70"> </progress></div>
      <div className="info">Github<br></br><progress max="100" value="90"> </progress></div>
      <div className="info">JavaScript<br></br><progress max="100" value="90"> </progress></div>
      </div>  
        </div>
 
    );
    
}
 

 
export default servicios;