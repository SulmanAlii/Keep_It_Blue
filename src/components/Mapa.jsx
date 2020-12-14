import React, { useState, useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from 'react-leaflet';
import L, { geoJSON } from 'leaflet';
import { geoData } from './../datos/geo';
import { icono, beachOk } from './iconos';
import { Col, Container,Row } from 'reactstrap';
import Leaflet from "leaflet";
import img from '../tree.png';
import Formulario from './Formulario';
import Opinion from './Opinion';


// Token mapbox
const mapboxToken = 'pk.eyJ1IjoiYWxwZWxsYW1hcyIsImEiOiJja2kwazVsdm0wMWVnMnVxcWk0eWhmZGpsIn0.QMm5X6pi1TpBK6eHGACpig';

const Mapa = () => {
  // Declaramos el state de playas inicializado null
  const [playasComarca, setPlayasComarca] = useState([]);
  const [active, setActive] = useState(false);
  const [idcomarca, setidcomarca] = useState();
  const [nomCiudad, setnomCiudad] = useState();
  const [nomPlaya, setplaya] = useState(null);
  const [puntuaciones, setPuntuaciones] = useState(null);

  //Recibe CP y puntuacion media de la BBDD
  useEffect(() =>  {
      fetch("http://localhost:5000/comarca/puntuaciones")
      .then(data => data.json())
      .then(scores => setPuntuaciones(scores.data))
      .catch(err => console.log("ERROR", err))
  },[])
  console.log(puntuaciones);


  let DefaultIcon = Leaflet.icon({
    iconUrl: img,
    iconSize: [40, 40]
  });
  
  //Leaflet.Marker.prototype.options.icon = DefaultIcon;

  function playasFiltradas(layer) {
    // Comparar cp entre comarca y playa y devuelve un array con las playas que pertenecen a la comarca
    const correcto = beachOk.filter(el => el.m['-i'] === layer.feature.properties.codigo_postal);

    return correcto;
  }

  function SetGeoJson() {
    const map = useMap();

    // Estilos predefinidos para los municipios (layer)
    const municipioStyle = {
      weight: 1,
      opacity: 0.3,
      color: 'black',
      dashArray: 10,
      fillColor: 'blue',
      fillOpacity: 0.5
    }

    // Función para el evento click
    const onMunicipioClick = (event) => {
      const layer = event.target;
      console.log(layer);
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
      //const indexColor = Math.floor(Math.random() * arrayColor.length);

      //Recorremos array que viene de la BBDD para hacer match con el CP de este municipio
      puntuaciones.forEach(element => {
        if(element.cp == municipio.properties.codigo_postal){
          const redondeado = Math.round(element['AVG(puntuacion)']*1);
          layer.options.fillColor = getColor(redondeado);
        }
      });  
      
      // Eventos
      layer.on({
        click: onMunicipioClick,
        mouseover: onMunicipioMouseover,
        mouseout: onMunicipioMouseout,
      });
    }
      //------------LEYENDA-------------------------------------------------------------
      function getColor(d) {
        return d >= 5 ? 'green' :
          d >= 4 ? 'yellow' :
            d >= 3 ? 'orange' :
              d >= 2 ? 'red' :
                d >= 1 ? 'black' :
                  'blue';
      }
      function leyenda() {
        const legend = L.control({ position: 'bottomright' });
  
        legend.onAdd = function (map) {
          const div = L.DomUtil.create('div.leg', 'info legend'),
            grades = [0, 1, 2, 3, 4, 5];
          for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + '<br>';
          }
    
          return div;
        };
          
          legend.addTo(map);
          return legend;
      }
      useEffect(() => {
        const legend = leyenda();
        return () => map.removeControl(legend);
      }, []);

    //=========================================================================================
      if(puntuaciones){
        return (
          <GeoJSON data={geoData} style={municipioStyle} onEachFeature={onEachMunicipio} />
        );
      }else{
        return (
          <h3>Cargando...</h3>
        )
      }
      
    
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
    <Marker key={idx} position={[playa["-l"], playa["-o"]]} icon={DefaultIcon} >
      <Popup>
        {playa["-t"]}
        <i class="fa fa-plus" aria-hidden="true" onClick={() => addtoform(playa["-t"],playa["-i"],playa.m["-t"])} ></i>
      </Popup>
    </Marker>
  )); 

/*   const selectplaya = playasComarca.map((el, idx) => (
    <option key={idx} value={el["-t"]}>{el["-t"]}</option>
  )); */

  return (
    <Container>
      <Row>
      <Col xs={active ? "7" : "12"} >
        {/* <select className="custom-select" id="inputGroupSelect01">
          <option value="" selected>Escoge la playa ...</option>
          {selectplaya}
        </select> */}
        <MapContainer style={{ height: '75vh' }} center={[41.392264, 2.202652]} zoom={10} scrollWheelZoom={true}>
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
