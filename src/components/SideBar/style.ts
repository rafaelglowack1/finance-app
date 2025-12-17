import styled from "styled-components";
import { colors } from "../../styles";
import { NavLink } from "react-router-dom";
import { Icons } from "../Header/styles";


export const Sidebar = styled.aside`
    width: 85px;
    height: 100vh;
    background-color: ${colors.Element};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 12px;
    border-right: 2px solid ${colors.background};
`
    export const HomeIcon = styled(Icons)`
    background-color: ${colors.primary};
    margin-bottom: 50px
    `
export const BottomIcons = styled(NavLink)`
  position: relative; /* IMPORTANTE: isso ancora a tooltip ao botão */
  background-color: ${colors.Element};
  border-radius: 18px;
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colors.background};
  }

  /* Tooltip */
  &::after {
    content: attr(data-label);
    position: absolute;
    top: 80%;
    left: calc(100% + 12px); /* Tooltip aparece ao LADO do botão */
    transform: translateY(-50%);
    background-color: #000;
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 12px;
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;

    export const SIdeIcons = styled.div`
    display: flex;
    flex-direction: column;
`
export const ExitIcon = styled(Icons)`
    transition: background-color 0.3s ease-in-out;
    border-radius: 18px;
    width: 60px;
    height: 60px;
    background-color: ${colors.Element};

    &:hover {
        background-color: ${colors.background};
        color: ${colors.Loss};

    }
`



