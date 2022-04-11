import styled from "styled-components";

export const DropdownMenu = styled.div`
  position: relative;
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 6px;
  font-size: 18px;
  font-weight: 500;
  span {
    margin-right: 6px;
  }
`;

export const ToggleButton = styled.button`
  border: none;
  background-color: var(--white);
  padding: 2px;
  width: 20px;
  height: 20px;
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
  padding: 1em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  span {
    margin-left: 2px;
  }
`;
