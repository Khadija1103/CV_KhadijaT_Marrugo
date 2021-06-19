import React from 'react';
import'./formulario.css'
function Formulario() {
	return (
	  
 
        <form className="formulario">
 
          <div className="form-group">
            <label htmlFor="nya" className="negrita">Nombres y Apellidos</label>
            <input type="text" className="form-control" id="nya" required />            
          </div>
 
          <div className="form-group">
            <label htmlFor="email" className="negrita">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
 
          <div className="form-group">
            <label htmlFor="asunto" className="negrita">Asunto</label>
            <input type="text" className="form-control" id="asunto" required />
          </div>
 
          <div className="form-group">
            <label htmlFor="mensaje" className="negrita">Mensaje</label>
            <textarea className="form-control" id="mensaje" required></textarea><br></br>
            
          </div>
 
          <button type="submit" className="boton">Enviar</button>
          <button type="reset" className="boton">Borrar</button>
 
        </form>
 
    );
    
  }
 

 
export default Formulario;