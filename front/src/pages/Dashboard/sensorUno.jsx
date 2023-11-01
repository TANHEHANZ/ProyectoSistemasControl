import React, { useEffect, useState, useRef } from "react";
import { Sensores } from "../../styles/styleGlobal";
const baseUrl = import.meta.env.VITE_BACKEND_URL;
import Chart from "chart.js/auto";

const SensorUno = () => {
  const [turvi, setTurvi] = useState(null);
  const chartRef = useRef(null);

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
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Código para actualizar la gráfica cuando cambian los datos de turvi
    if (turvi) {
      updateChart();
    }
  }, [turvi]);

  const updateChart = () => {
    if (!chartRef.current) {
      // Si no hay una instancia de gráfica, crea una
      const ctx = document.getElementById("turviChart").getContext("2d");

      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: turvi.map((v) => v.created_at),
          datasets: [
            {
              label: "ValueTur",
              data: turvi.map((v) => v.valueTur),
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              fill: false,
            },
          ],
        },
      });
    } else {
      // Si hay una instancia de gráfica, actualiza los datos
      chartRef.current.data.labels = turvi.map((v) => v.created_at);
      chartRef.current.data.datasets[0].data = turvi.map((v) => v.valueTur);
      chartRef.current.update();
    }
  };

  return (
    <Sensores>
      <section>
        <h2>Sensor de Turvidez</h2>
        <div><canvas id="turviChart" width="280" height="100"></canvas></div>
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
