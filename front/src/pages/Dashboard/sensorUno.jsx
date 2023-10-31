import React, { useEffect, useState } from "react";
import { Sensores } from "../../styles/styleGlobal";
const baseUrl = import.meta.env.VITE_BACKEND_URL;

const SensorUno = () => {
  const [turvi, setTurvi] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}tubidez`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTurvi(data);
      } else {
        console.error("Error al obtener los datos del sensor");
      }
    } catch (error) {
      console.error("Error al obtener los datos del sensor", error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Sensores>
      <section>
        <h2>Nombre del Sensor</h2>
        <div>reportes</div>
      </section>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>lectura</th>
            <th>hora</th>
            <th>fecha</th>
            <th>estado</th>
          </tr>
        </thead>
        <tbody>
          {turvi ? (
            turvi.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.valueTur}</td>
                <td>{v.created_at}</td>
                <td>{v.date}</td>
                <td>{v.state}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Cargando datos...</td>
            </tr>
          )}
        </tbody>
      </table>
    </Sensores>
  );
};

export default SensorUno;
