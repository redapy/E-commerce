import styled from "styled-components";

export const Wrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.left ? "35px" : "")};
  right: ${(props) => (props.right ? "35px" : "")};
  background-color: transparent;
  border: none;
  img {
    width: 16px;
    height: 20px;
    object-fit: contain;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
`;
