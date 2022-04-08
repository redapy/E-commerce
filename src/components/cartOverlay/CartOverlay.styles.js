import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  top: 80px;
  bottom: 0;
  background-color: rgba(57, 55, 72, 0.22);
  left: 0;
  right: 0;
`;
export const OverLay = styled.div`
  position: absolute;
  top: -2px;
  right: 70px;
  width: 325px;
  min-height: 250px;
  max-height: 800px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 14px;
  background-color: var(--white);
`;

export const Header = styled.h3`
  font-weight: 700;
  font-size: 16px;
  color: var(--textColor);
  align-self: flex-start;
  margin-bottom: 1.5rem;
  span {
    font-weight: 500;
  }
`;

export const ButtonsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const Button = styled.button`
  width: 47%;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.checkout ? "var(--primary)" : "transparent"};
  color: var(--white);
  border: ${(props) =>
    props.checkout ? "none" : "1px solid var(--textColor)"};
  padding: 12px;
  margin-top: 1rem;
  a {
    text-decoration: none;
    color: var(--textColor);
  }
`;
