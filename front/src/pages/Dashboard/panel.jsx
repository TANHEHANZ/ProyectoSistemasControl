import React from "react";
import { PanelDiv } from "../../styles/styleGlobal";
import Cars from "./cars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNodes,
  faMagnifyingGlass,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Dispocitivos from "./dispocitivos";
import Informacion from "./Informacion";
const Panel = () => {
  return (
    <PanelDiv>
      <article>
        <div>
          <FontAwesomeIcon icon={faUserTie} />
          <h2>Panel Administrativo</h2>
        </div>
        <section>
          <Cars />
          <Cars />
          <Cars />
        </section>
        <div>
          <FontAwesomeIcon icon={faCircleNodes} />
          <h2>Dispositivos Activos</h2>
        </div>
        <Dispocitivos />
      </article>
    
    </PanelDiv>
  );
};

export default Panel;
