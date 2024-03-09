import styled from "styled-components";

export const FormCartContainer = styled.div`
  height: 100%;
  padding: 20px;
  border-radius: 20px;
  border: solid;
  border-color: grey;
  margin-right: 20px;
`;

export const FormCartList = styled.ul``;

export const FormCartItem = styled.li`
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const FormCartLabel = styled.label`
  display: block;
`;

export const FormCartInput = styled.input`
  display: block;
`;
