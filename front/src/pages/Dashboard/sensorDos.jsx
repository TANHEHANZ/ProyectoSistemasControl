import React, { useEffect, useState } from "react";
import { Sensores } from "../../styles/styleGlobal";

const SensorDos = () => {

  const [sensor , setSensor] = useState ([]);
const URL_API = "192.168.56.1/api/humedad"
  useEffect(() => {
    fetch('URL_API')
      .then((response) => response.json())
      .then((data) => setSensorData(data));
  }, []);

  return (
    <div>
      <h1>Sensor Data</h1>
      <ul>
        {sensorData.map((data) => (
          <li key={data.id}>{data.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default SensorDos;
