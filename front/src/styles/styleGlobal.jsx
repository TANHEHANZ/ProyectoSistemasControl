import styled from "styled-components";
import { ComunFlex, colors } from "./dataStyle";
import { Link } from "react-router-dom";

export const Container = styled.section`
  ${ComunFlex}
  flex-direction:row;
  justify-content: flex-start;
  & > nav {
    width: 250px;
    ${ComunFlex}
    gap:1.5em;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    box-shadow: 0 2px 5px #0005;
    z-index: 5;
    & small {
      width: 90%;
      ${ComunFlex}
      gap:.5em;
      padding: 0 1em;
      margin: 0 auto;
      transition:all .5s ease-in-out;
      &:hover {
        border-left: solid 4px ${colors.primary};
      }
      & > button {
        border: none;
        width: 90%;
        background-color: transparent;
        text-align: start;
        font-size: 14px;
        color: ${colors.darck};
        font-weight: 300;
      }
    }
    & > section {
      width: 90%;
      ${ComunFlex}
      gap:.5em;
      padding: 0 1em;
      margin: 0 auto;
      &:hover {
        border-left: solid 4px ${colors.primary};
      }
      & img {
        width: 18px;
        height: 18px;
      }
    }
    & aside {
      width: 80%;
      padding: 0 1em;
      ${ComunFlex}
      flex-direction:column;
      align-items: start;
      & section {
        border-left: 2px solid ${colors.darck};
        padding: 0.5em;
        ${ComunFlex}
        gap:.5em;
        &:hover {
          border-left: 4px solid ${colors.primary};
        }
      }
    }
    & div {
      height: 10em;
      width: 80%;
      color: ${colors.primary};
      font-size: 0.8em;
      font-weight: 300;
      letter-spacing: 0.1em;
      gap: 0.5em;
      ${ComunFlex}
      justify-content:center;
      align-items: center;
      & strong {
        font-size: 1.2em;
        color: ${colors.darck};
        margin-bottom: 3px;
      }
    }
  }
  & > section {
    width: 85vw;
    height: 100vh;
    background-color: #eff2f8;
  }
`;

export const NavLink = styled(Link)`
  color: ${colors.darck};
  text-decoration: none;
  width: 90%;
  font-size: 14px;
  font-weight: 300;
`;
export const Sensores = styled.article`
  ${ComunFlex}
  width:100%;
  flex-direction: column;
  padding: 2em;
  gap: 1em;
  & section {
    width: 100%;

    & div {
      width: 80%;
      height: 20em;
      margin: 2em auto;
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
export const PanelDiv = styled.article`
  ${ComunFlex}
  & > article {
    width: calc(100% - 300px);
    height: 100vh;
    padding: 2em;
    & > div {
      ${ComunFlex}
      flex-direction:row;
      gap: 0.5em;
      justify-content: start;
      margin: 2em 0 4em 0;
      & h2 {
        font-size: 1.2em;
      }
    }
    & > section {
      ${ComunFlex}
      justify-content:start;
      flex-wrap: wrap;
      gap: 1em;
    }
  }
  & > aside {
    width: 300px;
    background-color: ${colors.light};
    height: 100vh;
    box-shadow: 0 2px 5px #0005;
    ${ComunFlex}
    flex-direction:column;
    gap: 1em;
    justify-content: start;
    padding: 2em;
    & > div {
      ${ComunFlex}
      gap:1em;
      & input {
        border: none;
        border-bottom: solid 1px #000;
        outline: none;
      }
    }
  }
`;

export const Sectioncar = styled.section`
  background-color: ${colors.primary};
  width: 15em;
  height: 12em;
  position: relative;
  border-radius: 0 1em 1em 1em;
  color: ${colors.light};
  box-shadow: 0 2px 5px #0002;
  &::after {
    background-color: ${colors.primary};
    content: "";
    width: 7em;
    height: 1.5em;
    position: absolute;
    top: -1em;
    border-radius: 1em 3em 0 0;
  }
  &::before {
    background-color: ${colors.primary};
    content: "";
    width: 1.5em;
    height: 1em;
    position: absolute;
    top: -0.2em;
    right: 7.5em;
    transform: rotate(45deg);
  }
  & article {
    width: 100%;
    padding: 2em;
    ${ComunFlex}
    gap:3em;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    & strong {
      font-size: 0.9em;
      letter-spacing: 2px;
      font-weight: 300;
    }
    & p {
      text-transform: uppercase;
      font-size: 0.7em;
      color: #fff8;
      letter-spacing: 2px;
    }
  }
`;

export const Table = styled.table`
  margin: 1em auto;
  width: 95%;
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
`;
