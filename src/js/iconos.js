import L from 'leaflet';
import chin from "../img/chin.png";

const icono = new L.Icon({
    iconUrl: chin, // url ubicación de imagen
    iconSize: [40, 40], // tamaño del icono
    shadowSize: [50, 64], // tamaño de la sombra
    iconAnchor: [20, 40], // punto del icono que corresponde a la posición del marcador
    popupAnchor: [0, -40] // punto relativo al marcador desde donde se deberá abrir el popup
});

export { icono };