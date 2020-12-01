import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Contenido from './Contenido';



let DefaultIcon = Leaflet.icon({
  iconUrl: img,
  iconSize : [40,40]
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;


function App() {
 

  return (
    <div className="App" >
    
    <Contenido />
    
    {/*<h1>{beachName}</h1> */ }

    </div>
  );
}

export default App;
