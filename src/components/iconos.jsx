import L from 'leaflet';
import redflag from "../img/redflag.png";
import greenflag from "../img/greenflag.png";
import yellowflag from "../img/yellowflag.png";
import orangeflag from "../img/orangeflag.png";
import greenyellowflag from "../img/greenyellowflag.png";
import beach from "../datos/beach.json";

const icono = new L.Icon({
    iconUrl: greenflag, // url ubicación de imagen
    iconSize: [40, 40], // tamaño del icono
    shadowSize: [50, 64], // tamaño de la sombra
    iconAnchor: [20, 40], // punto del icono que corresponde a la posición del marcador
    popupAnchor: [0, -40] // punto relativo al marcador desde donde se deberá abrir el popup
});

const beachOk = beach.map(
  el => {el.m["-i"] = '0'+el.m["-i"]

  return el;

});

export { icono, beachOk };