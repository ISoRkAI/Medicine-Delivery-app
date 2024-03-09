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

export const ProductImg = styled.img`
  width: 200px;
  margin: auto;
`;

export const ProductText = styled.p`
  color: #000000;
`;

export const ProductPrice = styled.p`
  color: #ff7601;
`;

export const ProductBtn = styled.button`
  min-width: 100px;
  max-height: 40px;
  border-radius: 20px;
  border: solid;
  border-color: grey;
  &:hover {
    background-color: #ff7601;
  }
`;
