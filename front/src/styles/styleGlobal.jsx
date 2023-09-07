import styled from "styled-components";
import { ComunFlex, colors } from "./dataStyle";
import { Link } from "react-router-dom";

export const Container = styled.section`
  ${ComunFlex}
  flex-direction:row;
  justify-content: flex-start;
  & > nav {
    width: 15vw;
    height: 100vh;
    ${ComunFlex}
    flex-direction:column;
    gap: 2em;
    background-color: ${colors.primary};
    & article {
      display: flex;
      flex-direction: column;
      width: 80%;
    }
    & button {
      text-align: start;
      background-color: transparent;
      border: none;
      color: ${colors.light};
      width: 100%;
      padding: 0.5em 2.1em;
      transition: all 0.3s ease-in-out;
      border-bottom: solid 1px ${colors.light};
      &::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: ${colors.light};
        left: 0.5em;
        top: 40%;
        border-radius: 50% 0;
      }
      &:hover {
        background-color: ${colors.secundary};
        color: ${colors.primary};
        transform: translateX(0.5em);
        border-radius: 0 0.3em 0.3em 0;
        &::after {
          background-color: ${colors.primary};
        }
      }
    }
  }
  & > section {
    width: 85vw;
    height: 100vh;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.light};
  width: 100%;
  padding: 0.5em 2em;
  border-bottom: solid 1px ${colors.light};
  position: relative;
  transition: all 0.3s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${colors.light};
    left: 0.5em;
    top: 40%;
    border-radius: 50% 0;
  }
  &:hover {
    background-color: ${colors.secundary};
    color: ${colors.primary};
    transform: translateX(0.5em);
    border-radius: 0 0.3em 0.3em 0;
    &::after {
      background-color: ${colors.primary};
    }
  }
`;
export const Sensores = styled.article`
  ${ComunFlex}
  width:100%;
  flex-direction: column;
  padding: 2em;
  & section {
    width: 100%;
    & div {
      width: 80%;
      height: 20em;
      margin: 0 auto;
      background-color: #0005;
    }
  }
  & table {
    margin: 1em auto;
    width: 100%;
    height: auto;
    border-collapse: collapse;
    position: relative;
    box-shadow: 0 5px 5px #0005;
    & th {
      font-size: 0.6em; /* Cambio: Tamaño de fuente aumentado */
      font-weight: 100; /* Cambio: Fuente en negrita */
      padding: 1em 0;
      background-color: ${colors.complemento}; /* Cambio: Color que combina con el Navbar */
      color: #fff; /* Cambio: Texto en color blanco */
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    & tr {
      border: solid 1px #0002;
      &:nth-child(2n) {
        background-color: ${colors.light}; /* Cambio: Color de fondo alternado */
        color: #000; /* Cambio: Texto en color blanco */
        & td {
          color: #000;
        }
        & button {
          color: #000;
        }
      }
      &:hover {
        background-color: ${colors.light}; /* Cambio: Color de fondo alternado */
        color: #000;
        transform: scale(
          1.01
        ); /* Cambio: Reducción de la escala al pasar el ratón */
        transition: all 0.3s ease; /* Cambio: Reducción de duración de transición */
        & > td {
          color: #000;
        }
        & button {
          color: #000;
        }
      }
    }

    & td {
      color: #333; /* Cambio: Color de texto más oscuro */
      font-weight: normal; /* Cambio: Fuente en normal */
      font-size: 1em;
      padding: 1em 0;
      text-align: center;
      border-collapse: collapse;
      &:nth-child(1) {
        padding: 0 1.5em;
      }
    }

    & tbody {
      display: block;
    }

    & tr {
      display: table;
      width: 100%;
      table-layout: fixed;
    }

    & tbody button {
      background-color: transparent;
      border: none;
      margin: 0 0.5em;
      color: #222059; /* Cambio: Color que combina con el Navbar */
      cursor: pointer;
    }
  }
`;
