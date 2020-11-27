import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';

const Mapa =  () => {
  
  const polygon = [
    [41.388795, 2.201305],
    [41.389354, 2.200511],
    [41.38968, 2.20094],
    [41.389793, 2.200672],
    [41.390526, 2.201531],
    [41.391211, 2.203281],
    [41.391643, 2.204118],
    [41.391241, 2.204596],
    [41.390914, 2.203525],
    [41.390447, 2.20264],
    [41.389632, 2.201778],
    [41.388803, 2.2013],
  ]

  return (
    <div>
      <h1>test</h1>
      <MapContainer style={{height : '500px'}} center={[41.392264, 2.202652]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.390509, 2.202233]}>
          <Popup>
            Platja de la Nova Icària
          </Popup>
        </Marker>

        <Polygon pathOptions={{color : 'purple'}} positions={polygon} />

      </MapContainer>
    </div>
  );
};


export default Mapa;