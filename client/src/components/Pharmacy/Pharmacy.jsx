import { useEffect, useState } from "react";
import { fetchContacts } from "../../utils/pharmacies";
import {
  PharmacyBtn,
  PharmacyContainer,
  PharmacyItem,
  PharmacyList,
} from "./pharmacy.styled";

export const Pharmacy = ({ setSelectedPharmacy }) => {
  const [pharmacy, setPharmacy] = useState([]);
  const [activeBtn, setActiveBtn] = useState(1);

  useEffect(() => {
    fetchContacts().then((data) => setPharmacy(data.pharmacy));
  }, []);

  return (
    <PharmacyContainer>
      <PharmacyList>
        {pharmacy.map(({ namePharmacy, id }, index) => {
          return (
            <PharmacyItem key={id}>
              <PharmacyBtn
                index={index}
                activeBtn={activeBtn}
                onClick={() => {
                  setSelectedPharmacy(id);
                  setActiveBtn(id);
                }}
              >
                {namePharmacy}
              </PharmacyBtn>
            </PharmacyItem>
          );
        })}
      </PharmacyList>
    </PharmacyContainer>
  );
};
