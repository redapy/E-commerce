import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  text-transform: uppercase;
  font-size: 18px;
`;

export const Grid = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
  margin-top: 4rem;
  grid-template-columns: repeat(12, 1fr);
`;

// Product Fetails style
export const ProductDetails = styled.div`
  grid-column: 9/ -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Brand = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  margin-bottom: 1rem;
`;

export const ProductName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  margin-bottom: 3rem;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  margin: 3rem 0;
  span {
    font-size: 18px;
  }
  p {
    margin-top: 1rem;
  }
`;

export const AddCartButton = styled.button`
  width: 60%;
  padding: 18px 0;
  background-color: var(--primary);
  border: none;
  cursor: pointer;
  color: var(--white);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
`;

export const Description = styled.div`
  margin-top: 2rem;
  color: var(--textColor);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 159.96%;
  li {
    padding: 2px 0;
  }
`;
