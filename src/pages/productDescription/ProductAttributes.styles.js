import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Attribute = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
export const AttributeName = styled.p`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const AttributeItems = styled.div`
  display: flex;
  justify-content: start;
`;

export const Item = styled.button`
  border: 1px solid #a6a6a6;
  background-color: var(--white);
  padding: 20px;
  margin: 0 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color: ${(props) => props.color};
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;
