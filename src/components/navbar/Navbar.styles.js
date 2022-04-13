import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4em;
  background-color: var(--white);
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
`;

export const Side = styled.div`
  width: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartIcon = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
  cursor: pointer;
  image {
    width: 20px;
    height: 20px;
  }
`;
