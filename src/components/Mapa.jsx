import React, { useState } from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import { geoData } from './../datos/geo';
import { icono } from './../js/iconos';

// Token mapbox
const mapboxToken = 'pk.eyJ1IjoiYWxwZWxsYW1hcyIsImEiOiJja2kwazVsdm0wMWVnMnVxcWk0eWhmZGpsIn0.QMm5X6pi1TpBK6eHGACpig';

// Array para colorear el fondo de cada municipio (layer)
const arrayColor = ['green', 'yellow', 'orange', 'red'];

const Mapa = () => {
  // Declaramos un state para el centrado del mapa
  let mapCenter = [41.392264, 2.202652];
  
  function SetGeoJson() {
    const map = useMap();
    const geojson = L.geoJson();
    
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

      map.fitBounds(layer.getBounds());


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
        <GeoJSON data={geoData} style={municipioStyle} onEachFeature={onEachMunicipio}/> 
      </>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '5vh' }}>Mapa de basura</h1>

      <MapContainer style={{ height: '80vh' }} center={mapCenter} zoom={10} maxZoom={30} scrollWheelZoom={true}>
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

        <SetGeoJson></SetGeoJson>

      </MapContainer>
    </div>
  );

};

export default Mapa;