import styled from "styled-components";

export const DropdownMenu = styled.div`
  position: relative;
`;

export const ToggleButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: var(--white);
  width: 30px;
  cursor: pointer;
  span {
    display: block;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const CurrencyList = styled.ul`
  position: absolute;
  top: 40px;
  left: -15px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  list-style: none;
  width: 120px;
  min-height: 180px;
  padding: 1em 0.5em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  span {
    margin-left: 2px;
  }
  li {
    padding: 4px;
    padding-left: 6px;
    margin: 4px 0;
    :hover {
      color: var(--white);
      background-color: var(--primary);
    }
  }
`;
