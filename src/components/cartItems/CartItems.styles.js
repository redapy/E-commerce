import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  width: 90%;
  min-height: 200px;
  display: flex;
  padding: 1rem 0;
  border-top: 1px solid #e5e5e5;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

export const ProductBrand = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 1rem;
`;

export const ProductName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 1rem;
`;

export const SelectedAttributes = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 1rem;
  align-items: center;
  li {
    padding: 15px;
    margin-right: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    background-color: black;
    color: var(--white);
  }
`;
