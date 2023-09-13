import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, NavLink } from "../../styles/styleGlobal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faCircleNodes,
  faHouse,
  faDatabase,
  faBoreHole,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

const NavDash = () => {
  const [expandir, setExpandir] = useState(false);
  return (
    <Container>
      <nav>
        <div>
          <strong>
            {" "}
            <FontAwesomeIcon icon={faBoreHole} bounce /> Sistemas
          </strong>{" "}
          de Control
        </div>
        <section>
          <FontAwesomeIcon icon={faHouse} />
          <NavLink to="/dashboard/Panel">Panel General</NavLink>
        </section>
        {/* <section>
          <img src="" alt="" />
          <NavLink to="/dashboard/Mapa">Mapa</NavLink>
        </section> */}
        <small>
          <FontAwesomeIcon icon={faCircleNodes} />{" "}
          <button onClick={() => setExpandir(!expandir)}>Sensores</button>
        </small>
        {expandir && (
          <aside>
            <section>
            <FontAwesomeIcon icon={faWifi} rotation={270} />
              <NavLink to="/dashboard/Sensor1">Sensor 1</NavLink>
            </section>
            <section>
            <FontAwesomeIcon icon={faWifi} rotation={270} />
              <NavLink to="/dashboard/Sensor2">Sensor 2</NavLink>
            </section>
          </aside>
        )}
        <section>
          <FontAwesomeIcon icon={faFilter} />
          <NavLink to="/dashboard/Filtro">Filtro de datos</NavLink>
        </section>
        <section>
          <FontAwesomeIcon icon={faDatabase} />
          <NavLink to="/dashboard/Historicos">Historicos Generales</NavLink>
        </section>
      </nav>
      <section>
        <Outlet />
      </section>
    </Container>
  );
};

export default NavDash;
