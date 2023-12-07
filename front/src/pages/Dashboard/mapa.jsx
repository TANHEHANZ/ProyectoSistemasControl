import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { peticiongetdelete } from "../../services/getData";
const Mapa = () => {
  const [data, setData] = useState([]);
  const [robotLocation, setRobotLocation] = useState({
    latitude: -17.375067,
    longitude: -66.158403,
  });
  // -17.3754123,-66.1591234,20
  // -17.375067, -66.158403
  return (
    <MapContainer
      center={[robotLocation.latitude, robotLocation.longitude]}
      zoom={18}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Markers/> */}
      <Marker
        position={[robotLocation.latitude, robotLocation.longitude]}
      />
    </MapContainer>
  );
};

export default Mapa;
