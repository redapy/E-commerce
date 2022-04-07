import styled from "styled-components";

export const Warapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Quantity = styled.p`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.overlay ? "16px" : "24px")};
  line-height: 26px;
`;

export const Button = styled.button`
  border: 1px solid var(--textColor);
  padding: ${(props) => (props.overlay ? "4px 8px" : "6px 12px")};
  background-color: transparent;
  font-style: normal;
  font-size: ${(props) => (props.overlay ? "14px" : "24px")};
  cursor: pointer;
`;
