import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Contenido from './Contenido';
import Formulario from './components/Formulario'
import Mapa from "./components/Mapa";

let DefaultIcon = Leaflet.icon({
  iconUrl: img,
  iconSize : [40,40]
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;


function App() {
 

  return (
    <div className="App" >
    
    <Mapa />
    
    {/*<h1>{beachName}</h1> */ }

    </div>
  );
}

export default App;
