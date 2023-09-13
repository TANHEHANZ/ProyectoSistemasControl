import React from "react";
import { PanelDiv } from "../../styles/styleGlobal";
import Cars from "./cars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes, faMagnifyingGlass, faUserTie } from "@fortawesome/free-solid-svg-icons";
import Dispocitivos from "./dispocitivos";

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
    <Dispocitivos/>
      </article>
      <aside>
       
        <div>
       <FontAwesomeIcon icon={faUserTie} />
       <h4>Informacion de cada componente</h4>
       </div>
       <div>
          <input type="search"  placeholder="buscar"/>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <section>cars</section>
        <img src="" alt="" />
      </aside>
    </PanelDiv>
  );
};

export default Panel;
