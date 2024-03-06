import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { Shop } from "../pages/Shop/Shop";
import { ShoppingCart } from "../pages/ShoppingCart/ShoppingCart";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
      </Route>
    </Routes>
  );
};
