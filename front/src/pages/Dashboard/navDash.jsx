import React from "react";
import { Outlet } from "react-router-dom";
import { Container ,NavLink} from "../../styles/styleGlobal";
const NavDash = () => {
  return (
    <Container>
      <nav>
        <NavLink to="/dashboard/Panel">Panel General</NavLink>
        <NavLink to="/dashboard/Mapa">Mapa</NavLink>
        <NavLink to="/dashboard/Sensor1">Sensor 1</NavLink>
        <NavLink to="/dashboard/Sensor2">Sensor 2</NavLink>
        <NavLink to="/dashboard/Sensor3">Sensor 3</NavLink>
        <NavLink to="/dashboard/Sensor4">Sensor 4</NavLink>
        <NavLink to="/dashboard/Graficos">Graficos Comparativos</NavLink>
        <NavLink to="/dashboard/Filtro">Filtro de datos</NavLink>
        <NavLink to="/dashboard/Historicos">Historicos Generales</NavLink>
        <NavLink to="/dashboard/Pagina">Pagina Usuarios</NavLink>
      </nav>
      <section>
        <Outlet />
      </section>
    </Container>
  );
};

export default NavDash;
