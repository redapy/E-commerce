import styled from "styled-components";

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
