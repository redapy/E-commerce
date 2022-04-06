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
  font-size: 24px;
  line-height: 160%;
`;

export const Button = styled.button`
  border: 1px solid var(--textColor);
  padding: 6px 12px;
  background-color: transparent;
  font-style: normal;
  font-size: 24px;
`;
