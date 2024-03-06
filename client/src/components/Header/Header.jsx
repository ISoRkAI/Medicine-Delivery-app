import { NavLink, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
        <li>
          <NavLink to={"/shoppingCart"}>Shopping Cart</NavLink>
        </li>
      </ul>
      <Outlet />
    </header>
  );
};
