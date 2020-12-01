import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../node_modules/leaflet/dist/leaflet.css";
import dataa from "./beach.json";
import Leaflet from "leaflet";
import {Button} from'reactstrap';
import icon from "leaflet/dist/images/marker-icon.png";
import img from './tree.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Mapa from './components/Mapa';
import Formulario from './components/Formulario';

import Navbar from './Navbar';
import {Row} from 'reactstrap';
import Contenido from './Contenido';

let DefaultIcon = Leaflet.icon({
  iconUrl: img,
  iconSize : [40,40]
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;





function App() {

  const [beachName,setbeachName] = useState(null);

  // console.log(beachName);

  return (
    <>
    
    <Navbar/>
    <Row>
    
    <Mapa></Mapa>
    <Formulario/>
    </Row><Contenido></Contenido>
    </>
   
  );
}

export default App;
