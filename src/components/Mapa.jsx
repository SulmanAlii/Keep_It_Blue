import React, { useState } from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import { geoData } from './../datos/geo';
import comarcas from "../datos/polygons.json";
import { icono, beachOk } from './iconos';
import { Col, Container,Row } from 'reactstrap';
import Leaflet from "leaflet";
import img from '../tree.png';
import Formulario from './Formulario';
import Opinion from './Opinion';


// Token mapbox
const mapboxToken = 'pk.eyJ1IjoiYWxwZWxsYW1hcyIsImEiOiJja2kwazVsdm0wMWVnMnVxcWk0eWhmZGpsIn0.QMm5X6pi1TpBK6eHGACpig';

// Array para colorear el fondo de cada municipio (layer)
const arrayColor = ['green', 'yellow', 'orange', 'red'];

const Mapa = () => {
  // Declaramos el state de playas inicializado null
  const [playasComarca, setPlayasComarca] = useState([]);
  const [active, setActive] = useState(false);
  const [idcomarca, setidcomarca] = useState();
  const [nomCiudad, setnomCiudad] = useState();
  const [nomPlaya, setplaya] = useState(null);

  let DefaultIcon = Leaflet.icon({
    iconUrl: img,
    iconSize: [40, 40]
  });

  Leaflet.Marker.prototype.options.icon = DefaultIcon;

  function playasFiltradas(layer) {
    // Comparar cp entre comarca y playa y devuelve un array con las playas que pertenecen a la comarca
    const correcto = beachOk.filter(el => el.m['-i'] === layer.feature.properties.codigo_postal);

    return correcto;
  }

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
      //console.log(layer);
      map.fitBounds(layer.getBounds());
      setPlayasComarca(playasFiltradas(layer));

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
        <GeoJSON data={geoData} style={municipioStyle} onEachFeature={onEachMunicipio} />

    );
  }
  //Activa el formulario
  const addtoform = (nomPlaya,idcomarca,nomCiudad) => {
    setplaya(nomPlaya);
    setidcomarca(idcomarca)
    setnomCiudad(nomCiudad)

    setActive(true);
  };

  // Muestra las playas
  const playas = playasComarca.map((playa, idx) => (
    <Marker key={idx} position={[playa["-l"], playa["-o"]]} >
      <Popup>
        {playa["-t"]}
        <i class="fa fa-plus" aria-hidden="true" onClick={() => addtoform(playa["-t"],playa["-i"],playa.m["-t"])} ></i>
      </Popup>
    </Marker>
  ));

  

  const selectplaya = playasComarca.map((el, idx) => (
    <option key={idx} value={el["-t"]}>{el["-t"]}</option>
  ));

  return (
    <Container fluid>
      <Row>
      <Col xs={active ? "7" : "12"} >
        <select className="custom-select" id="inputGroupSelect01">
          <option value="" selected>Escoge la playa ...</option>
          {selectplaya}
        </select>
        <MapContainer style={{ height: '70vh' }} center={[41.392264, 2.202652]} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`}
            id="mapbox/light-v10"
          />
          {playas}
          <SetGeoJson />
        </MapContainer>
      </Col >
      <Col>
        {active ? <Formulario nomplaya={nomPlaya}  idcomarca={idcomarca} nomMunicipi={nomCiudad} active={active} setActive={setActive}/> : ""}
      </Col>
      </Row>
      <Opinion />
    </Container>

  );

};

export default Mapa;
