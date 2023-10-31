import React from "react";
import { Sensores } from "../../styles/styleGlobal";
import Informacion from "./Informacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
const SensorUno = () => {
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
