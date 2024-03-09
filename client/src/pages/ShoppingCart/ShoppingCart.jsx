import { useState } from "react";
import { Cart } from "../../components/Cart/Cart";
import { FormCart } from "../../components/FormCart/FormCart";
import { MainContainer } from "./shoppingCart.styled";

export const ShoppingCart = () => {
  const [order, setOrder] = useState({});

  return (
    <MainContainer>
      <FormCart order={order} setOrder={setOrder} />
      <Cart order={order} setOrder={setOrder} />
    </MainContainer>
  );
};
