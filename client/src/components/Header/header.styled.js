import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  margin: auto;
  padding: 15px;
  max-width: 1200px;
`;

export const HeaderList = styled.ul`
  display: flex;
`;

const underlineAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }

`;

export const HeaderItem = styled.li`
  position: relative;
  &:hover {
    &:after {
      content: "";
      position: absolute;
      bottom: 2px;
      width: 100%;
      height: 2px;
      background-color: #ff7601;
      transform-origin: 0% 50%;
      animation: ${underlineAnimation} 0.3s ease-out forwards;
    }
  }
`;

export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  color: #000000;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  text-align: center;
`;

export const Line = styled.span`
  display: block;
  width: 1px;
  height: 42px;
  text-align: center;
  background-color: #000000;
  margin: 0 10px;
`;
