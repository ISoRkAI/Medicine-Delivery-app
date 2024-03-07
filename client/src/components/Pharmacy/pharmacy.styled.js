import styled from "styled-components";

export const PharmacyContainer = styled.div`
  height: 100%;
  padding: 20px;
  border-radius: 20px;
  border: solid;
  border-color: grey;
  margin-right: 20px;
`;

export const PharmacyList = styled.ul``;

export const PharmacyItem = styled.li`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const PharmacyBtn = styled.button`
  border-radius: 20px;
  border: solid;
  border-color: grey;
  text-decoration: none;
  display: flex;
  color: #000000;
  padding: 10px;
  text-decoration: none;
  transition: 0.7s;
  overflow: hidden;
  text-align: center;
  justify-content: center;
  min-width: 150px;
  background-color: ${(p) =>
    p.index + 1 === Number(p.activeBtn) ? "#ff7601" : "#ffffff"};
  &:hover {
    background-color: #ff7601;
  }
`;
