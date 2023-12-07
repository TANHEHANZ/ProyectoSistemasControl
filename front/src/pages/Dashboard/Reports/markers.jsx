
import React, { useState } from "react";
import { Marker } from "react-leaflet";
// import { VenueLocationIcon } from "../VenueLocationIcon";

const Markers = () => {
  const [robotLocation, setRobotLocation] = useState({
    latitude: -17.3766865,
    longitude: -66.1615931,
  });
  return (
    // <Marker position={[robotLocation.latitude, robotLocation.longitude]} icon={VenueLocationIcon}/>
    <>
    </>
  );
};

export default Markers;
