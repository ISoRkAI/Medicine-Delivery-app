import styled from "styled-components";

export const ProductContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  border: solid;
  border-color: grey;
  margin-right: 20px;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const ProductItem = styled.li`
  align-content: center;
  border: solid;
  border-radius: 20px;
  padding: 10px;
  border-color: grey;
`;
