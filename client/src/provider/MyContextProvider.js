import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [productCart, setProductCart] = useState([]);

  return (
    <MyContext.Provider
      value={{
        productCart,
        setProductCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
