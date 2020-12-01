import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../node_modules/leaflet/dist/leaflet.css";
import dataa from "./beach.json";
import Leaflet from "leaflet";
import {Button} from'reactstrap';
import icon from "leaflet/dist/images/marker-icon.png";
import img from './tree.png'

let DefaultIcon = Leaflet.icon({
  iconUrl: img,
  iconSize : [40,40]
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;

function App() {

  const [beachName,setbeachName] = useState(null);

  // console.log(beachName);

  return (
    <div className="App">
    <MapContainer
      center={[41.445609, 2.24273]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        id="mapbox/light-v9"
      />
      {dataa.map((playa) => (
        <Marker position={[playa["-l"], playa["-o"]]} >
          <Popup>
          {playa["-t"]}
          <Button style={{marginLeft:"0.2rem", border:"none",padding:"0.2rem", background:"orange"}} onClick={() => setbeachName(playa["-t"])}>add</Button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    <h1>{beachName}</h1>
    </div>
  );
}

export default App;
