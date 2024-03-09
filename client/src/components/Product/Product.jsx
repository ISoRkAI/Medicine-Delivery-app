import { useContext, useEffect, useState } from "react";
import { fetchProduct } from "../../utils/products";
import {
  ProductBtn,
  ProductContainer,
  ProductImg,
  ProductItem,
  ProductList,
  ProductPrice,
  ProductText,
} from "./product.styled";
import { MyContext } from "../../provider/MyContextProvider";

export const Product = ({ selectedPharmacy }) => {
  const [product, setProduct] = useState([]);

  const { productCart, setProductCart } = useContext(MyContext);

  useEffect(() => {
    fetchProduct().then((data) => setProduct(data.product));
  }, []);

  const sortedProducts = product
    .map((item, index) => {
      if (index === 16) {
        return {
          ...item,
          nameProduct:
            "Офтамірин краплі очні/вушні/назальні 0,1 мг/мл флакон 5 мл",
        };
      }
      return item;
    })
    .filter(({ pharmacyId }) => pharmacyId === Number(selectedPharmacy));

  const addToCart = ({ nameProduct, imgURL, price, _id }) => {
    const isProductExist = productCart.find((item) => item._id === _id);

    if (!isProductExist) {
      setProductCart((prevArray) => [
        ...prevArray,
        { nameProduct, imgURL, price, _id, quantity: 1 },
      ]);
    }
  };

  return (
    <>
      {sortedProducts.length > 0 && (
        <ProductContainer>
          <ProductList>
            {sortedProducts.map((e) => {
              const { nameProduct, _id, imgURL, price } = e;
              return (
                <ProductItem key={_id}>
                  <ProductImg src={imgURL} alt={nameProduct} />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <ProductText>{nameProduct}</ProductText>
                      <ProductPrice>{price} грн</ProductPrice>
                    </div>
                    <ProductBtn onClick={() => addToCart(e)}>
                      add to Cart
                    </ProductBtn>
                  </div>
                </ProductItem>
              );
            })}
          </ProductList>
        </ProductContainer>
      )}
    </>
  );
};
