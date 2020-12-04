import React, { useState } from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from 'react-leaflet';
import L, { geoJSON } from 'leaflet';
import { geoData } from './../datos/geo';
import { icono,beachOk } from './iconos';
import {Col, Button } from 'reactstrap';
import Leaflet from "leaflet";
import img from '../tree.png';

import Formulario from './Formulario'

// Token mapbox
const mapboxToken = 'pk.eyJ1IjoiYWxwZWxsYW1hcyIsImEiOiJja2kwazVsdm0wMWVnMnVxcWk0eWhmZGpsIn0.QMm5X6pi1TpBK6eHGACpig';

// Array para colorear el fondo de cada municipio (layer)
const arrayColor = ['green', 'yellow', 'orange', 'red'];

console.log(beachOk[0]);

const Mapa = () => {
  // Declaramos el state de playas inicializado null
  const [playasComarca,setPlayasComarca] = useState([]);
  const [beachName, setbeachName] = useState(null);
  let DefaultIcon = Leaflet.icon({
    iconUrl: img,
    iconSize: [40, 40]
  });

  Leaflet.Marker.prototype.options.icon = DefaultIcon;

  function SetGeoJson() {
    const map = useMap();
    /* const geojson = L.geoJson(); */

    // Estilos predefinidos para los municipios (layer)
    const municipioStyle = {
      weight: 1,
      opacity: 0.3,
      color: 'black',
      dashArray: 10,
      fillColor: 'blue',
      fillOpacity: 0.3
    }

    // Función para el evento click
    const onMunicipioClick = (event) => {
      const layer = event.target;
      console.log(layer);
      map.fitBounds(layer.getBounds());

      
      // Comparar cp de comarca(layer.feature.properties.codigo_postal), beachOk.m['-i']
    }

    // Funcion para el evento mouseover
    const onMunicipioMouseover = (event) => {
      const layer = event.target;
      layer.setStyle(
        {
          opacity: 1,
        }
      )
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }

    const onMunicipioMouseout = (event) => {
      const layer = event.target;
      layer.setStyle(
        {
          opacity: 0.3,
        }
      )
      //geojson.resetStyle(layer);
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
      });
    }

    return (
      <>
        <GeoJSON data={geoData} style={municipioStyle} onEachFeature={onEachMunicipio} />
      </>

    );
  }

  // Muestra las playas
  const playas = beachOk.map((playa, idx) => (
    <Marker key={idx} position={[playa["-l"], playa["-o"]]} >
      <Popup>
        {playa["-t"]}
        <Button style={{ marginLeft: "0.2rem", border: "none", padding: "0.2rem", background: "orange" }} onClick={() => setbeachName(playa["-t"])}>add</Button>
      </Popup>
    </Marker>
  ));

  const selectplaya = beachOk.map((el, idx) => (
    <option key={idx} >{el["-t"]}</option>
  ));


  return (
    <Col xs="12">
      <select className="custom-select col-6" >
        <option selected>Playas</option>
        {selectplaya}
      </select>
      <MapContainer style={{ height: '80vh' }} center={[41.392264, 2.202652]} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`}
          id="mapbox/light-v10"
        />

        {playas}

        <SetGeoJson />

      </MapContainer>
      <Formulario nombre={beachName} />

    </Col >

  );

};

export default Mapa;
