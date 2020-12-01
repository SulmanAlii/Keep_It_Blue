import React, { Component } from "react";
import { Col } from 'reactstrap';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, Tooltip } from 'react-leaflet';
import { geoData } from './../datos/geo';
import { icono } from './../js/iconos';


const mapboxToken = 'pk.eyJ1IjoiYWxwZWxsYW1hcyIsImEiOiJja2kwazVsdm0wMWVnMnVxcWk0eWhmZGpsIn0.QMm5X6pi1TpBK6eHGACpig';

class Mapa extends Component {

  state = {};

  // Array para colorear el fondo de cada municipio (layer)
  arrayColor = ['green','greenyellow', 'yellow', 'orange', 'red'];

  // Estilos predefinidos para los municipios (layer)
  municipioStyle = {
    weight: 2,
    opacity: 1,
    color: 'black',
    dashArray: 1,
    fillColor: 'blue',
    fillOpacity: 0.6
  }

  // Uno de los ciclos de vida del componente (nos sirve para declarar lo que necesitemos en ese momento)
  componentDidMount() {
    //console.log(geoData);
  }

  // Función para el evento click
  onMunicipioClick = (event) => {
    event.target.setStyle(
      {
        color: "white",
        fillOpacity: 1
      }
    )
  }

  // Función para cierre de popup del municipio
  onMunicipioPopupClose = (event) => {
    event.target.setStyle(
      {
        color: "black",
        fillOpacity: 0.6
      }
    )
  }

  // Funcion para el evento mouseover
  onMunicipioMouseover = (event) => {
    console.log("mouseover sobre " + event.target.feature.properties.municipio);
    event.target.setStyle(
      {
        color: "white",
        fillOpacity: 1
      }
    )
  }

  onMunicipioMouseout = (event) => {
    console.log("mouseover sobre " + event.target.feature.properties.municipio);
    event.target.setStyle(
      {
        color: "black",
        fillOpacity: 0.6
      }
    )
  }

  // Para cada uno de los municipios declaramos sus funciones (municipio es el JSON en formato array | layer es la capa del municipio que nos permitira editar su manera de actuar)
  onEachMunicipio = (municipio, layer) => {
    // Recogemos el nombre del municipio y lo guardamos en la variable 'nameMunicipio'
    let nameMunicipio = municipio.properties.municipio;

    // Creamos un popup que mostrará el nombre del municipio en el cual clickemos
    layer.bindPopup(nameMunicipio);

    // Creamos una constante aleatoria para definir el color del municipio en función del array de colores
    const indexColor = Math.floor(Math.random() * this.arrayColor.length);
    layer.options.fillColor = this.arrayColor[indexColor];

    // Eventos
    layer.on({
      click: this.onMunicipioClick,
      mouseover: this.onMunicipioMouseover,
      mouseout: this.onMunicipioMouseout,
      popupclose: this.onMunicipioPopupClose,
    });
  }

  render() {
    return (
      <Col xs="6">
       
        <MapContainer style={{ height: '80vh' }} center={[41.392264, 2.202652]} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`}
            id="mapbox/light-v10"
          />

          <Marker position={[41.390509, 2.202233]} icon={icono} >
            <Tooltip direction='top' opacity={1} >
              <span> Tooltip </span>
            </Tooltip>

            <Popup>
              <span> Popup </span>
            </Popup>
          </Marker>

          <GeoJSON data={geoData} style={this.municipioStyle} onEachFeature={this.onEachMunicipio} />

        </MapContainer>

      </Col >
    );
  }

};


export default Mapa;