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
      width:80%;
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
    width: calc(15vw - 100vw);
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
