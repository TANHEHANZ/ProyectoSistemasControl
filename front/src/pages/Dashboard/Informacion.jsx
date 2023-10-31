import React from 'react'
import { Informaciones } from '../../styles/styleGlobal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUserTie } from '@fortawesome/free-solid-svg-icons'

const Informacion = () => {
  return (
    <Informaciones>
        <div>
       <FontAwesomeIcon icon={faUserTie} />
       <h4>Informacion de cada componente</h4>
       </div>
       <div>
          <input type="search"  placeholder="buscar"/>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <section>cars</section>
    </Informaciones>
  )
}

export default Informacion
