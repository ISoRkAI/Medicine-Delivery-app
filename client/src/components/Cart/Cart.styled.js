import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 20px;
  border: solid;
  border-color: grey;
  margin-right: 20px;
`;

export const CartList = styled.ul``;

export const FormCartItem = styled.li`
  display: flex;
  border-radius: 20px;
  border: solid;
  border-color: grey;
  padding: 20px;
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
export const FormCartImg = styled.img`
  width: 100px;
`;

export const FormCartPrice = styled.p`
  color: #ff7601;
`;

export const FormCartSubmit = styled.button`
  width: 150px;
  padding: 10px;
  border-radius: 20px;
  border: solid;
  border-color: grey;
  margin-right: 20px;
  &:hover {
    background-color: #ff7601;
  }
`;

export const FormCartDelete = styled.button`
  display: block;
  margin-left: auto;
  margin-bottom: 40px;
`;

export const FormCartInput = styled.input`
  display: block;
  margin-left: auto;
  margin-top: auto;
`;

export const FormCartTotalPrice = styled.p`
  display: block;
  color: #000000;
  padding: 10px;
  text-transform: uppercase;
  transition: 0.5s;
  overflow: hidden;
`;
