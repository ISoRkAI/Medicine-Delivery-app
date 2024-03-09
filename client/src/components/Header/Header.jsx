import { Outlet } from "react-router-dom";
import {
  HeaderContainer,
  HeaderItem,
  HeaderList,
  HeaderNavLink,
  Line,
} from "./header.styled";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderList>
          <HeaderItem>
            <HeaderNavLink to={"/"}>Shop</HeaderNavLink>
          </HeaderItem>
          <Line></Line>
          <HeaderItem>
            <HeaderNavLink to={"/shoppingCart"}>Shopping Cart</HeaderNavLink>
          </HeaderItem>
        </HeaderList>
      </HeaderContainer>
      <Outlet />
    </>
  );
};
