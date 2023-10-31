import React, { useEffect, useState, useRef } from "react";
import { Sensores } from "../../styles/styleGlobal";
import Informacion from "./Informacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
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
    }, 1000);

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
      <div>
        <section>
          <header>
            <FontAwesomeIcon icon={faCircleNodes} />
            <h2>Nombre del Sensor</h2>
            <button>Exportar Datos</button>
          </header>
          <div>reportes</div>
        </section>
        <aside>
          <FontAwesomeIcon icon={faCircleNodes} />
          <h3>Nombre del Sensor</h3>
        </aside>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>lectura</th>
              <th>hora</th>
              <th>fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>datos</td>
              <td>datos de lectura</td>
              <td>time</td>
              <td>datos</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Informacion />
    </Sensores>
  );
};

export default SensorUno;
