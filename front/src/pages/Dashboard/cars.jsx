import React from "react";
import { Sectioncar } from "../../styles/styleGlobal";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cars = () => {
  return (
    <>
      <Sectioncar>
       <article>
      <div>
      <p>Datos</p>
      <div>
      <FontAwesomeIcon icon={faUser} />
       <FontAwesomeIcon icon={faUser} />
       <FontAwesomeIcon icon={faUser} />
      </div>
      </div>
        <div>
          <p>folder </p>
          <strong>Pertenece</strong>
        </div>
       </article>
      </Sectioncar>
    </>
  );
};

export default Cars;
