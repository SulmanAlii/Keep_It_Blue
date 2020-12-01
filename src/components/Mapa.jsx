import React, { Component, useState} from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, Tooltip } from 'react-leaflet';
import { geoData } from './../datos/geo';
import { icono } from './../js/iconos';
import {FormGroup, Label, Input, Col,Button} from 'reactstrap';
import Leaflet from "leaflet";
import img from '../tree.png';
import dataa from "../beach.json";
import Formulario from './Formulario'




const mapboxToken = 'pk.eyJ1IjoiYWxwZWxsYW1hcyIsImEiOiJja2kwazVsdm0wMWVnMnVxcWk0eWhmZGpsIn0.QMm5X6pi1TpBK6eHGACpig';


let DefaultIcon = Leaflet.icon({
  iconUrl: img,
  iconSize : [40,40]
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;



const Mapa = () => {

  // state = {};

  const [beachName,setbeachName] = useState(null);

  // Array para colorear el fondo de cada municipio (layer)
  const arrayColor = ['green','greenyellow', 'yellow', 'orange', 'red'];

  // Estilos predefinidos para los municipios (layer)
  const municipioStyle = {
    weight: 2,
    opacity: 1,
    color: 'black',
    dashArray: 1,
    fillColor: 'blue',
    fillOpacity: 0.6
  }

  

  // Función para el evento click
  const onMunicipioClick = (event) => {
    event.target.setStyle(
      {
        color: "white",
        fillOpacity: 1
      }
    )
  }

  // Función para cierre de popup del municipio
  const onMunicipioPopupClose = (event) => {
    event.target.setStyle(
      {
        color: "black",
        fillOpacity: 0.6
      }
    )
  }

  // Funcion para el evento mouseover
  const onMunicipioMouseover = (event) => {
    console.log("mouseover sobre " + event.target.feature.properties.municipio);
    event.target.setStyle(
      {
        color: "white",
        fillOpacity: 1
      }
    )
  }

  const onMunicipioMouseout = (event) => {
    console.log("mouseover sobre " + event.target.feature.properties.municipio);
    event.target.setStyle(
      {
        color: "black",
        fillOpacity: 0.6
      }
    )
  }

  // Para cada uno de los municipios declaramos sus funciones (municipio es el JSON en formato array | layer es la capa del municipio que nos permitira editar su manera de actuar)
  const onEachMunicipio = (municipio, layer) => {
    // Recogemos el nombre del municipio y lo guardamos en la variable 'nameMunicipio'
    let nameMunicipio = municipio.properties.municipio;

    // Creamos un popup que mostrará el nombre del municipio en el cual clickemos
    layer.bindPopup(nameMunicipio);

    // Creamos una constante aleatoria para definir el color del municipio en función del array de colores
    const indexColor = Math.floor(Math.random() * arrayColor.length);
    layer.options.fillColor = arrayColor[indexColor];

    // Eventos
    layer.on({
      click: onMunicipioClick,
      mouseover: onMunicipioMouseover,
      mouseout: onMunicipioMouseout,
      popupclose: onMunicipioPopupClose,
    });
  }

    return (
      <Col xs="6" style={{display:"flex"}}>

        <MapContainer style={{ height: '80vh'}} center={[41.392264, 2.202652]} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`}
            id="mapbox/light-v10"
          />

          {dataa.map((playa) => (
            <Marker position={[playa["-l"], playa["-o"]]} >
              <Popup>
              {playa["-t"]}
              <Button style={{marginLeft:"0.2rem", border:"none",padding:"0.2rem", background:"orange"}} onClick={() => setbeachName(playa["-t"])}>add</Button>
              </Popup>
            </Marker>
          ))}

        <GeoJSON data={geoData} style={municipioStyle} onEachFeature={onEachMunicipio} /> 

        </MapContainer>
        <Formulario nombre={beachName} />

      </Col >
 
    );
  

};


export default Mapa;