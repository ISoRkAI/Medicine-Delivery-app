import { useEffect, useState } from "react";
import { fetchProduct } from "../../utils/products";
import { ProductContainer, ProductItem, ProductList } from "./product.styled";

export const Product = ({ selectedPharmacy }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct().then((data) => setProduct(data.product));
  }, []);

  const sortedProducts = product.filter(
    ({ pharmacyId }) => pharmacyId === Number(selectedPharmacy)
  );

  return (
    <ProductContainer>
      <ProductList>
        {sortedProducts.map(
          ({ nameProduct, _id, imgURL, pharmacyId, price }) => {
            return (
              <ProductItem key={_id}>
                <img
                  style={{ width: 200, margin: "auto" }}
                  src={imgURL}
                  alt={nameProduct}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <p style={{ width: 200, margin: "auto" }}>{nameProduct}</p>
                    <p>{price} грн</p>
                  </div>
                  <button>add to Cart</button>
                </div>
              </ProductItem>
            );
          }
        )}
      </ProductList>
    </ProductContainer>
  );
};
