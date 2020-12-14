import L from 'leaflet';
import PalmeraA from "../img/PalmeraA.png";
/* import PalmeraN from "../img/PalmeraN.png";
import PalmeraR from "../img/PalmeraR.png";
import PalmeraV from "../img/PalmeraV.png";
import PalmeraNe from "../img/PalmeraNe.png"; */
import beach from "../datos/beach.json";

const icono = new L.Icon({
    iconUrl: PalmeraA, // url ubicación de imagen
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