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
  const [active, setActive] = useState(1);

  useEffect(() => {
    fetchContacts().then((data) => setPharmacy(data.pharmacy));
  }, []);

  return (
    <>
      {pharmacy.length > 0 && (
        <PharmacyContainer>
          <PharmacyList>
            {pharmacy.map(({ namePharmacy, id }, index) => {
              return (
                <PharmacyItem key={id}>
                  <PharmacyBtn
                    style={{
                      backgroundColor:
                        index + 1 === Number(active) ? "#ff7601" : "#ffffff",
                    }}
                    onClick={() => {
                      setSelectedPharmacy(id);
                      setActive(id);
                    }}
                  >
                    {namePharmacy}
                  </PharmacyBtn>
                </PharmacyItem>
              );
            })}
          </PharmacyList>
        </PharmacyContainer>
      )}
    </>
  );
};
