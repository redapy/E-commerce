import styled from "styled-components";

export const Price = styled.p`
  font-style: normal;
  font-weight: ${(props) => (props.overlay ? "500" : "700")};
  font-size: ${(props) => (props.overlay ? "16px" : "24px")};
`;
