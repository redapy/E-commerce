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

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  .active {
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
  }

  li {
    padding: 0 1em;
  }

  a {
    display: flex;
    align-items: center;
    height: 80px;
    color: var(--textColor);
    text-decoration: 0;
    font-weight: 600;
    text-transform: uppercase;
    :hover {
      color: var(--primary);
      border-bottom: 2px solid var(--primary);
    }
  }
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
`;

export const Side = styled.div`
  width: 5%;
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
  image {
    width: 20px;
    height: 20px;
  }
`;
