import L from 'leaflet';
/* import Palmera4 from "../img/Palmera4.png";
import Palmera3 from "../img/Palmera3.png";
import Palmera2 from "../img/Palmera2.png";
import Palmera1 from "../img/Palmera1.png";
import Palmera5 from "../img/Palmera5.png"; */
import beach from "../datos/beach.json";

/* const icono = new L.Icon({
    iconUrl: Palmera1, // url ubicación de imagen
    iconSize: [40, 40], // tamaño del icono
    shadowSize: [50, 64], // tamaño de la sombra
    iconAnchor: [20, 40], // punto del icono que corresponde a la posición del marcador
    popupAnchor: [0, -40] // punto relativo al marcador desde donde se deberá abrir el popup
}); */

const beachOk = beach.map(
  el => {el.m["-i"] = '0'+el.m["-i"]

  return el;

});

export { beachOk };