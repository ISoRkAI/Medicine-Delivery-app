import { useState } from "react";
import { Pharmacy } from "../../components/Pharmacy/Pharmacy";
import { Product } from "../../components/Product/Product";
import { MainContainer } from "./shop.styled";

export const Shop = () => {
  const [selectedPharmacy, setSelectedPharmacy] = useState(1);

  return (
    <MainContainer>
      <Pharmacy setSelectedPharmacy={setSelectedPharmacy} />
      <Product selectedPharmacy={selectedPharmacy} />
    </MainContainer>
  );
};
