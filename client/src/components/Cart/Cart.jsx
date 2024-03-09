import { useContext, useState } from "react";
import { MyContext } from "../../provider/MyContextProvider";
import {
  CartContainer,
  CartList,
  FormCartDelete,
  FormCartImg,
  FormCartInput,
  FormCartItem,
  FormCartPrice,
  FormCartSubmit,
  FormCartTotalPrice,
} from "./Cart.styled";
import { addOrder } from "../../utils/order";

export const Cart = ({ order, setOrder }) => {
  const { productCart, setProductCart } = useContext(MyContext);

  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
    setProductCart((prevProductCart) => {
      return prevProductCart.map((product) => {
        if (product._id === productId) {
          return {
            ...product,
            quantity: newQuantity,
          };
        }
        return product;
      });
    });
  };

  const calculateTotalPrice = () => {
    return productCart.reduce((total, item) => {
      const quantity = quantities[item._id] || 1;
      return total + quantity * item.price;
    }, 0);
  };

  const deleteProduct = (deleteId) => {
    const newProductArray = productCart.filter(({ _id }) => _id !== deleteId);
    setProductCart(newProductArray);
  };

  const submitOrder = async () => {
    await setOrder({
      ...order,
      totalPrice: calculateTotalPrice().toFixed(2),
      userOrder: productCart,
    });
    await addOrder(order);
    alert("Order successes");
  };
  return (
    <>
      {productCart.length > 0 && (
        <CartContainer>
          <CartList>
            {productCart.map(({ imgURL, nameProduct, price, _id }) => {
              return (
                <FormCartItem key={_id}>
                  <FormCartImg src={imgURL} alt={nameProduct} />
                  <div style={{ display: "flex", width: "100%" }}>
                    <div>
                      <p>{nameProduct}</p>
                      <FormCartPrice>{price} грн</FormCartPrice>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <FormCartDelete onClick={() => deleteProduct(_id)}>
                        X
                      </FormCartDelete>
                      <FormCartInput
                        type="number"
                        value={quantities[_id] || 1}
                        onChange={(e) =>
                          handleQuantityChange(
                            _id,
                            parseInt(e.target.value, 10)
                          )
                        }
                      ></FormCartInput>
                    </div>
                  </div>
                </FormCartItem>
              );
            })}
          </CartList>
          <FormCartTotalPrice>
            Total price: {calculateTotalPrice().toFixed(2)}
          </FormCartTotalPrice>
          <FormCartSubmit onClick={() => submitOrder()}>submit</FormCartSubmit>
        </CartContainer>
      )}
    </>
  );
};
