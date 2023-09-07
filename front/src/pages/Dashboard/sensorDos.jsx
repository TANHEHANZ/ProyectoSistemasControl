import React from "react";
import { Sensores } from "../../styles/styleGlobal";

const SensorDos = () => {
  return (
    <Sensores>
      <section>
        <h2>Nombre del Sensor 2</h2>
        <div>reportes</div>
      </section>
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
    </Sensores>
  );
};

export default SensorDos;
