import Menu from './componentes/menu/menu';
import Inicio from './componentes/inicio/inicio';
import Home from './componentes/home/Home'; 
import Nosotros from './componentes/nosotros/Nosotros';
import Servicios from './componentes/servicios/Servicios';
import Contactos from './componentes/contactos/Contactos';

import {BrowserRouter as Router,Switch,Route,} from"react-router-dom";
import './index.css';

function App() {
  return (
    <Router>
	    <div>
      <Menu/>
        <Inicio/>
        <Switch>
        <Route extact path="/Home">
        <Home/></Route>
        <Route extact path="/Nosotros">
        <Nosotros/> </Route>
        <Route extact path="/Servicios">
        <Servicios/></Route>
        <Route extact path="/Contactos">
        <Contactos/></Route>
        </Switch>
        </div>
        </Router>
        
	  
   
   
  );
}

export default App;
