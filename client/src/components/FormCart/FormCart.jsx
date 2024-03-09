import {
  FormCartContainer,
  FormCartItem,
  FormCartLabel,
  FormCartList,
} from "./formCart,styled";

export const FormCart = ({ order, setOrder }) => {
  const handleNameChange = (e) => {
    setOrder({ ...order, userName: e });
  };
  const handleEmailChange = (e) => {
    setOrder({ ...order, userEmail: e });
  };
  const handlePhoneChange = (e) => {
    setOrder({ ...order, userPhone: e });
  };
  const handleAddressChange = (e) => {
    setOrder({ ...order, userAddress: e });
  };
  return (
    <FormCartContainer>
      <FormCartList>
        <FormCartItem>
          <FormCartLabel>Name</FormCartLabel>
          <input onChange={(e) => handleNameChange(e.target.value)}></input>
        </FormCartItem>
        <FormCartItem>
          <FormCartLabel>Email</FormCartLabel>
          <input onChange={(e) => handleEmailChange(e.target.value)}></input>
        </FormCartItem>
        <FormCartItem>
          <FormCartLabel>Phone</FormCartLabel>
          <input
            type="number"
            onChange={(e) => handlePhoneChange(e.target.value)}
          ></input>
        </FormCartItem>
        <FormCartItem>
          <FormCartLabel>Address</FormCartLabel>
          <input onChange={(e) => handleAddressChange(e.target.value)}></input>
        </FormCartItem>
      </FormCartList>
    </FormCartContainer>
  );
};
