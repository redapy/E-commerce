import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const EmptyCart = styled.p`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 400;
`;

export const Item = styled.div`
  width: 90%;
  display: flex;
  padding: 1rem 0;
  border-top: ${(props) => (props.overlay ? "" : "1px solid #e5e5e5")};
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

export const ProductBrand = styled.p`
  font-style: normal;
  font-weight: ${(props) => (props.overlay ? "300" : "600")};
  font-size: ${(props) => (props.overlay ? "16px" : "30px")};
  margin-bottom: ${(props) => (props.overlay ? "0.5rem" : "1rem")};
  line-height: 22px;
`;

export const ProductName = styled.p`
  font-style: normal;
  font-weight: ${(props) => (props.overlay ? "300" : "400")};
  font-size: ${(props) => (props.overlay ? "16px" : "30px")};
  margin-bottom: ${(props) => (props.overlay ? "0.5rem" : "1rem")};
  line-height: 22px;
`;

export const SelectedAttributes = styled.ul`
  display: flex;
  list-style: none;
  margin-top: ${(props) => (props.overlay ? "0.5rem" : "1rem")};
  align-items: center;
  li {
    padding: ${(props) => (props.overlay ? "7px" : "15px")};
    margin-right: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => (props.overlay ? "14px" : "16px")};
    background-color: black;
    color: var(--white);
  }
`;

export const DeleteItem = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  margin-top: 1rem;
`;
